-- Affiliate program v1 — the site's first database tables.
-- Money is stored as integer cents: SQLite REALs are floats, and commission
-- arithmetic must never inherit float rounding.

CREATE TABLE program_settings (
  -- Single row, enforced by the CHECK: settings are edited, never inserted.
  id INTEGER PRIMARY KEY CHECK (id = 1),
  discount_amount_cents INTEGER NOT NULL DEFAULT 100000,
  commission_amount_cents INTEGER NOT NULL DEFAULT 100000,
  currency TEXT NOT NULL DEFAULT 'EUR',
  program_active INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_by TEXT
);

INSERT INTO program_settings (id) VALUES (1);

CREATE TABLE affiliates (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  -- Lowercased before insert; the unique index is the real duplicate guard.
  email TEXT NOT NULL UNIQUE,
  -- Stored as entered — the repo has no phone-normalization library.
  phone TEXT NOT NULL,
  -- PBKDF2-SHA256, format "pbkdf2$<iterations>$<salt-b64>$<hash-b64>".
  password_hash TEXT NOT NULL,
  -- "PREFIX-SUFFIX", uppercase; see src/lib/affiliate/code.ts.
  code TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'suspended')),
  terms_accepted_at TEXT NOT NULL,
  terms_version TEXT NOT NULL,
  privacy_acknowledged_at TEXT NOT NULL,
  marketing_consent INTEGER NOT NULL DEFAULT 0,
  marketing_consent_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- One row = one manually recorded sale. Amounts are copied from
-- program_settings at creation time and never recomputed: changing the
-- program terms must not rewrite history.
CREATE TABLE referrals (
  id TEXT PRIMARY KEY,
  affiliate_id TEXT NOT NULL REFERENCES affiliates (id),
  buyer_label TEXT,
  property_reference TEXT,
  sale_date TEXT NOT NULL,
  discount_amount_cents INTEGER NOT NULL,
  commission_amount_cents INTEGER NOT NULL,
  currency TEXT NOT NULL,
  payout_status TEXT NOT NULL DEFAULT 'pending' CHECK (payout_status IN ('pending', 'paid')),
  paid_at TEXT,
  admin_note TEXT,
  created_by TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_referrals_affiliate ON referrals (affiliate_id);

-- Append-only; read by the admin Activity tab.
CREATE TABLE audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  actor TEXT NOT NULL,
  action TEXT NOT NULL,
  target_id TEXT,
  before_json TEXT,
  after_json TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Brute-force and registration throttling, keyed by scope:identifier
-- (e.g. "admin-login:1.2.3.4", "register:1.2.3.4"). Rows are deleted on
-- success, so the table stays small.
CREATE TABLE login_throttle (
  key TEXT PRIMARY KEY,
  attempts INTEGER NOT NULL DEFAULT 0,
  last_attempt_at TEXT NOT NULL DEFAULT (datetime('now'))
);
