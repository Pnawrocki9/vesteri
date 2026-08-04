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
- `NEXT_PUBLIC_SITE_URL` — kanoniczna domena do tagów `hreflang`
  (domyślnie `https://vesteri.com`).

## Wdrożenie — Cloudflare Workers

Strona działa na Cloudflare Workers przez [OpenNext](https://opennext.js.org/cloudflare).
Konfiguracja: `wrangler.jsonc` (nazwa workera, domeny `vesteri.com` i `www.vesteri.com`)
oraz `open-next.config.ts`.

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

- generuje sylwetki czterech rynków na landing (Cypr aktywny z gradientem
  akcentu; Hiszpania, Portugalia i Włochy wyszarzone), z wymaganym filtrem
  terytoriów zamorskich (Azory, Madera i Wyspy Kanaryjskie zniekształcałyby
  skalę map),
- generuje flagi w kształcie konturów sześciu krajów pochodzenia inwestorów
  (pasy flagi narodowej przycięte sylwetką kraju + połysk + cień),
- zapisuje wynik do `src/generated/maps.ts` i `src/generated/flags.ts`
  (pliki są commitowane).

Uruchamiany automatycznie przed każdym buildem (`prebuild`) albo ręcznie:

```bash
npm run generate:geo
```

Dzięki temu przeglądarka nie pobiera geodanych ani d3 w czasie działania strony.

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
