# Start here: Codex Cloud instructions (Polish)

**Najpierw:** połącz Codex Cloud z repozytorium, z którego wdrażana jest `www.vesteri.com`. Jeśli strona nie ma repozytorium, najpierw ustal faktyczne źródło kodu i metodę publikowania; nie twórz nowego projektu na ślepo.

**Pliki referencyjne:** rozpakuj paczkę i umieść katalog `vesteri-collective-handoff-v9` w repozytorium w `design-reference/` (najlepiej na oddzielnej gałęzi, jeszcze bez zmian w witrynie). Alternatywnie użyj obsługi załączników w Codex, jeśli dostępna, ale dopilnuj, żeby agent naprawdę mógł odczytać oba pliki HTML i wszystkie dokumenty. Można usunąć katalog referencyjny z docelowego wdrożenia, jeśli nie jest potrzebny runtime'owo.

**Pierwsze zadanie:** wklej cały tekst `docs/CODEX_TASK.md`. Zawiera obowiązkowy **STAGE A: analiza bez modyfikacji kodu**. Poproś o plan, konkretne pliki i pytania; nie zatwierdzaj wdrożenia automatycznie.

**Po Twojej akceptacji:** zezwól na implementację EN/PL w istniejącym stosie, zachowując zatwierdzoną responsywność mockupów. Nie trzeba projektować nowego mobile UI. Agent ma obowiązek przetestować oba języki w przeglądarce.

**Zdjęcia ofert:** przed publikacją doślij własne fotografie z obecnych listingów Vesteri oraz odpowiadające im prawdziwe linki `vesteri.estalara.com`. Nie implementuj feedu ani API.

**Bezpieczeństwo:** pracuj na branchu, sprawdź różnice, testy i staging. Merge i deployment dopiero za Twoją wyraźną zgodą.

**Uwaga:** sam ZIP i prompt nie wystarczą, jeśli Codex nie ma dostępu do repozytorium strony oraz zawartości plików referencyjnych.
