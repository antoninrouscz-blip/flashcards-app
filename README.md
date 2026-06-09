# Slovíčka

Mobilní webová aplikace na učení slovíček (flashcards + Anki-style spaced repetition + cloud sync).

## Setup

Aplikace je vanilla JS bez build kroku — stačí naservírovat soubory přes HTTP.

### Lokálně

```bash
python3 -m http.server 3457
# otevři http://localhost:3457
```

### Firebase (cloud sync)

1. Vytvoř projekt na <https://console.firebase.google.com>.
2. **Build → Authentication** → záložka *Sign-in method* → zapni **Google**.
3. **Build → Firestore Database** → *Create database* → Production mode → zvol region (např. `eur3`).
4. V Firestore záložce **Rules** vlož a publikuj:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```
5. ⚙ **Project settings** → dole *Your apps* → ikona `</>` → zaregistruj webovou aplikaci.
6. Zkopíruj `firebaseConfig` do `firebase-config.js` (přepiš všechny `PASTE_…`).
7. **Authentication → Settings → Authorized domains** → přidej `<tvuj-username>.github.io`.

### GitHub Pages

```bash
# Vytvoř repo na github.com, pak:
git remote add origin git@github.com:<tvuj-username>/flashcards-app.git
git push -u origin main
```

V repu na GitHubu: **Settings → Pages → Source: Deploy from a branch → main / root**. Po pár minutách bude appka na `https://<tvuj-username>.github.io/flashcards-app/`.

### Instalace na iPhone

1. Otevři appku v Safari.
2. Sdílet → *Přidat na plochu*.
3. Otevři z plochy → klikni *Přihlásit přes Google*.
4. Od tohoto okamžiku je tvůj postup neztracitelný — synchronizuje se s Firestore.

## Architektura

- **app.js** — UI, scheduling (Anki SM-2), state management
- **cloud.js** — Firebase auth + Firestore sync, debounced writes, snapshot listener
- **firebase-config.js** — tvoje Firebase keys (commitnuto, jsou veřejné, ochrana je v Firestore rules)
- **sw.js** — service worker, cachuje app shell pro offline použití
- **manifest.json** — PWA manifest pro „Add to Home Screen"

State žije v `localStorage` (instant read) i ve Firestore docu `users/<uid>` (zdroj pravdy). Změny se zapisují lokálně okamžitě a po 600ms debounce do cloudu. Snapshot listener stahuje změny z cloudu (užitečné, pokud bys appku používal na víc zařízeních).
