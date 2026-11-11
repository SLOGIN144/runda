# Runda

Runda je spletna platforma za družabne igre s pitjem (drinking games). Uporabnik si iz predloge ustvari svojo igro, doda svoja vprašanja in pravila ter jo igra s prijatelji. Gostitelj odpre sobo na računalniku, igralci pa se pridružijo s kodo sobe na svojem telefonu.

Šolska projektna naloga, Angular 20.

## Problem

Obstoječe aplikacije za drinking igre imajo slaba, butasta in ponavljajoča se vprašanja, so polne reklam, najboljši paketi vprašanj pa so plačljivi.

Runda je zastonj, brez reklam, vprašanja pa si ustvariš sam ali izbereš igro, ki jo je objavil drug uporabnik.

## Ciljna skupina

Mladi od 16 do 25 let na zabavah in druženjih.

## Funkcionalnosti

- Ustvarjanje sobe s kodo in pridružitev s kodo (vsak igralec na svojem telefonu)
- Tri predloge iger: **Kdo bi najverjetneje** (skrito glasovanje), **Resnica ali izziv** in **Še nikoli nisem**
- Ustvarjanje lastne igre iz predloge: ime, vprašanja, stopnja divjosti (mild, spicy, extreme) in pravila (koliko požirkov za kaj)
- Javne in zasebne igre ter iskanje javnih iger drugih uporabnikov
- Štetje požirkov in lestvica na koncu igre
- Zgodovina iger za prijavljene uporabnike
- Admin plošča za urejanje vprašanj, iger, predlog in uporabnikov

Za pozneje: igralci sami predlagajo vprašanja, nove predloge (Skrita misija, Hitri odziv, Kaos kartice), igranje v živo prek WebSocketa.

## Vloge

| Vloga | Račun | Pravice |
|---|---|---|
| Gost (igralec) | ne | vpiše kodo sobe in vzdevek, glasuje, odgovarja |
| Gostitelj | da (registracija, prijava, odjava) | ustvarja in ureja svoje igre, odpre sobo, vodi igro, vidi zgodovino |
| Admin | da | ureja uradne predloge, igre, vprašanja in uporabnike |

## Podatkovni model

| Entiteta | Atributi |
|---|---|
| Uporabnik | id, email, uporabniško ime, geslo, vloga (gostitelj, admin) |
| Predloga | id, ime, opis, privzeta pravila |
| Igra | id, ime, opis, avtor, predloga, divjost, javna, pravila, ustvarjena |
| Vprašanje | id, igra, besedilo, tip (resnica ali izziv), divjost |
| Soba | koda, gostitelj, igra, stanje (čaka, igra, končana), datum |
| Igralec | id, vzdevek, soba, požirki |
| Runda | id, soba, vprašanje, zaporedna številka |
| Glas | runda, kdo je glasoval, za koga |

## Zasloni

Domov, prijava in registracija, moje igre, urejevalnik igre, raziskuj javne igre, čakalnica, igra (glavni zaslon), rezultat runde, glasovanje na telefonu in admin plošča.

Dizajn: temno zelena, medeninasta in krem barva, pisavi Rye (naslovi) in Bitter (besedilo), ilustracije v slogu starega bara.

## Komponente

25 lastnih komponent, razdeljenih v mape:

```
src/app/
├── pages/        prikazi: home, login, my-games, game-editor, explore,
│                 lobby, play, round-result, vote, admin
├── layout/       header, nav, footer
├── ui/           button, panel, badge, text-input, stat-card
├── components/   game-card, question-card, question-list-item, player-list,
│                 drink-scoreboard, wildness-picker, room-code-input
└── services/     auth, game, room
```

## Naloge

Naloge po tednih so v [GitHub Issues](https://github.com/SLOGIN144/runda/issues) (milestoni »Teden 1«, »Teden 2« …) in na tabli GitHub Projects.

## Zagon

Potrebuješ Node.js in Angular CLI (`npm install -g @angular/cli`).

```bash
npm install
ng serve
```

Aplikacija se odpre na `http://localhost:4200/`.
