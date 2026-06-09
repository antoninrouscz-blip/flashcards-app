// ===== Firebase cloud sync =====
// Loads Firebase via compat scripts (in index.html), then wires:
//  - Google sign-in / sign-out
//  - Realtime sync of state document to/from Firestore
//  - Offline persistence so the app works without internet

(function () {
  // Will be populated from firebase-config.js (window.FIREBASE_CONFIG)
  const cfg = window.FIREBASE_CONFIG;

  // If config is missing/placeholder, run in offline-only mode.
  if (!cfg || !cfg.apiKey || cfg.apiKey === 'PASTE_API_KEY_HERE') {
    console.warn('Firebase config missing — running offline-only.');
    document.getElementById('signinOverlay')?.setAttribute('hidden', '');
    document.getElementById('syncStatus').dataset.status = 'offline';
    document.getElementById('syncStatus').textContent = '⚠︎ local only';
    return;
  }

  firebase.initializeApp(cfg);
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Local cache for offline use
  db.enablePersistence({ synchronizeTabs: false }).catch(err => {
    console.warn('Firestore persistence not enabled:', err.code);
  });

  let unsub = null;
  const provider = new firebase.auth.GoogleAuthProvider();

  window.__cloud = {
    user: null,
    async signIn() {
      try {
        // signInWithPopup works on desktop and modern mobile browsers
        await auth.signInWithPopup(provider);
      } catch (e) {
        if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') {
          await auth.signInWithRedirect(provider);
        } else {
          alert('Přihlášení selhalo: ' + e.message);
        }
      }
    },
    async signOut() {
      await auth.signOut();
      location.reload();
    },
    async saveState(state) {
      if (!this.user) throw new Error('not signed in');
      const ref = db.collection('users').doc(this.user.uid);
      await ref.set({
        state,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    },
  };

  // If sign-in was a redirect, this resolves it; otherwise resolves with null user
  auth.getRedirectResult().catch(e => console.warn('redirect result:', e));

  auth.onAuthStateChanged(async user => {
    if (unsub) { unsub(); unsub = null; }
    window.__cloud.user = user || null;

    if (!user) {
      document.getElementById('signinOverlay').hidden = false;
      document.getElementById('syncStatus').dataset.status = 'signedout';
      document.getElementById('syncStatus').textContent = '⊘ no account';
      return;
    }

    document.getElementById('signinOverlay').hidden = true;
    const emailEl = document.getElementById('signedInEmail');
    if (emailEl) emailEl.textContent = user.email || user.displayName || user.uid.slice(0, 8);

    document.getElementById('syncStatus').dataset.status = 'saving';
    document.getElementById('syncStatus').textContent = '↑ syncing';

    const ref = db.collection('users').doc(user.uid);

    // Subscribe to remote changes — if user installs on a 2nd device later
    // or edits via another tab, this keeps everything coherent.
    unsub = ref.onSnapshot(snap => {
      const data = snap.data();
      if (!data) {
        // First sign-in — cloud doc doesn't exist yet, push local
        window.__applyCloudState(null);
        return;
      }
      const incoming = data.state;
      window.__applyCloudState(incoming);
    }, err => {
      console.warn('snapshot err:', err);
      document.getElementById('syncStatus').dataset.status = 'offline';
      document.getElementById('syncStatus').textContent = '⚠︎ offline';
    });
  });

  // Wire UI
  document.addEventListener('click', e => {
    if (e.target.matches('#signinBtn, #signinBtn *')) {
      window.__cloud.signIn();
    } else if (e.target.matches('#signoutBtn, #signoutBtn *')) {
      if (confirm('Odhlásit? Data zůstanou v cloudu pod tvým účtem.')) {
        window.__cloud.signOut();
      }
    }
  });
})();
