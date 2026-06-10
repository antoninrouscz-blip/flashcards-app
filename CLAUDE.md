# CLAUDE.md

Pokyny pro Clauda při práci na tomto repu. Komentáře a UI jsou česky, kód anglicky — drž tuto konvenci.

## Co to je

**Slovíčka** — mobilní webová PWA na učení slovíček. Flashcards + Anki-style spaced repetition (SM-2) + cloud sync přes Firebase. Karty jsou EN ↔ CS (angličtina = `front`, čeština = `back`).

## Tech stack

Vanilla JS, **žádný build krok**. Jen statické soubory servírované přes HTTP. Firebase se načítá přes compat CDN skripty v `index.html`. Žádné npm dependencies pro běh appky.

Lokální vývoj:
```bash
python3 -m http.server 3457   # http://localhost:3457
```

## Soubory

- **index.html** — celé UI (2 taby: Učení / Karty), modály, sign-in overlay. Načítá Firebase CDN → `firebase-config.js` → `app.js` → `cloud.js` → registruje `sw.js`.
- **app.js** — jádro: seed karty, state management, SM-2 scheduling, veškerý rendering a event bindings.
- **cloud.js** — Firebase auth (Google) + Firestore sync. IIFE, vystavuje `window.__cloud`.
- **firebase-config.js** — Firebase klíče. **Commitnuto schválně** — jsou veřejné, ochranu řeší Firestore security rules.
- **sw.js** — service worker, cachuje app shell pro offline.
- **manifest.json** — PWA manifest (Add to Home Screen).
- **styles.css** — styly.
- **icons/** — `ohen.png` (streak/oheň), `tuzka.png` (edit cíle), `icon-*.png` (PWA ikony).

## Datový model

State žije v jednom objektu (`app.js` → `defaultState()`):
```
{ goal, streak, lastGoalReachedDay, todayKey, todayDone,
  sessionRetry: [cardId…], typingMode, cards: [...], nextId, updatedAt }
```

Karta:
```
{ id, front (EN), back (CS),
  state: 'new'|'learning'|'review'|'relearning',
  step, ease (def 2.5), interval (dny), reps, lapses,
  due (ms timestamp), lastGrade, lastReview, dir }
```
`dir`: 0 = EN→CS, 1 = CS→EN. Po každém úspěšném zhodnocení se směr karty střídá.

## SM-2 scheduling (`app.js`)

Konstanty v objektu `ANKI` (kopie Anki "Default" presetu): `learnSteps [1,10] min`, `relearnSteps [10] min`, `graduatingInterval 1 den`, ease 2.5 (min 1.3), hardMultiplier 1.2, po lapse interval resetuje na 0 %.

Hodnocení (grade): **0 = Neumím (Again)**, **1 = Meh (Hard)**, **2 = Umím (Good)**. Easy (4. tlačítko) není v UI.

`scheduleCard()` routuje podle `card.state` na `handleLearning / handleReview / handleRelearning`. **Neumím** v session jde přes `handleAgainInSession()` — karta se zaparkuje mimo due frontu (`due = dnes + 7 dní`) a přidá na konec `sessionRetry`, nepočítá se do denního cíle. `dueCards()` řadí: learning/relearning → new → review.

## Úložiště a sync (local-first)

1. `save()` zapíše do `localStorage` (klíč `slovicka.v1`) **okamžitě**, pak naplánuje cloud zápis s **600 ms debounce**.
2. Po přihlášení `cloud.js` poslouchá Firestore doc `users/<uid>` přes `onSnapshot` a volá `window.__applyCloudState()`.
3. `__applyCloudState()` řeší konflikty přes `updatedAt`: novější vyhrává (cloud novější → adopt, lokál novější → push nahoru, cloud prázdný → push lokál).

`loadState()` při startu **migruje starší schémata** a **mergne nové seed karty** do uloženého state (dedup podle českého slova v `back`, takže existující karty si drží postup). → **Když přidáváš nové karty do `SEED_CARDS`, objeví se i existujícím uživatelům automaticky.**

Bez Firebase configu (placeholdery) appka běží v offline-only režimu.

## Deploy workflow (GitHub Pages + Firebase)

Nasazení = `git push` na GitHub, Pages servíruje `main`/root → `https://<user>.github.io/flashcards-app/`. Data (postup uživatele) se ukládají do Firestore pod jeho účtem.

### ⚠️ Cache-busting — POVINNÉ při každém releasu

Service worker cachuje app shell **cache-first**. Bez verzování by uživatelé dostávali staré soubory. Při každé změně:

- **Změna `app.js`** → zvyš `app.js?v=N` v **`index.html`** (`<script src>`) **i v `sw.js`** (`APP_SHELL`), a zvyš `CACHE_VERSION` v `sw.js`.
- **Změna `cloud.js`** → totéž s `cloud.js?v=N`.
- **Změna `styles.css`, obrázků nebo jiných assetů** → stačí zvýšit `CACHE_VERSION` v `sw.js` (smaže starou cache, vše se přefetchuje).

`CACHE_VERSION` je teď `v8`. Bump = `v9`, atd.

## Gotchas

- Manuální „Přidat kartu" v UI (`addSave`) zapisuje kartu se starým schématem (`ef` místo `ease`, chybí `state`/`step`/…). `loadState()` to při příštím načtení zmigruje, takže to funguje, ale pozor na to při úpravách.
- `firebase-config.js` patří do gitu (viz výše) — neignoruj ho.
- UI texty jsou **česky**. Nové stringy piš česky.
- Firebase config requires v Authentication → Authorized domains přidaný `<user>.github.io`, jinak sign-in na produkci selže.
