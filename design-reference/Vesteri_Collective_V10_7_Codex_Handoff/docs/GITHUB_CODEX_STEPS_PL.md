# Vesteri V10.7: wdrożenie na aktualnej głównej gałęzi

**Decyzja właściciela:** nowa strona V10.7 EN/PL zastępuje poprzednią witrynę marketingową Vesteri na głównej gałęzi. Nie tworzymy osobnej gałęzi GitHub dla tej implementacji. Wyjątek: wewnętrzna gałąź `work` tworzona przez Codex Cloud jest szczegółem technicznym środowiska.

1. Pobierz i rozpakuj ZIP. Otrzymasz `Vesteri_Collective_V10_7_Codex_Handoff/` z folderami `preview/` i `docs/`.
2. Otwórz `Pnawrocki9/vesteri` na GitHubie. Upewnij się, że wybrana jest aktualna **główna gałąź używana do wdrożeń** (wcześniejsza analiza wskazywała `claude/vesteri-website-kxnbng`, ale potwierdź ją ponownie).
3. Otwórz `design-reference/` i prześlij rozpakowany folder `Vesteri_Collective_V10_7_Codex_Handoff` przez **Add file → Upload files**. Nie przesyłaj samego ZIP. Zapisz tylko materiały referencyjne.
4. **Uwaga na automatyczną publikację:** wcześniejsza analiza wykazała, że zwykły push na główną gałąź uruchamia GitHub Actions/Cloudflare i być może zdalne migracje. Już samo wgranie folderu przez GitHub może uruchomić ten workflow. Przed krokiem 3 sprawdź w `.github/workflows/deploy.yml`, czy push uruchamia produkcyjny deployment. Jeżeli tak, nie wgrywaj materiałów na tę gałąź, dopóki nie zaakceptujesz automatycznego wdrożenia albo nie wyłączysz wyzwalacza we właściwy, odwracalny sposób. Bezpieczną alternatywą jest przekazanie plików do środowiska Codex bez pushowania ich na GitHub.
5. Po zapewnieniu dostępu Codex do plików, uruchom zadanie w aktualnym środowisku Vesteri. Zweryfikuj obecność **sześciu** plików HTML i `docs/CODEX_IMPLEMENTATION_TASK.md`. Nie zakładaj, że Codex zobaczy nowe commity automatycznie.
6. Wklej prompt Gate A z sekcji poniżej; weryfikuje workflow deploy, aktualny commit, działanie Affiliate Program i dostęp do materiałów. Bez modyfikacji kodu.
7. Po akceptacji wyniku Gate A uruchom Gate B. Pozwól Codex zmieniać kod w swoim workspace opartym na głównej gałęzi, ale **bez pushowania**. Najpierw obejrzyj screenshots, testy i raport.
8. Dopiero gdy zatwierdzisz efekt i plan rollback, osobno autoryzuj push / produkcyjny deployment.

## Prompt Gate A

Read `design-reference/Vesteri_Collective_V10_7_Codex_Handoff/README_START_HERE.md` and `docs/CODEX_IMPLEMENTATION_TASK.md`. Verify all six EN/PL HTML files. We are replacing the old public marketing site with V10.7 on the existing primary branch; do not create a separate GitHub feature branch. First inspect the deployment workflow and explain exactly which Git actions trigger production deployment or migrations, document the current baseline commit and rollback options, identify Affiliate Program routes and dependencies, then return a safe implementation plan. Analysis only: do not modify app files, push, deploy or run remote migrations.

## Prompt Gate B

Proceed with V10.7 implementation according to `docs/CODEX_IMPLEMENTATION_TASK.md` on the working copy sourced from the repository's current primary branch. Replace obsolete marketing pages with all six EN/PL views. Preserve the functioning Affiliate Program with its footer link. All platform-related CTAs must go to `vesteri.estalara.com`. Do not build marketplace APIs. Run lint, tests, build, screenshot comparisons and Affiliate Program regression tests. Do not push or deploy, because the primary branch is production-triggering. Present results for approval before any publication.

**Wskazówka:** jeśli UI Codex Cloud tworzy techniczną gałąź `work`, nie oznacza to konieczności zakładania nowej gałęzi na GitHubie.
