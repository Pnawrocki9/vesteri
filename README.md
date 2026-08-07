# VESTERI — strona publiczna

Publiczna strona VESTERI: landing wejściowy (`/`) oraz strona B2B dla deweloperów.
Zbudowana w Next.js (App Router) + TypeScript + Tailwind CSS, w pełni statyczna (SSG),
dwujęzyczna (polski domyślny, angielski drugi) z prawdziwymi ścieżkami `/pl` i `/en`.

Źródłem prawdy dla designu i treści jest pakiet handoff
(`design_handoff_vesteri_website/README.md` — poza repozytorium).

## Uruchomienie lokalne

```bash
npm install
npm run dev        # http://localhost:3000 → przekierowanie na /pl lub /en
```

Build produkcyjny:

```bash
npm run build      # najpierw automatycznie regeneruje mapy i flagi (prebuild)
npm run start
```

Konfiguracja (opcjonalna) — skopiuj `.env.example` do `.env.local`:

- `NEXT_PUBLIC_INVESTOR_PLATFORM_URL` — adres platformy inwestorskiej
  (domyślnie `https://app.vesteri.com`),
- `NEXT_PUBLIC_SITE_URL` — kanoniczna domena do tagów `canonical` i `hreflang`
  (domyślnie `https://www.vesteri.com`).

## Wdrożenie — Cloudflare Workers

Strona działa na Cloudflare Workers przez [OpenNext](https://opennext.js.org/cloudflare).
Konfiguracja: `wrangler.jsonc` (nazwa workera, domeny `vesteri.com` i `www.vesteri.com`)
oraz `open-next.config.ts`.

Obie domeny są podpięte do workera, ale **kanoniczna jest `www.vesteri.com`** —
apex `vesteri.com` musi być przekierowany na nią kodem 301 regułą w panelu
Cloudflare (Rules → Redirect Rules). Bez tej reguły oba hosty zwracają 200
i cała strona istnieje w indeksie podwójnie.

```bash
npm run preview    # build OpenNext + lokalny podgląd workera
npm run deploy     # build OpenNext + wdrożenie na Cloudflare
```

Wdrożenie jest zautomatyzowane: workflow `.github/workflows/deploy.yml` uruchamia
`npm run deploy` po każdym pushu do gałęzi `claude/vesteri-website-kxnbng`
(oraz ręcznie z zakładki Actions). Wymaga dwóch sekretów w ustawieniach
repozytorium — **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN` — token z szablonu „Edit Cloudflare Workers",
- `CLOUDFLARE_ACCOUNT_ID` — identyfikator konta Cloudflare.

Bez tych sekretów workflow zakończy się błędem na kroku wdrożenia — sam push
do GitHuba nie aktualizuje produkcji.

## Struktura katalogów

```
brand/                     oryginalny brand pack (złoto na granacie) — materiały
                           brandowe/print, NIE używać na stronie
public/
  logo/                    turkusowe warianty logo (assets/web z handoffu)
  pattern/                 wzory tła (navy/cream), kafelkowane 180px
scripts/
  generate-geo.mjs         generator SVG map i flag (build-time, d3-geo + topojson)
vendor/
  world-atlas/             zvendorowany countries-50m.json (world-atlas@2.0.2,
                           Natural Earth, domena publiczna)
src/
  app/[locale]/            strony: / (landing), /developers, 4 strony prawne
  components/              LanguageSwitch, LegalPage
  generated/               maps.ts + flags.ts — SVG wygenerowane skryptem (commitowane)
  i18n/                    routing (ścieżki zlokalizowane), nawigacja, request config
  messages/                pl.json, en.json — wszystkie teksty obu wersji językowych
  middleware.ts            negocjacja języka (cookie → Accept-Language → polski)
```

## Internacjonalizacja

Routing robi [`next-intl`](https://next-intl.dev): prawdziwe ścieżki `/pl/...` i `/en/...`
ze zlokalizowanymi slugami (np. `/pl/dla-deweloperow` ↔ `/en/for-developers`),
tagami `hreflang` i osobnymi metadanymi per język. Język domyślny ustalany jest
z nagłówka `Accept-Language` (polski jako fallback), a wybór użytkownika jest
zapamiętywany w cookie. Przełącznik języka prowadzi zawsze do tego samego widoku
w drugim języku.

### Jak dodać nowy język

1. Dodaj kod języka do `locales` w `src/i18n/routing.ts` i uzupełnij zlokalizowane
   slugi w `pathnames`.
2. Utwórz plik wiadomości `src/messages/<kod>.json` (skopiuj strukturę z `pl.json`
   i przetłumacz wartości).
3. Gotowe — strony, metadane i tagi `hreflang` generują się automatycznie dla
   wszystkich wpisów z `routing.locales`.

## Mapy i flagi (generowane w czasie builda)

Kontury państw pochodzą z prawdziwych danych geograficznych — **nigdy nie są
rysowane ręcznie**. Źródłem jest zvendorowany plik
`vendor/world-atlas/countries-50m.json` (rozdzielczość 50m jest konieczna —
przy 110m Cypr traci kształt).

Skrypt `scripts/generate-geo.mjs`:

- generuje kontury trzech rynków „coming soon" na landingu (Hiszpania,
  Włochy, Portugalia — 200×74), z wymaganym filtrem terytoriów zamorskich
  (Azory, Madera i Wyspy Kanaryjskie zniekształcałyby skalę map). Aktywny
  rynek, Cypr, pokazywany jest jako dostarczony render reliefowy
  (`public/img/cyprus-relief.jpg`), nie jako generowana sylwetka,
- generuje flagi w kształcie konturów sześciu krajów pochodzenia inwestorów
  (pasy flagi narodowej przycięte sylwetką kraju + połysk + cień),
- zapisuje wynik do `src/generated/maps.ts` i `src/generated/flags.ts`
  (pliki są commitowane).

Uruchamiany automatycznie przed każdym buildem (`prebuild`) albo ręcznie:

```bash
npm run generate:geo
```

Dzięki temu przeglądarka nie pobiera geodanych ani d3 w czasie działania strony.

## Typografia

Montserrat ładowany jest w `src/app/[locale]/layout.tsx` dla całej strony.
Landing wejściowy dokłada **Cormorant Garamond** (nagłówek H1, numery filarów,
zdanie zamykające) — font ładowany jest lokalnie w `src/app/[locale]/page.tsx`
i przypięty do korzenia landingu, więc strona dla deweloperów pozostaje przy
samym Montserracie.

Style specyficzne dla landingu (animowane tło cyklu słonecznego, kołysanie
reliefu, krój serif) żyją w `src/app/[locale]/landing.css` — wszystkie klasy
mają prefiks `lp-`, a arkusz ładuje się wyłącznie na ścieżce `/`.

## Analityka

Strona korzysta z **Cloudflare Web Analytics** — analityki bez cookies, która
nie zapisuje niczego na urządzeniu odwiedzającego, więc nie wymaga banera zgody.

Beacon ładuje się tylko wtedy, gdy ustawiona jest zmienna
`NEXT_PUBLIC_CF_BEACON_TOKEN` (panel Cloudflare → Analytics & Logs →
Web Analytics → Add a site → token z fragmentu `data-cf-beacon`). Bez niej
skrypt nie jest renderowany, więc buildy lokalne i podglądowe nie zaśmiecają
statystyk produkcyjnych.

W CI token dodaje się jako zmienna repozytorium (Settings → Secrets and
variables → Actions → Variables) i przekazuje do kroku builda. Alternatywnie
Cloudflare potrafi wstrzykiwać beacon automatycznie dla domen za swoim proxy —
wtedy zmienna jest zbędna, ale wstrzyknięcie obejmuje całą domenę, także
przyszłą platformę.

## Dokumenty prawne

Źródłem prawdy są pliki Markdown w `src/content/legal/<język>/<dokument>.md` —
sześć dokumentów w dwóch językach (`privacy`, `terms`, `cookies`, `gdpr`, `ai`,
`disclaimers`). W tym formacie są redagowane i opiniowane prawnie.

Skrypt `scripts/generate-legal.mjs` wkleja je do `src/generated/legal.ts`, dzięki
czemu strony importują gotowe łańcuchy znaków zamiast czytać dysk — środowisko
Cloudflare Workers nie ma systemu plików. Skrypt przerywa build, jeśli któremuś
dokumentowi brakuje tłumaczenia.

Aby zmienić treść: popraw plik `.md` i uruchom build (albo `npm run generate:legal`).
Renderowaniem zajmuje się `src/components/LegalPage.tsx` — mapa elementów wiąże
Markdown ze skalą typograficzną strony, bez wtyczki `prose`.

## Tokeny designu

Kolory, skala typografii, promienie i cienie z handoffu są zdefiniowane jako
motyw Tailwinda w `src/app/globals.css` (blok `@theme`). Komponenty odwołują się
wyłącznie do tokenów — bez surowych hexów.

## Dostępność

- widoczny stan `:focus-visible` (obrys 2px w kolorze akcentu) na każdym
  elemencie interaktywnym,
- obracający się znak w hero zatrzymuje się przy
  `prefers-reduced-motion: reduce`,
- `<html lang>` zgodny z aktywnym językiem, płynne kotwice z `scroll-margin-top`
  pod sticky nawigacją.
