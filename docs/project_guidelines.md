# CALCOMAT – Project Guidelines

## Repozytorium projektu
Projekt jest przechowywany w repozytorium GitHub:
batumneo1/calcomat

Repozytorium zawiera:
- kod strony
- kalkulatory
- dokumentację projektu

## Branch workflow

main – produkcja  
dev – development  

Branch roboczy:

feature/nazwa-funkcji

Workflow pracy:

feature → dev → main

## Deployment

Cloudflare Pages:

main → produkcja  
dev → środowisko developerskie

## Dokumentacja

Dokumentacja projektu znajduje się w katalogu:

docs/
## Development workflow

Nowe funkcje i kalkulatory tworzone są w branchach typu:

feature/nazwa-funkcji

Przykład:

feature/bmi  
feature/kredyt  
feature/kwh

Proces pracy:

1. utworzenie branch feature z dev
2. rozwój funkcji
3. merge do dev (testy)
4. pull request dev → main
5. publikacja na produkcji