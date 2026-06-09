// 1. Jdi na https://console.firebase.google.com a vytvoř nový projekt
// 2. V projektu klikni vlevo na ⚙ -> Project settings
// 3. Dole v "Your apps" klikni na </> ikonu pro webovou aplikaci, zaregistruj ji
// 4. Zkopíruj firebaseConfig sem dolů (přepiš placeholdery)
// 5. V Build -> Authentication zapni Google sign-in provider
// 6. V Build -> Firestore Database vytvoř databázi (production mode je OK)
//    a do Rules vlož:
//
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /users/{userId} {
//          allow read, write: if request.auth != null && request.auth.uid == userId;
//        }
//      }
//    }
//
// 7. V Authentication -> Settings -> Authorized domains přidej tvou GitHub Pages doménu
//    (např. tvuj-username.github.io)

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAra58Bn67dO-3qIc3XmVfvkAWlHkqyGL8",
  authDomain: "flashcards-7dab4.firebaseapp.com",
  projectId: "flashcards-7dab4",
  storageBucket: "flashcards-7dab4.firebasestorage.app",
  messagingSenderId: "1049333941070",
  appId: "1:1049333941070:web:db8bb5e3605ce2ab59541f",
};
