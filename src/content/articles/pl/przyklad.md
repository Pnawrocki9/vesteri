---
title: Przykładowy artykuł
description: Tekst istnieje wyłącznie po to, by udokumentować format i przetestować pipeline. Nie trafia na produkcję.
slug: przyklad
published: 2026-08-08
author: piotr
draft: true
---

To jest szkielet pliku artykułu. Skopiuj go, zmień nazwę pliku na identyfikator
artykułu i usuń `draft: true`, gdy tekst będzie gotowy do publikacji.

## Zasady

Tytuł bierze się z pola `title` we frontmatterze i to on renderuje się jako H1,
więc **treść zaczyna się od `##`** — plik z nagłówkiem `#` przerwie build.

- **Nazwa pliku** jest identyfikatorem artykułu wspólnym dla języków. Plik o tej
  samej nazwie w `en/` to ten sam artykuł po angielsku.
- **`slug`** to adres URL w danym języku i może się różnić między wersjami.
- **`draft: true`** trzyma tekst poza buildem: bez trasy, bez wpisu w sitemapie,
  bez pozycji na liście.
