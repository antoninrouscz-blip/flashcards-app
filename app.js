// ===== Storage =====
const STORAGE_KEY = 'slovicka.v1';
const DAY = 24 * 60 * 60 * 1000;

// Cat reward images shown when the daily challenge is completed (in cats/).
const CAT_GIFS = [
  '200w.gif',
  '730d75ed729397068c7a89fa7476e305.gif',
  'WRJGEt5.jpg',
  'cat-cat-kiss.gif',
  'cat-gif-14.gif',
  'couple-cat-kiss-lick-c9m5z197jxjhgt3f.gif',
  'giphy-downsized-large.gif',
  'giphy-downsized-medium.gif',
  'p1vyftmarq0a1.gif',
  'xgzjmlfeibv7ibqgljkq.webp',
];

const SEED_CARDS = [
  ['apple', 'jablko'],
  ['house', 'dům'],
  ['car', 'auto'],
  ['water', 'voda'],
  ['book', 'kniha'],
  ['tree', 'strom'],
  ['friend', 'přítel'],
  ['city', 'město'],
  ['night', 'noc'],
  ['morning', 'ráno'],
  ['sun', 'slunce'],
  ['moon', 'měsíc'],
  ['hello', 'ahoj'],
  ['thank you', 'děkuji'],
  ['please', 'prosím'],
  ['yes', 'ano'],
  ['no', 'ne'],
  ['love', 'láska'],
  ['dog', 'pes'],
  ['cat', 'kočka'],
  ['bread', 'chleba'],
  ['cheese', 'sýr'],
  ['school', 'škola'],
  ['work', 'práce'],
  ['summer', 'léto'],
  // Food & drink
  ['potatoes', 'brambory'],
  ['tea', 'čaj'],
  ['french fries', 'hranolky'],
  ['coffee', 'káva'],
  ['dumplings', 'knedlíky'],
  ['chicken', 'kuře'],
  ['meat', 'maso'],
  ['pancakes / crepes', 'palačinky'],
  ['beer', 'pivo'],
  ['soup', 'polévka'],
  ['rice', 'rýže'],
  ['salmon', 'losos'],
  ['wine', 'víno'],
  ['ice cream', 'zmrzlina'],
  // Times of day
  ['late morning', 'dopoledne'],
  ['noon', 'poledne'],
  ['afternoon', 'odpoledne'],
  ['evening', 'večer'],
  // Verbs
  ['to cook', 'vařit'],
  ['to swim', 'plavat'],
  ['to read', 'číst'],
  ['to exercise', 'cvičit'],
  // Frequency
  ['always', 'vždycky'],
  ['all the time / constantly', 'pořád'],
  ['often', 'často'],
  ['mostly', 'většinou'],
  ['usually', 'obvykle'],
  ['sometimes', 'někdy'],
  ['never', 'nikdy'],
  // Family
  ['grandma', 'babička'],
  ['brother', 'bratr'],
  ['daughter', 'dcera'],
  ['mother (mom)', 'matka (mamka)'],
  ['husband', 'manžel'],
  ['wife', 'manželka'],
  ['grandfather (grandpa)', 'dědeček (děda)'],
  ['father (dad)', 'otec (táta)'],
  ['sister', 'sestra'],
  ['son', 'syn'],
  ['granddaughter', 'vnučka'],
  ['grandson', 'vnuk'],
  // Jobs
  ['clerk / office worker', 'úředník'],
  ['worker / laborer', 'dělník'],
  ['waiter', 'číšník'],
  ['teacher', 'učitel'],
  ['doctor', 'doktor'],
  ['shop assistant / salesperson', 'prodavač'],
  ['manager', 'manažer'],
  ['scientist', 'vědec'],
  ['police officer', 'policista'],
  ['cleaner / janitor', 'uklízeč'],
  ['firefighter', 'hasič'],
  ['athlete', 'sportovec'],
  ['actor', 'herec'],
  ['singer', 'zpěvák'],
  ['politician', 'politik'],
  // Daily routine verbs
  ['to get up / to wake up', 'vstávat'],
  ['to have breakfast', 'snídat'],
  ['to have lunch', 'obědvat'],
  ['to have dinner', 'večeřet'],
  ['to study / to learn', 'učit se'],
  ['to clean', 'uklízet'],
  ['to shop', 'nakupovat'],
  ['to dance', 'tancovat'],
  ['to sleep', 'spát'],
  // Places
  ['theater', 'divadlo'],
  ['at home', 'doma'],
  ['office', 'kancelář'],
  ['club', 'klub'],
  ['train station', 'nádraží'],
  ['square', 'náměstí'],
  ['hospital', 'nemocnice'],
  ['university', 'univerzita'],
  // Adjectives
  ['good', 'dobrý'],
  ['bad', 'špatný'],
  ['thin / skinny', 'hubený'],
  ['fat / thick', 'tlustý'],
  ['poor', 'chudý'],
  ['rich', 'bohatý'],
  ['pretty', 'hezký'],
  ['ugly', 'škaredý'],
  ['happy', 'veselý'],
  ['sad', 'smutný'],
  ['young', 'mladý'],
  ['old', 'starý'],
  ['tall / high', 'vysoký'],
  ['small / short', 'malý'],
  ['expensive', 'drahý'],
  ['cheap', 'levný'],
  ['kind', 'hodný'],
  ['evil', 'zlý'],
  // Time expressions
  ['yesterday', 'včera'],
  ['the day before yesterday', 'předevčírem'],
  ['last week', 'minulý týden'],
  ['at first', 'nejdřív'],
  ['then / afterwards', 'pak / potom'],
  ['in the end', 'nakonec'],
  ['for the first time', 'poprvé'],
  ['for the last time', 'naposled'],
  // Rooms & home places
  ['balcony', 'balkon'],
  ["children's room", 'dětský pokoj'],
  ['garage', 'garáž'],
  ['bathroom', 'koupelna'],
  ['kitchen', 'kuchyň'],
  ['bedroom', 'ložnice'],
  ['living room', 'obývák'],
  ['hallway', 'předsíň'],
  ['attic', 'půda'],
  ['basement', 'sklep'],
  ['garden', 'zahrada'],
  ['toilet', 'záchod'],
  // Furniture & home items
  ['carpet', 'koberec'],
  ['armchair', 'křeslo'],
  ['kitchen counter', 'kuchyňská linka'],
  ['lamp', 'lampa'],
  ['fridge', 'lednička'],
  ['dishwasher', 'myčka'],
  ['bed', 'postel'],
  ['washing machine', 'pračka'],
  ['couch', 'pohovka'],
  ['table', 'stůl'],
  ['shower', 'sprcha'],
  ['wardrobe', 'skříň'],
  ['bathtub', 'vana'],
  ['mirror', 'zrcadlo'],
  ['chair', 'židle'],
  // Verbs
  ['to sell', 'prodat'],
  ['to buy', 'koupit'],
  ['to rent', 'pronajmout'],
];

function startOfDay(ts = Date.now()) {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function defaultState() {
  const today = startOfDay();
  return {
    goal: 10,
    streak: 0,
    lastGoalReachedDay: 0,
    todayKey: today,
    todayDone: 0,
    // FIFO queue of card IDs that were graded "Neumím" today
    // and need to be re-shown within the same session
    sessionRetry: [],
    // Typing mode: when true, user must type the translation
    // before seeing the answer (instead of just clicking Ukázat)
    typingMode: false,
    cards: SEED_CARDS.map(([f, b], i) => ({
      id: i + 1,
      front: f,
      back: b,
      // Anki-style SM-2 state
      state: 'new',        // 'new' | 'learning' | 'review' | 'relearning'
      step: 0,             // index into learnSteps / relearnSteps
      ease: 2.5,           // ease factor (factor in Anki UI = ease*100 %)
      interval: 0,         // days (only meaningful in review state)
      reps: 0,             // total reviews ever
      lapses: 0,           // times forgotten while in review
      due: today,          // ms timestamp when card becomes due
      lastGrade: null,
      lastReview: 0,       // ms timestamp of last review
      // direction toggle: 0 = front→back (EN→CS), 1 = back→front (CS→EN)
      dir: 0,
      // stable random sort key so cards aren't shown in add order
      ord: Math.random(),
    })),
    nextId: SEED_CARDS.length + 1,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const s = JSON.parse(raw);
    // migrate older saves to new card schema
    for (const c of s.cards) {
      if (typeof c.dir !== 'number') c.dir = 0;
      if (typeof c.ease !== 'number') c.ease = (typeof c.ef === 'number') ? c.ef : 2.5;
      if (typeof c.state !== 'string') {
        c.state = (c.reps === 0 && c.lastGrade === null) ? 'new'
                : (c.interval >= 1 ? 'review' : 'learning');
      }
      if (typeof c.step !== 'number') c.step = 0;
      if (typeof c.lapses !== 'number') c.lapses = 0;
      if (typeof c.lastReview !== 'number') c.lastReview = 0;
      if (typeof c.ord !== 'number') c.ord = Math.random();
      delete c.ef;
    }
    if (!Array.isArray(s.sessionRetry)) s.sessionRetry = [];
    if (typeof s.typingMode !== 'boolean') s.typingMode = false;
    // Merge in any new seed cards added since this deck was saved.
    // Dedup by Czech word (back), so existing cards keep their progress.
    const norm = w => String(w).trim().toLowerCase();
    const haveBacks = new Set(s.cards.map(c => norm(c.back)));
    let nextId = Math.max(s.nextId || 0, ...s.cards.map(c => c.id || 0)) + 1;
    const seedToday = startOfDay();
    for (const [f, b] of SEED_CARDS) {
      if (haveBacks.has(norm(b))) continue;
      haveBacks.add(norm(b));
      s.cards.push({
        id: nextId++,
        front: f, back: b,
        state: 'new', step: 0, ease: 2.5, interval: 0,
        reps: 0, lapses: 0, due: seedToday, lastGrade: null, lastReview: 0, dir: 0,
        ord: Math.random(),
      });
    }
    s.nextId = nextId;
    // day rollover
    const today = startOfDay();
    if (s.todayKey !== today) {
      const yesterday = today - DAY;
      if (s.lastGoalReachedDay !== yesterday && s.lastGoalReachedDay !== today) {
        s.streak = 0;
      }
      s.todayKey = today;
      s.todayDone = 0;
      s.sessionRetry = [];
    }
    return s;
  } catch {
    return defaultState();
  }
}
// Local-first save: write to localStorage immediately (instant),
// then debounce-write to Firestore so we never DDOS the cloud on rapid grades.
let cloudSaveTimer = null;
let cloudSaveInflight = false;
function save() {
  state.updatedAt = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleCloudSave();
}
function scheduleCloudSave() {
  if (!window.__cloud || !window.__cloud.user) return;
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer = setTimeout(() => flushCloudSave(), 600);
}
async function flushCloudSave() {
  if (!window.__cloud || !window.__cloud.user) return;
  if (cloudSaveInflight) {
    // another write is in flight; reschedule ours to run after
    cloudSaveTimer = setTimeout(flushCloudSave, 600);
    return;
  }
  cloudSaveInflight = true;
  try {
    await window.__cloud.saveState(state);
    setSyncStatus('synced');
  } catch (e) {
    console.warn('cloud save failed:', e);
    setSyncStatus('offline');
  } finally {
    cloudSaveInflight = false;
  }
}
// Flush pending writes when the page goes away (best-effort)
window.addEventListener('pagehide', () => { if (cloudSaveTimer) flushCloudSave(); });
window.addEventListener('beforeunload', () => { if (cloudSaveTimer) flushCloudSave(); });

let state = loadState();
window.__app = { getState: () => state, setState: s => { state = s; }, save };

function setSyncStatus(status) {
  const el = document.getElementById('syncStatus');
  if (!el) return;
  el.dataset.status = status;
  el.textContent = ({
    synced:  '☁︎ synced',
    saving:  '↑ syncing',
    offline: '⚠︎ offline',
    signedout: '⊘ no account',
  })[status] || '';
}

// ===== Anki-style SM-2 scheduling =====
// Default deck options matching Anki's "Default" preset.
const ANKI = {
  learnSteps:   [1, 10],   // minutes, learning phase (new cards)
  relearnSteps: [10],      // minutes, relearning phase (after a lapse)
  graduatingInterval: 1,   // days, when card graduates from learning
  startingEase: 2.5,       // 250%
  minEase: 1.3,            // 130%
  hardMultiplier: 1.2,     // Hard interval = currentInterval * 1.2
  easyBonus: 1.3,          // (Easy not exposed in UI, 3-button only)
  intervalModifier: 1.0,
  newIntervalAfterLapse: 0.0,  // % of old interval to keep after lapse (0 = reset)
  lapseMinInterval: 1,         // days
  leechThreshold: 8,
};

const MIN = 60 * 1000;

// grade: 0 = Again (Neumím), 1 = Hard (Meh), 2 = Good (Umím)
function scheduleCard(card, grade) {
  const now = Date.now();
  card.lastReview = now;
  card.reps += 1;
  card.lastGrade = grade;

  if (card.state === 'new') {
    card.state = 'learning';
    card.step = 0;
  }

  if (card.state === 'learning') {
    handleLearning(card, grade, now, ANKI.learnSteps);
  } else if (card.state === 'review') {
    handleReview(card, grade, now);
  } else if (card.state === 'relearning') {
    handleRelearning(card, grade, now);
  }
}

function handleLearning(card, grade, now, steps) {
  if (grade === 0) {
    // Again — back to first step
    card.step = 0;
    card.due = now + steps[0] * MIN;
  } else if (grade === 1) {
    // Hard — repeat current step
    card.due = now + steps[card.step] * MIN;
  } else {
    // Good — advance step or graduate
    if (card.step + 1 < steps.length) {
      card.step += 1;
      card.due = now + steps[card.step] * MIN;
    } else {
      graduateToReview(card);
    }
  }
}

function graduateToReview(card) {
  card.state = 'review';
  card.step = 0;
  card.interval = ANKI.graduatingInterval;
  card.due = startOfDay() + card.interval * DAY;
}

function handleReview(card, grade, now) {
  if (grade === 0) {
    // Lapse → relearning queue
    card.lapses += 1;
    card.ease = clampEase(card.ease - 0.20);
    const newInt = Math.max(
      ANKI.lapseMinInterval,
      Math.round(card.interval * ANKI.newIntervalAfterLapse)
    );
    card.interval = newInt;
    card.state = 'relearning';
    card.step = 0;
    card.due = now + ANKI.relearnSteps[0] * MIN;
  } else if (grade === 1) {
    // Hard
    card.ease = clampEase(card.ease - 0.15);
    card.interval = Math.max(1, Math.round(card.interval * ANKI.hardMultiplier * ANKI.intervalModifier));
    card.due = startOfDay() + card.interval * DAY;
  } else {
    // Good — ease unchanged
    card.interval = Math.max(1, Math.round(card.interval * card.ease * ANKI.intervalModifier));
    card.due = startOfDay() + card.interval * DAY;
  }
}

function handleRelearning(card, grade, now) {
  const steps = ANKI.relearnSteps;
  if (grade === 0) {
    card.step = 0;
    card.due = now + steps[0] * MIN;
  } else if (grade === 1) {
    card.due = now + steps[card.step] * MIN;
  } else {
    if (card.step + 1 < steps.length) {
      card.step += 1;
      card.due = now + steps[card.step] * MIN;
    } else {
      // Graduate back to review, interval = lapseMinInterval (or current if larger)
      card.state = 'review';
      card.step = 0;
      card.interval = Math.max(ANKI.lapseMinInterval, card.interval);
      card.due = startOfDay() + card.interval * DAY;
    }
  }
}

function clampEase(e) { return Math.max(ANKI.minEase, e); }

// "Neumím" override — park the card out of due queue and add it
// to the end of today's retry queue. Lapse bookkeeping still applies.
function handleAgainInSession(card) {
  const now = Date.now();
  card.lastReview = now;
  card.reps += 1;
  card.lastGrade = 0;

  if (card.state === 'review') {
    card.lapses += 1;
    card.ease = clampEase(card.ease - 0.20);
    card.state = 'relearning';
    card.step = 0;
    card.interval = Math.max(
      ANKI.lapseMinInterval,
      Math.round(card.interval * ANKI.newIntervalAfterLapse)
    );
  } else if (card.state === 'learning' || card.state === 'relearning') {
    card.step = 0;
  } else if (card.state === 'new') {
    card.state = 'learning';
    card.step = 0;
  }

  // Park the card so it doesn't appear in the regular due queue —
  // it lives only in sessionRetry until graded ≥ Meh
  card.due = state.todayKey + 7 * DAY;

  const idx = state.sessionRetry.indexOf(card.id);
  if (idx >= 0) state.sessionRetry.splice(idx, 1);
  state.sessionRetry.push(card.id);
}

function previewInterval(card, grade) {
  if (grade === 0) return 'na konec';
  const c = { ...card };
  scheduleCard(c, grade);
  return formatDueDelta(c.due - Date.now());
}

function formatDueDelta(ms) {
  if (ms <= 0) return 'teď';
  if (ms < 60 * MIN) {
    const m = Math.max(1, Math.round(ms / MIN));
    return m + ' min';
  }
  if (ms < 24 * 60 * MIN) {
    const h = Math.round(ms / (60 * MIN));
    return h + ' h';
  }
  const days = Math.round(ms / DAY);
  if (days === 1) return '1 den';
  if (days < 5) return days + ' dny';
  if (days < 30) return days + ' dní';
  if (days < 365) return Math.round(days / 30) + ' měs';
  return Math.round(days / 365) + ' let';
}

function dueCards() {
  const now = Date.now();
  return state.cards
    .filter(c => c.due <= now)
    .sort((a, b) => {
      // Anki order: learning/relearning by exact due time, then new, then review
      const order = { learning: 0, relearning: 0, new: 1, review: 2 };
      const oa = order[a.state] ?? 3;
      const ob = order[b.state] ?? 3;
      if (oa !== ob) return oa - ob;
      // within a group: due time first, then stable random key (not add order)
      return a.due - b.due || (a.ord ?? 0) - (b.ord ?? 0) || a.id - b.id;
    });
}

function classifyCard(c) {
  if (c.state === 'new') return 'new';
  if (c.state === 'learning' || c.state === 'relearning') return 'learning';
  if (c.interval < 21) return 'young';
  return 'mature';
}

function stateLabel(c) {
  return {
    new: 'Nová',
    learning: 'Učím se',
    relearning: 'Učím znovu',
    review: c.interval < 21 ? 'Krátký interval' : 'Naučeno',
  }[c.state] || c.state;
}

// ===== UI =====
const $ = (id) => document.getElementById(id);

function renderTopbar() {
  $('streakValue').textContent = state.streak;
  $('goalProgress').textContent = state.todayDone;
  $('goalTotal').textContent = state.goal;
  const pct = Math.min(100, (state.todayDone / state.goal) * 100);
  $('goalBar').style.width = pct + '%';
}

let currentCard = null;
let isFlipped = false;
let typedAnswer = ''; // what user typed in typing mode for current card
let goalReached = false;     // daily goal met and learning paused on the goal screen
let continuePastGoal = false; // user chose to keep going after meeting the goal (per session)
let celebrationCat = null;   // cat image filename picked once per completion view

function pickCard() {
  const due = dueCards();
  // Pause on the goal screen once the daily goal is met, as long as the user
  // hasn't opted to keep going and there's still something to study.
  const goalMet = state.goal > 0 && state.todayDone >= state.goal;
  if (goalMet && !continuePastGoal && (due.length > 0 || state.sessionRetry.length > 0)) {
    currentCard = null;
    goalReached = true;
  } else if (due.length > 0) {
    currentCard = due[0];
    goalReached = false;
  } else if (state.sessionRetry.length > 0) {
    const id = state.sessionRetry[0];
    currentCard = state.cards.find(c => c.id === id) || null;
    goalReached = false;
  } else {
    currentCard = null;
    goalReached = false;
  }
  isFlipped = false;
  typedAnswer = '';
  return currentCard;
}

// Normalize for forgiving comparison: trim, lowercase, strip diacritics.
function normalizeForCompare(s) {
  return (s || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}
function isTypedCorrect(typed, correct) {
  return normalizeForCompare(typed) === normalizeForCompare(correct);
}

function renderFlashcard() {
  const fc = $('flashcard');
  const empty = $('emptyState');
  const actions = $('actions');
  const reveal = $('revealBtn');
  const rate = $('rateButtons');
  const typeForm = $('typeForm');
  const typeInput = $('typeInput');

  if (!currentCard) {
    fc.style.display = 'none';
    empty.hidden = false;
    actions.style.display = 'none';
    const continueBtn = $('continueBtn');
    const cat = $('catGif');
    const goalDone = state.goal > 0 && state.todayDone >= state.goal;
    if (goalDone) {
      // Daily challenge complete — reward with a cat, optionally let them continue.
      if (!celebrationCat) celebrationCat = CAT_GIFS[Math.floor(Math.random() * CAT_GIFS.length)];
      cat.src = 'cats/' + celebrationCat;
      cat.hidden = false;
      $('emptyEmoji').hidden = true;
      $('emptyTitle').textContent = 'Pro dnešek hotovo! 🎉';
      $('emptyText').textContent = goalReached ? 'Můžeš skončit, nebo pokračovat dál.' : '';
      continueBtn.hidden = !goalReached;
    } else {
      cat.hidden = true;
      $('emptyEmoji').hidden = false;
      $('emptyEmoji').textContent = '🎉';
      $('emptyTitle').textContent = 'Hotovo na dnes!';
      $('emptyText').textContent = 'Žádné karty k opakování. Vrať se zítra.';
      continueBtn.hidden = true;
    }
    return;
  }
  // showing a card again — reset so the next completion picks a fresh cat
  celebrationCat = null;
  fc.style.display = '';
  empty.hidden = true;
  actions.style.display = '';

  // direction: 0 = front→back (EN top, CS bottom), 1 = back→front (CS top, EN bottom)
  const topIsEn = currentCard.dir === 0;
  const topLang = topIsEn ? 'EN' : 'CS';
  const topWord = topIsEn ? currentCard.front : currentCard.back;
  const botLang = topIsEn ? 'CS' : 'EN';
  const botWord = topIsEn ? currentCard.back : currentCard.front;

  $('frontLang').textContent = topLang;
  $('frontWord').textContent = topWord;
  $('backLang').textContent = botLang;
  $('backWord').textContent = botWord;

  // Bottom half: placeholder until revealed, then answer (no animation)
  $('bottomPlaceholder').hidden = isFlipped;
  $('bottomAnswer').hidden = !isFlipped;

  // Typed-answer feedback (only when typing mode was used)
  const typedEl = $('bottomTyped');
  if (isFlipped && state.typingMode && typedAnswer) {
    const ok = isTypedCorrect(typedAnswer, botWord);
    typedEl.hidden = false;
    typedEl.dataset.match = ok ? 'yes' : 'no';
    $('typedIcon').textContent = ok ? '✓' : '✗';
    $('typedText').textContent = typedAnswer;
  } else {
    typedEl.hidden = true;
  }

  // Actions area: either reveal button, typing form, or rate buttons
  if (isFlipped) {
    reveal.hidden = true;
    typeForm.hidden = true;
    rate.hidden = false;
    document.querySelectorAll('.rate__when').forEach(el => {
      const g = parseInt(el.dataset.when, 10);
      el.textContent = previewInterval(currentCard, g);
    });
  } else if (state.typingMode) {
    reveal.hidden = true;
    rate.hidden = true;
    typeForm.hidden = false;
    typeInput.value = '';
    // Focus the input on next tick so mobile keyboard pops up reliably
    setTimeout(() => { try { typeInput.focus(); } catch {} }, 60);
  } else {
    reveal.hidden = false;
    rate.hidden = true;
    typeForm.hidden = true;
  }
}

function flip() {
  if (!currentCard) return;
  isFlipped = true;
  renderFlashcard();
}

function submitTypedAnswer() {
  if (!currentCard) return;
  const val = ($('typeInput').value || '').trim();
  if (!val) return;
  typedAnswer = val;
  isFlipped = true;
  renderFlashcard();
}

function syncTypingToggle() {
  const btn = $('typingToggle');
  if (!btn) return;
  btn.setAttribute('aria-pressed', state.typingMode ? 'true' : 'false');
}

function gradeCurrent(grade) {
  if (!currentCard) return;

  if (grade === 0) {
    // Neumím: send to end of today's retry queue, don't toggle direction,
    // don't count toward goal
    handleAgainInSession(currentCard);
  } else {
    // Meh / Umím: normal Anki scheduling
    scheduleCard(currentCard, grade);
    // alternate direction for next session this card appears
    currentCard.dir = currentCard.dir === 0 ? 1 : 0;

    // If card was retried within session, remove from retry queue now that it passed
    const idx = state.sessionRetry.indexOf(currentCard.id);
    if (idx >= 0) state.sessionRetry.splice(idx, 1);

    if (state.todayDone < state.goal) state.todayDone += 1;
    if (state.todayDone === state.goal && state.lastGoalReachedDay !== state.todayKey) {
      const yesterday = state.todayKey - DAY;
      if (state.lastGoalReachedDay === yesterday) state.streak += 1;
      else state.streak = 1;
      state.lastGoalReachedDay = state.todayKey;
      toast(`🔥 Cíl splněn! Streak ${state.streak} ${pluralDay(state.streak)}.`);
    }
  }

  save();
  renderTopbar();
  pickCard();
  renderFlashcard();
  if (currentTab === 'cards') renderCards();
}

function pluralDay(n) {
  if (n === 1) return 'den';
  if (n >= 2 && n <= 4) return 'dny';
  return 'dní';
}

// ===== Cards tab =====
function renderCards() {
  const buckets = { new: 0, learning: 0, young: 0, mature: 0 };
  for (const c of state.cards) buckets[classifyCard(c)]++;
  const total = state.cards.length || 1;

  $('kpiTotal').textContent = state.cards.length;
  $('kpiMastered').textContent = buckets.mature;
  $('kpiDue').textContent = dueCards().length;

  const bar = $('masteryBar');
  bar.innerHTML = '';
  for (const k of ['new', 'learning', 'young', 'mature']) {
    const seg = document.createElement('span');
    seg.className = 'seg-' + k;
    seg.style.width = (buckets[k] / total * 100) + '%';
    bar.appendChild(seg);
  }
  $('legNew').textContent = buckets.new;
  $('legLearning').textContent = buckets.learning;
  $('legYoung').textContent = buckets.young;
  $('legMature').textContent = buckets.mature;

  const q = ($('searchInput').value || '').trim().toLowerCase();
  const ul = $('cardsList');
  ul.innerHTML = '';
  const now = Date.now();
  const filtered = state.cards.filter(c =>
    !q || c.front.toLowerCase().includes(q) || c.back.toLowerCase().includes(q)
  );
  for (const c of filtered) {
    const li = document.createElement('li');
    const klass = classifyCard(c);
    const delta = c.due - now;
    const dueLabel = delta <= 0 ? 'dnes' : formatDueDelta(delta);
    li.dataset.id = c.id;
    li.innerHTML = `
      <span class="card-row__bullet s-${klass}"></span>
      <div class="card-row__words">
        <div class="card-row__front">${escapeHtml(c.front)}</div>
        <div class="card-row__back">${escapeHtml(c.back)}</div>
      </div>
      <div class="card-row__meta">
        <b>${dueLabel}</b>
        <span>int. ${c.interval}d</span>
      </div>`;
    li.addEventListener('click', () => openDetail(c.id));
    ul.appendChild(li);
  }
}

// ===== Card detail =====
function fmtDateTime(ts) {
  if (!ts) return '—';
  const d = new Date(ts);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}. ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

let editingCardId = null;

function openDetail(cardId) {
  const c = state.cards.find(x => x.id === cardId);
  if (!c) return;
  editingCardId = cardId;
  // Always open in view mode
  $('detailView').hidden = false;
  $('detailEdit').hidden = true;
  $('detailFront').textContent = c.front;
  $('detailBack').textContent = c.back;

  const klass = classifyCard(c);
  const stateEl = $('detailState');
  stateEl.textContent = stateLabel(c);
  stateEl.className = 'detail__state s-' + klass;

  $('detStateText').textContent = stateLabel(c);
  $('detInterval').textContent = c.state === 'review'
    ? c.interval + ' ' + (c.interval === 1 ? 'den' : (c.interval < 5 ? 'dny' : 'dní'))
    : '—';
  $('detEase').textContent = (c.ease * 100).toFixed(0) + ' %';

  const delta = c.due - Date.now();
  $('detDue').textContent = delta <= 0 ? 'Splatná' : 'za ' + formatDueDelta(delta);

  $('detReps').textContent = c.reps;
  $('detLapses').textContent = c.lapses;

  if (c.state === 'learning') {
    $('detStep').textContent = (c.step + 1) + ' / ' + ANKI.learnSteps.length;
  } else if (c.state === 'relearning') {
    $('detStep').textContent = (c.step + 1) + ' / ' + ANKI.relearnSteps.length;
  } else {
    $('detStep').textContent = '—';
  }

  const lastGradeMap = { 0: 'Neumím', 1: 'Meh', 2: 'Umím' };
  $('detLast').textContent = c.lastReview
    ? fmtDateTime(c.lastReview) + ' · ' + (lastGradeMap[c.lastGrade] || '—')
    : 'Ještě jsi ji neviděl';

  $('detDelete').onclick = () => {
    if (!confirm('Smazat tuto kartu?')) return;
    state.cards = state.cards.filter(x => x.id !== c.id);
    save();
    closeModal('detailModal');
    renderCards();
    if (currentCard && currentCard.id === c.id) {
      pickCard();
      renderFlashcard();
    }
  };

  $('detEdit').onclick = () => {
    $('editFront').value = c.front;
    $('editBack').value = c.back;
    $('detailView').hidden = true;
    $('detailEdit').hidden = false;
    setTimeout(() => $('editFront').focus(), 60);
  };

  $('editCancel').onclick = () => {
    $('detailEdit').hidden = true;
    $('detailView').hidden = false;
  };

  $('editSave').onclick = () => {
    const f = $('editFront').value.trim();
    const b = $('editBack').value.trim();
    if (!f || !b) { toast('Vyplň obě strany'); return; }
    c.front = f;
    c.back = b;
    save();
    // Refresh the view-mode content with the new values, then switch back
    openDetail(c.id);
    renderCards();
    // If the edited card is currently being studied, refresh the flashcard
    if (currentCard && currentCard.id === c.id) renderFlashcard();
  };

  openModal('detailModal');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[m]));
}

// ===== Tabs =====
let currentTab = 'learn';
function switchTab(name) {
  currentTab = name;
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('is-active', t.dataset.tab === name));
  document.querySelectorAll('.tabbar__btn').forEach(b => {
    const active = b.dataset.target === name;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  if (name === 'cards') renderCards();
  if (name === 'learn') {
    pickCard();
    renderFlashcard();
    renderTopbar();
  }
}

// ===== Modal helpers =====
function openModal(id) { $(id).hidden = false; }
function closeModal(id) { $(id).hidden = true; }

// ===== Goal modal =====
let tempGoal = state.goal;
function openGoalModal() {
  tempGoal = state.goal;
  $('goalEditValue').textContent = tempGoal;
  updatePresets();
  openModal('goalModal');
}
function setTempGoal(v) {
  tempGoal = Math.max(1, Math.min(200, v));
  $('goalEditValue').textContent = tempGoal;
  updatePresets();
}
function updatePresets() {
  document.querySelectorAll('.preset button').forEach(b => {
    b.classList.toggle('is-active', parseInt(b.dataset.preset, 10) === tempGoal);
  });
}

// ===== Toast =====
let toastTimer = null;
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
}

// ===== Bindings =====
function bind() {
  // tabs
  document.querySelectorAll('.tabbar__btn').forEach(b => {
    b.addEventListener('click', () => switchTab(b.dataset.target));
  });

  // continue past daily goal
  $('continueBtn').addEventListener('click', () => {
    continuePastGoal = true;
    pickCard();
    renderFlashcard();
  });

  // reveal / rate
  $('revealBtn').addEventListener('click', flip);
  document.querySelectorAll('.btn--rate').forEach(b => {
    b.addEventListener('click', () => gradeCurrent(parseInt(b.dataset.grade, 10)));
  });

  // typing mode toggle
  $('typingToggle').addEventListener('click', () => {
    state.typingMode = !state.typingMode;
    save();
    syncTypingToggle();
    if (!isFlipped) renderFlashcard();
  });

  // typing form submit
  $('typeForm').addEventListener('submit', e => {
    e.preventDefault();
    submitTypedAnswer();
  });

  // goal modal
  $('editGoalBtn').addEventListener('click', openGoalModal);
  $('goalMinus').addEventListener('click', () => setTempGoal(tempGoal - 1));
  $('goalPlus').addEventListener('click', () => setTempGoal(tempGoal + 1));
  document.querySelectorAll('.preset button').forEach(b => {
    b.addEventListener('click', () => setTempGoal(parseInt(b.dataset.preset, 10)));
  });
  $('goalSave').addEventListener('click', () => {
    state.goal = tempGoal;
    save();
    renderTopbar();
    closeModal('goalModal');
    toast('Cíl uložen: ' + tempGoal + ' karet/den');
  });

  // add card modal
  $('addCardBtn').addEventListener('click', () => {
    $('newFront').value = '';
    $('newBack').value = '';
    openModal('addModal');
    setTimeout(() => $('newFront').focus(), 80);
  });
  $('addSave').addEventListener('click', () => {
    const f = $('newFront').value.trim();
    const b = $('newBack').value.trim();
    if (!f || !b) { toast('Vyplň obě strany'); return; }
    state.cards.push({
      id: state.nextId++,
      front: f, back: b,
      ef: 2.5, interval: 0, reps: 0,
      due: startOfDay(),
      lastGrade: null,
    });
    save();
    closeModal('addModal');
    renderCards();
    if (!currentCard) { pickCard(); renderFlashcard(); }
    toast('Karta přidána');
  });

  // close handlers
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.modal').forEach(m => m.hidden = true);
    });
  });

  // search
  $('searchInput').addEventListener('input', renderCards);

  // keyboard for desktop testing
  document.addEventListener('keydown', (e) => {
    if (currentTab !== 'learn') return;
    if (e.target.tagName === 'INPUT') return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (!isFlipped) flip();
    } else if (isFlipped) {
      if (e.key === '1') gradeCurrent(0);
      else if (e.key === '2') gradeCurrent(1);
      else if (e.key === '3') gradeCurrent(2);
    }
  });
}

// ===== Cloud integration hook =====
// Called by cloud.js once a Firestore document loads after sign-in.
// Decides whether to overwrite local state, push local up, or merge.
window.__applyCloudState = function (cloudState) {
  const localUpdated = state.updatedAt || 0;
  const cloudUpdated = cloudState?.updatedAt || 0;

  if (!cloudState || !cloudState.cards) {
    // Cloud is empty (first sign-in) — push local up
    setSyncStatus('saving');
    flushCloudSave();
    return;
  }
  if (cloudUpdated > localUpdated) {
    // Cloud is newer — adopt it
    state = cloudState;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    rerenderAll();
    setSyncStatus('synced');
  } else if (localUpdated > cloudUpdated) {
    // Local is newer (offline edits) — push up
    setSyncStatus('saving');
    flushCloudSave();
  } else {
    setSyncStatus('synced');
  }
};
window.__rerenderAll = rerenderAll;
function rerenderAll() {
  syncTypingToggle();
  renderTopbar();
  pickCard();
  renderFlashcard();
  renderCards();
}

// ===== Init =====
bind();
syncTypingToggle();
renderTopbar();
pickCard();
renderFlashcard();
renderCards();
