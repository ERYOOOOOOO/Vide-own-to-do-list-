/* ---------- Default state (seeded from user's profile) ---------- */
function defaultState() {
  return {
    lifeGoals: {
      identity: "นักเรียน ม.6 ที่ตั้งเป้าหมายเปลี่ยนตัวเองให้เป็นคนใหม่",
      longTermGoal: "เป็น Software Engineer / Full Stack Developer ที่มีพื้นฐาน CS แข็งแรง สร้างโปรเจกต์ของตัวเองได้ และทำงานกับบริษัทเทคระดับโลกได้ในอนาคต",
      priorities: [
        "การพัฒนาตัวเอง",
        "การเขียนโปรแกรม",
        "การสอบเข้ามหาวิทยาลัย",
        "การทำโปรเจกต์",
        "การออกแบบและงานศิลปะ",
        "การออกกำลังกาย",
        "ภาษาอังกฤษ",
      ],
    },
    dailyMissions: {
      list: [
        { text: "ตั้งเป้าหมายเล็ก ๆ ของวันนี้ให้สำเร็จ", done: false, coin: 10 },
        { text: "ทบทวนสิ่งที่เรียนวันนี้ 10 นาที", done: false, coin: 10 },
        { text: "ดื่มน้ำให้ครบ 8 แก้ว", done: false, coin: 10 },
      ],
      lastResetDate: null, // วันที่ (todayStr) ที่รีเซ็ตล่าสุด
    },
    schedule: [
      { time: "06:30", activity: "ตื่นนอน" },
      { time: "07:00", activity: "ไปโรงเรียน" },
      { time: "15:10", activity: "เลิกเรียน / เดินทางกลับบ้าน" },
      { time: "16:50", activity: "ถึงบ้าน (ระวังช่วง YouTube Shorts)" },
      { time: "17:00", activity: "ออกกำลังกาย" },
      { time: "18:00", activity: "พักผ่อน / ทานข้าว" },
      { time: "19:00", activity: "การบ้าน + อ่านหนังสือ + โปรเจกต์" },
      { time: "21:30", activity: "ทบทวน / เตรียมตัวพรุ่งนี้" },
      { time: "22:30", activity: "เข้านอน" },
    ],
    weeklyFocus: {
      theme: "สัปดาห์นี้: โฟกัส Coding + Physics",
      checklist: [
        { text: "ทำโปรเจกต์ Dashboard ให้คืบหน้า", done: false, coin: 20 },
        { text: "ทบทวนฟิสิกส์บทที่กำลังเรียน", done: false, coin: 20 },
        { text: "ฝึกภาษาอังกฤษ 15 นาที/วัน", done: false, coin: 20 },
      ],
    },
    exercise: {
      "Push Day": [
        { name: "Push-up 3x12", done: false, coin: 10 },
        { name: "Pike Push-up 3x8", done: false, coin: 10 },
        { name: "Dips 3x10", done: false, coin: 10 },
      ],
      "Pull Day": [
        { name: "Pull-up / Negative 3x6", done: false, coin: 10 },
        { name: "Australian Row 3x12", done: false, coin: 10 },
      ],
      "Leg Day": [
        { name: "Squat 4x15", done: false, coin: 10 },
        { name: "Lunges 3x12/ข้าง", done: false, coin: 10 },
        { name: "Calf Raise 3x20", done: false, coin: 10 },
      ],
      "Core": [
        { name: "Plank 3x45s", done: false, coin: 10 },
        { name: "Leg Raise 3x12", done: false, coin: 10 },
      ],
      "Mobility/Stretch": [
        { name: "Full Body Stretch 10 นาที", done: false, coin: 10 },
        { name: "Hip Mobility Drill", done: false, coin: 10 },
      ],
      "Plyometric": [
        { name: "Jump Squat 3x10", done: false, coin: 10 },
        { name: "Box Jump / Broad Jump 3x8", done: false, coin: 10 },
      ],
      "Sport": [
        { name: "เล่นกีฬา", done: false, coin: 100 },
      ],
    },
    exerciseWeek: {
      plan: {
        "จันทร์": "Push Day",
        "อังคาร": "Pull Day",
        "พุธ": "Leg Day",
        "พฤหัสบดี": "Push Day",
        "ศุกร์": "Pull Day",
        "เสาร์": "Leg Day",
        "อาทิตย์": "Rest",
      },
      lastResetDate: null, // วันที่ (todayStr) ที่รีเซ็ตเครื่องหมายท่าออกกำลังกายล่าสุด
    },
    examPrep: {
      "TGAT": { "English": 0, "Math 1": 0 },
      "TPAT3": { "Math 1": 0, "Physics": 0 },
      "A-Level": { "Math 1": 0, "Math 2": 0, "Physics": 0, "Biology": 0, "English": 0 },
    },
    projects: [
      { title: "Mission Control Dashboard", status: "กำลังทำ", notes: "เว็บติดตามเป้าหมายชีวิต + ระบบเหรียญแลกรางวัล เก็บข้อมูลในเครื่อง" },
    ],
    habits: {
      "เขียนโค้ดทุกวัน": { streak: 0, history: {}, coin: 5 },
      "ออกกำลังกาย": { streak: 0, history: {}, coin: 5 },
      "อ่านหนังสือ/ทบทวน": { streak: 0, history: {}, coin: 5 },
      "ภาษาอังกฤษ 15 นาที": { streak: 0, history: {}, coin: 5 },
      "ลดเวลาดู Shorts": { streak: 0, history: {}, coin: 5 },
    },
    coins: defaultCoins(),
  };
}

function defaultCoins() {
  return {
    balance: 0,
    earnedKeys: {}, // key -> จำนวนเหรียญที่เคยได้ (กันได้เหรียญซ้ำจากรายการเดิม)
    shop: [
      { icon: "🥤", name: "ดื่ม Pepsi 1 กระป๋อง", cost: 30 },
      { icon: "🍫", name: "ของหวาน 1 ชิ้น", cost: 35 },
      { icon: "📱", name: "ดู YouTube Shorts 15 นาที", cost: 40 },
      { icon: "🎮", name: "เล่นเกม 1 ชั่วโมง", cost: 60 },
      { icon: "🎬", name: "ดูหนัง 1 เรื่อง", cost: 80 },
      { icon: "😴", name: "วันพักผ่อนเต็มวัน", cost: 300 },
    ],
    history: [], // { name, cost, at } เรียงใหม่สุดขึ้นก่อน
  };
}

// อัตราการได้เหรียญจากการทำสิ่งต่าง ๆ
const COIN_REWARDS = { habit: 5, focus: 20, exercise: 10, mission: 10};

/* ---------- State + localStorage ---------- */
let state = null;
let saveTimer = null;
const LOCAL_KEY = "missionControlState";

// เติมฟิลด์ที่ขาด เผื่อข้อมูลเก่าที่บันทึกไว้ก่อนมีระบบเหรียญ
function migrateState(s) {
  if (!s || typeof s !== "object") return defaultState();
  const base = defaultState();
  for (const k of Object.keys(base)) {
    if (s[k] === undefined) s[k] = base[k];
  }
  if (!s.coins || typeof s.coins !== "object") s.coins = defaultCoins();
  const dc = defaultCoins();
  if (typeof s.coins.balance !== "number") s.coins.balance = 0;
  if (!s.coins.earnedKeys || typeof s.coins.earnedKeys !== "object") s.coins.earnedKeys = {};
  if (!Array.isArray(s.coins.shop) || s.coins.shop.length === 0) s.coins.shop = dc.shop;
  if (!Array.isArray(s.coins.history)) s.coins.history = [];
  if (!s.exerciseWeek || typeof s.exerciseWeek !== "object") {
    s.exerciseWeek = base.exerciseWeek;
    s.exerciseWeek.lastResetDate = todayStr(); // ไม่ล้างของวันนี้ตอนอัปเดตครั้งแรก
  }
  if (!s.exerciseWeek.plan || typeof s.exerciseWeek.plan !== "object") s.exerciseWeek.plan = base.exerciseWeek.plan;
  if (s.exerciseWeek.lastResetDate === undefined) s.exerciseWeek.lastResetDate = todayStr();
  if (!s.dailyMissions || typeof s.dailyMissions !== "object") s.dailyMissions = base.dailyMissions;
  if (!Array.isArray(s.dailyMissions.list)) s.dailyMissions.list = base.dailyMissions.list;
  if (s.dailyMissions.lastResetDate === undefined) s.dailyMissions.lastResetDate = todayStr();
  if (!s.exercise || typeof s.exercise !== "object") s.exercise = base.exercise;
  if (!Array.isArray(s.exercise["Sport"]) || s.exercise["Sport"].length === 0) s.exercise["Sport"] = base.exercise["Sport"];
  return s;
}

function loadLocal() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return migrateState(raw ? JSON.parse(raw) : defaultState());
  } catch (e) { return defaultState(); }
}
function saveLocal() { localStorage.setItem(LOCAL_KEY, JSON.stringify(state)); }

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveLocal, 300);
}

/* ---------- Coin system ---------- */
// ให้เหรียญครั้งเดียวต่อ key (ทำเครื่องหมายไว้ว่าเคยจ่ายแล้ว จะไม่จ่ายซ้ำแม้กดสลับไปมา)
function awardCoins(key, amount) {
  if (state.coins.earnedKeys[key]) return; // เคยได้ไปแล้ว
  state.coins.earnedKeys[key] = amount;
  state.coins.balance += amount;
  updateCoinDisplay();
  showToast(`+${amount} 🪙`);
  scheduleSave();
}

function spendCoins(cost) {
  if (state.coins.balance < cost) return false;
  state.coins.balance -= cost;
  updateCoinDisplay();
  scheduleSave();
  return true;
}

function updateCoinDisplay() {
  const pill = document.getElementById("coinCount");
  if (pill) pill.textContent = state.coins.balance;
  const big = document.getElementById("coinBalanceBig");
  if (big) big.textContent = state.coins.balance;
  refreshShopAffordability();
}

// ช่องแก้ไขจำนวนเหรียญของแต่ละรายการ (habit / focus / exercise / mission)
function coinInputHtml(idx, value, fallback) {
  return `<span class="item-coin">🪙<input type="number" class="item-coin-input" min="0" value="${value ?? fallback}" data-idx="${idx}"></span>`;
}

function refreshShopAffordability() {
  document.querySelectorAll(".shop-buy").forEach((btn) => {
    const cost = +btn.dataset.cost;
    btn.disabled = state.coins.balance < cost;
  });
}

/* ---------- Toast ---------- */
let toastTimer = null;
function showToast(msg) {
  let wrap = document.getElementById("toastWrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.id = "toastWrap";
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  wrap.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 250);
  }, 1600);
}

/* ---------- Render dispatch ---------- */
function renderAll() {
  renderLifeGoals();
  renderSchedule();
  renderDailyMissions();
  renderWeeklyFocus();
  renderExercise();
  renderExamPrep();
  renderProjects();
  renderHabits();
  renderShop();
  updateCoinDisplay();
}

/* ---------- Life Goals ---------- */
function renderLifeGoals() {
  const identityEl = document.getElementById("identityText");
  const goalEl = document.getElementById("longGoalText");
  identityEl.textContent = state.lifeGoals.identity;
  goalEl.textContent = state.lifeGoals.longTermGoal;

  const list = document.getElementById("priorityList");
  list.innerHTML = "";
  state.lifeGoals.priorities.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "priority-item";
    row.innerHTML = `<span class="priority-rank">${i + 1}</span><span>${escapeHtml(p)}</span>`;
    list.appendChild(row);
  });
}

document.querySelector('[data-edit="lifeGoals"]').addEventListener("click", () => {
  const identityEl = document.getElementById("identityText");
  const goalEl = document.getElementById("longGoalText");
  const editBtn = document.querySelector('[data-edit="lifeGoals"]');
  const editing = identityEl.getAttribute("contenteditable") === "true";
  if (editing) {
    identityEl.removeAttribute("contenteditable");
    goalEl.removeAttribute("contenteditable");
    state.lifeGoals.identity = identityEl.textContent.trim();
    state.lifeGoals.longTermGoal = goalEl.textContent.trim();
    scheduleSave();
    editBtn.textContent = "แก้ไข";
  } else {
    identityEl.setAttribute("contenteditable", "true");
    goalEl.setAttribute("contenteditable", "true");
    identityEl.focus();
    editBtn.textContent = "บันทึก";
  }
});

/* ---------- Schedule ---------- */
function renderSchedule() {
  const body = document.getElementById("scheduleBody");
  body.innerHTML = "";
  state.schedule.forEach((row, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="time" value="${row.time}" data-idx="${i}" data-field="time"></td>
      <td><input type="text" value="${escapeAttr(row.activity)}" data-idx="${i}" data-field="activity" placeholder="กิจกรรม"></td>
      <td><button class="btn-icon" data-remove="${i}">✕</button></td>
    `;
    body.appendChild(tr);
  });
  body.querySelectorAll("input").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      const idx = +e.target.dataset.idx;
      const field = e.target.dataset.field;
      state.schedule[idx][field] = e.target.value;
      scheduleSave();
    });
  });
  body.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      state.schedule.splice(+e.target.dataset.remove, 1);
      scheduleSave();
      renderSchedule();
    });
  });
}
document.getElementById("addScheduleRow").addEventListener("click", () => {
  state.schedule.push({ time: "00:00", activity: "" });
  scheduleSave();
  renderSchedule();
});

/* ---------- Daily Missions + auto-reset ---------- */
// พอขึ้นวันใหม่ → เคลียร์เครื่องหมายภารกิจประจำวันทั้งหมด และปลดล็อกให้เก็บเหรียญได้ใหม่ในวันนั้น
function maybeDailyReset() {
  const today = todayStr();
  if (state.dailyMissions.lastResetDate === today) return;
  state.dailyMissions.list.forEach((item) => { item.done = false; });
  Object.keys(state.coins.earnedKeys).forEach((k) => {
    if (k.startsWith("mission|")) delete state.coins.earnedKeys[k];
  });
  state.dailyMissions.lastResetDate = today;
  saveLocal();
}
function renderDailyMissions() {
  const list = document.getElementById("dailyMissionList");
  list.innerHTML = "";
  state.dailyMissions.list.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = item.done ? "done" : "";
    li.innerHTML = `
      <input type="checkbox" ${item.done ? "checked" : ""} data-idx="${i}">
      <input type="text" class="check-label" value="${escapeAttr(item.text)}" data-idx="${i}">
      ${coinInputHtml(i, item.coin, COIN_REWARDS.mission)}
      <button class="btn-icon" data-remove="${i}">✕</button>
    `;
    list.appendChild(li);
  });
  list.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const idx = +e.target.dataset.idx;
      const item = state.dailyMissions.list[idx];
      item.done = e.target.checked;
      if (item.done && item.text.trim()) awardCoins("mission|" + item.text.trim(), item.coin ?? COIN_REWARDS.mission);
      scheduleSave();
      renderDailyMissions();
    });
  });
  list.querySelectorAll('input[type="text"]').forEach((inp) => {
    inp.addEventListener("input", (e) => {
      state.dailyMissions.list[+e.target.dataset.idx].text = e.target.value;
      scheduleSave();
    });
  });
  list.querySelectorAll(".item-coin-input").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      state.dailyMissions.list[+e.target.dataset.idx].coin = Math.max(0, +e.target.value || 0);
      scheduleSave();
    });
  });
  list.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      state.dailyMissions.list.splice(+e.target.dataset.remove, 1);
      scheduleSave();
      renderDailyMissions();
    });
  });
}
document.getElementById("addDailyMission").addEventListener("click", () => {
  state.dailyMissions.list.push({ text: "", done: false, coin: COIN_REWARDS.mission });
  scheduleSave();
  renderDailyMissions();
});

/* ---------- Weekly Focus ---------- */
function renderWeeklyFocus() {
  const themeInput = document.getElementById("focusTheme");
  themeInput.value = state.weeklyFocus.theme;
  const list = document.getElementById("focusChecklist");
  list.innerHTML = "";
  state.weeklyFocus.checklist.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = item.done ? "done" : "";
    li.innerHTML = `
      <input type="checkbox" ${item.done ? "checked" : ""} data-idx="${i}">
      <input type="text" class="check-label" value="${escapeAttr(item.text)}" data-idx="${i}">
      ${coinInputHtml(i, item.coin, COIN_REWARDS.focus)}
      <button class="btn-icon" data-remove="${i}">✕</button>
    `;
    list.appendChild(li);
  });
  list.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const idx = +e.target.dataset.idx;
      const item = state.weeklyFocus.checklist[idx];
      item.done = e.target.checked;
      if (item.done && item.text.trim()) awardCoins("focus|" + item.text.trim(), item.coin ?? COIN_REWARDS.focus);
      scheduleSave();
      renderWeeklyFocus();
    });
  });
  list.querySelectorAll('input[type="text"]').forEach((inp) => {
    inp.addEventListener("input", (e) => {
      state.weeklyFocus.checklist[+e.target.dataset.idx].text = e.target.value;
      scheduleSave();
    });
  });
  list.querySelectorAll(".item-coin-input").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      state.weeklyFocus.checklist[+e.target.dataset.idx].coin = Math.max(0, +e.target.value || 0);
      scheduleSave();
    });
  });
  list.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      state.weeklyFocus.checklist.splice(+e.target.dataset.remove, 1);
      scheduleSave();
      renderWeeklyFocus();
    });
  });
}
document.getElementById("focusTheme").addEventListener("input", (e) => {
  state.weeklyFocus.theme = e.target.value;
  scheduleSave();
});
document.getElementById("addFocusItem").addEventListener("click", () => {
  state.weeklyFocus.checklist.push({ text: "", done: false, coin: COIN_REWARDS.focus });
  scheduleSave();
  renderWeeklyFocus();
});

/* ---------- Weekly workout plan + daily auto-reset ---------- */
const THAI_DAYS = [
  { dow: 1, short: "จ", full: "จันทร์" },
  { dow: 2, short: "อ", full: "อังคาร" },
  { dow: 3, short: "พ", full: "พุธ" },
  { dow: 4, short: "พฤ", full: "พฤหัสบดี" },
  { dow: 5, short: "ศ", full: "ศุกร์" },
  { dow: 6, short: "ส", full: "เสาร์" },
  { dow: 0, short: "อา", full: "อาทิตย์" },
];
function thaiFullToday() {
  const dow = new Date().getDay();
  const found = THAI_DAYS.find((d) => d.dow === dow);
  return found ? found.full : "";
}
function shortWorkout(type) { return String(type).replace(/\s*Day$/, ""); }

// พอขึ้นวันใหม่ → เคลียร์เครื่องหมายท่าออกกำลังกายทั้งหมด และปลดล็อกให้เก็บเหรียญออกกำลังกายได้ใหม่ในวันนั้น
function maybeExerciseDailyReset() {
  const today = todayStr();
  if (state.exerciseWeek.lastResetDate === today) return;
  Object.keys(state.exercise).forEach((type) => {
    state.exercise[type].forEach((item) => { item.done = false; });
  });
  Object.keys(state.coins.earnedKeys).forEach((k) => {
    if (k.startsWith("exercise|")) delete state.coins.earnedKeys[k];
  });
  state.exerciseWeek.lastResetDate = today;
  saveLocal();
}

/* ---------- Exercise ---------- */
let activeExerciseDay = null;
let exerciseInitialized = false;
function renderWeekPlan() {
  const wrap = document.getElementById("exerciseWeekPlan");
  wrap.innerHTML = "";
  const todayFull = thaiFullToday();
  THAI_DAYS.forEach((d) => {
    const workout = state.exerciseWeek.plan[d.full] || "Rest";
    const isRest = workout === "Rest";
    const cell = document.createElement("div");
    cell.className = "wp-cell" + (d.full === todayFull ? " today" : "") + (isRest ? " rest" : "");
    cell.innerHTML = `<span class="wp-day">${d.short}</span><span class="wp-workout">${isRest ? "พัก" : escapeHtml(shortWorkout(workout))}</span>`;
    if (!isRest && state.exercise[workout]) {
      cell.addEventListener("click", () => { activeExerciseDay = workout; renderExercise(); });
    }
    wrap.appendChild(cell);
  });
}
function renderTodayWorkout() {
  const el = document.getElementById("todayWorkout");
  const todayFull = thaiFullToday();
  const workout = state.exerciseWeek.plan[todayFull] || "Rest";
  el.innerHTML = workout === "Rest"
    ? `😴 วันนี้ (${todayFull}) — วันพักผ่อน`
    : `💪 วันนี้ (${todayFull}) — <b>${escapeHtml(workout)}</b>`;
}
function renderExercise() {
  renderWeekPlan();
  renderTodayWorkout();
  const days = Object.keys(state.exercise);
  if (!exerciseInitialized) {
    exerciseInitialized = true;
    const todayWorkout = state.exerciseWeek.plan[thaiFullToday()];
    if (todayWorkout && todayWorkout !== "Rest" && days.includes(todayWorkout)) activeExerciseDay = todayWorkout;
  }
  if (!activeExerciseDay || !days.includes(activeExerciseDay)) activeExerciseDay = days[0];
  const tabs = document.getElementById("exerciseTabs");
  tabs.innerHTML = "";
  days.forEach((day) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (day === activeExerciseDay ? " active" : "");
    btn.textContent = day;
    btn.addEventListener("click", () => { activeExerciseDay = day; renderExercise(); });
    tabs.appendChild(btn);
  });

  const list = document.getElementById("exerciseChecklist");
  list.innerHTML = "";
  (state.exercise[activeExerciseDay] || []).forEach((item, i) => {
    const li = document.createElement("li");
    li.className = item.done ? "done" : "";
    li.innerHTML = `
      <input type="checkbox" ${item.done ? "checked" : ""} data-idx="${i}">
      <input type="text" class="check-label" value="${escapeAttr(item.name)}" data-idx="${i}">
      ${coinInputHtml(i, item.coin, COIN_REWARDS.exercise)}
      <button class="btn-icon" data-remove="${i}">✕</button>
    `;
    list.appendChild(li);
  });
  list.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const item = state.exercise[activeExerciseDay][+e.target.dataset.idx];
      item.done = e.target.checked;
      if (item.done && item.name.trim())
        awardCoins("exercise|" + activeExerciseDay + "|" + item.name.trim(), item.coin ?? COIN_REWARDS.exercise);
      scheduleSave();
      renderExercise();
    });
  });
  list.querySelectorAll('input[type="text"]').forEach((inp) => {
    inp.addEventListener("input", (e) => {
      state.exercise[activeExerciseDay][+e.target.dataset.idx].name = e.target.value;
      scheduleSave();
    });
  });
  list.querySelectorAll(".item-coin-input").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      state.exercise[activeExerciseDay][+e.target.dataset.idx].coin = Math.max(0, +e.target.value || 0);
      scheduleSave();
    });
  });
  list.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      state.exercise[activeExerciseDay].splice(+e.target.dataset.remove, 1);
      scheduleSave();
      renderExercise();
    });
  });
}
document.getElementById("addExerciseItem").addEventListener("click", () => {
  if (!activeExerciseDay) return;
  state.exercise[activeExerciseDay].push({ name: "", done: false, coin: COIN_REWARDS.exercise });
  scheduleSave();
  renderExercise();
});
// ล้างเครื่องหมายออกกำลังกายทั้งหมดด้วยมือ (ก่อนถึงรอบรีเซ็ตอัตโนมัติ) พร้อมหักเหรียญที่เคยได้จากรายการที่ติ๊กไว้คืน
document.getElementById("resetExerciseToday").addEventListener("click", () => {
  let refunded = 0;
  Object.keys(state.exercise).forEach((type) => {
    state.exercise[type].forEach((item) => {
      if (!item.done) return;
      const key = "exercise|" + type + "|" + item.name.trim();
      if (state.coins.earnedKeys[key]) {
        refunded += state.coins.earnedKeys[key];
        delete state.coins.earnedKeys[key];
      }
      item.done = false;
    });
  });
  if (refunded > 0) state.coins.balance = Math.max(0, state.coins.balance - refunded);
  scheduleSave();
  updateCoinDisplay();
  renderExercise();
  showToast(refunded > 0 ? `รีเซ็ตวันนี้แล้ว หักเหรียญคืน -${refunded} 🪙` : "รีเซ็ตวันนี้แล้ว");
});

/* ---------- Exam Prep ---------- */
let activeExam = null;
function renderExamPrep() {
  const exams = Object.keys(state.examPrep);
  if (!activeExam || !exams.includes(activeExam)) activeExam = exams[0];
  const tabs = document.getElementById("examTabs");
  tabs.innerHTML = "";
  exams.forEach((exam) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (exam === activeExam ? " active" : "");
    btn.textContent = exam;
    btn.addEventListener("click", () => { activeExam = exam; renderExamPrep(); });
    tabs.appendChild(btn);
  });

  const container = document.getElementById("examSubjects");
  container.innerHTML = "";
  const subjects = state.examPrep[activeExam] || {};
  Object.keys(subjects).forEach((subject) => {
    const pct = subjects[subject];
    const row = document.createElement("div");
    row.className = "subject-row";
    row.innerHTML = `
      <div class="subject-row-head"><span class="subject-name">${escapeHtml(subject)}</span><span>${pct}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <input type="range" min="0" max="100" value="${pct}" data-subject="${escapeAttr(subject)}">
    `;
    container.appendChild(row);
  });
  container.querySelectorAll('input[type="range"]').forEach((slider) => {
    slider.addEventListener("input", (e) => {
      state.examPrep[activeExam][e.target.dataset.subject] = +e.target.value;
      scheduleSave();
      renderExamPrep();
    });
  });
}

/* ---------- Projects ---------- */
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  const statuses = ["วางแผน", "กำลังทำ", "เสร็จแล้ว", "พักไว้"];
  state.projects.forEach((proj, i) => {
    const div = document.createElement("div");
    div.className = "project-item";
    div.innerHTML = `
      <button class="btn-icon project-remove" data-remove="${i}">✕</button>
      <input type="text" class="project-title" value="${escapeAttr(proj.title)}" data-idx="${i}" data-field="title" placeholder="ชื่อโปรเจกต์">
      <select class="project-status" data-idx="${i}" data-field="status">
        ${statuses.map((s) => `<option value="${s}" ${s === proj.status ? "selected" : ""}>${s}</option>`).join("")}
      </select>
      <textarea class="project-notes" data-idx="${i}" data-field="notes" placeholder="โน้ต...">${escapeHtml(proj.notes || "")}</textarea>
    `;
    grid.appendChild(div);
  });
  grid.querySelectorAll("[data-field]").forEach((el) => {
    el.addEventListener("input", (e) => {
      state.projects[+e.target.dataset.idx][e.target.dataset.field] = e.target.value;
      scheduleSave();
    });
    el.addEventListener("change", (e) => {
      state.projects[+e.target.dataset.idx][e.target.dataset.field] = e.target.value;
      scheduleSave();
    });
  });
  grid.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      state.projects.splice(+e.target.dataset.remove, 1);
      scheduleSave();
      renderProjects();
    });
  });
}
document.getElementById("addProject").addEventListener("click", () => {
  state.projects.push({ title: "โปรเจกต์ใหม่", status: "วางแผน", notes: "" });
  scheduleSave();
  renderProjects();
});

/* ---------- Habits ---------- */
function todayStr(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() - offset);
  return d.toISOString().slice(0, 10);
}
function computeStreak(history) {
  let streak = 0;
  for (let i = 0; ; i++) {
    if (history[todayStr(i)]) streak++;
    else break;
  }
  return streak;
}
function renderHabits() {
  const list = document.getElementById("habitList");
  list.innerHTML = "";
  Object.keys(state.habits).forEach((name) => {
    const habit = state.habits[name];
    habit.streak = computeStreak(habit.history || {});
    const row = document.createElement("div");
    row.className = "habit-row";
    let daysHtml = "";
    for (let i = 6; i >= 0; i--) {
      const day = todayStr(i);
      const on = !!(habit.history || {})[day];
      daysHtml += `<button class="habit-day ${on ? "on" : ""}" data-name="${escapeAttr(name)}" data-day="${day}" title="${day}">${day}</button>`;
    }
    row.innerHTML = `
      <input type="text" class="habit-name" value="${escapeAttr(name)}" data-oldname="${escapeAttr(name)}">
      <span class="habit-streak">🔥 ${habit.streak} วัน</span>
      <span class="item-coin">🪙<input type="number" class="item-coin-input" min="0" value="${habit.coin ?? COIN_REWARDS.habit}" data-habit="${escapeAttr(name)}"></span>
      <div class="habit-days">${daysHtml}</div>
      <button class="btn-icon" data-remove-habit="${escapeAttr(name)}">✕</button>
    `;
    list.appendChild(row);
  });

  list.querySelectorAll(".habit-day").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const name = e.target.dataset.name;
      const day = e.target.dataset.day;
      const hist = state.habits[name].history || (state.habits[name].history = {});
      hist[day] = !hist[day];
      if (hist[day]) awardCoins("habit|" + name + "|" + day, state.habits[name].coin ?? COIN_REWARDS.habit);
      scheduleSave();
      renderHabits();
    });
  });
  list.querySelectorAll(".item-coin-input").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      state.habits[e.target.dataset.habit].coin = Math.max(0, +e.target.value || 0);
      scheduleSave();
    });
  });
  list.querySelectorAll(".habit-name").forEach((inp) => {
    inp.addEventListener("change", (e) => {
      const oldName = e.target.dataset.oldname;
      const newName = e.target.value.trim() || oldName;
      if (newName !== oldName) {
        state.habits[newName] = state.habits[oldName];
        delete state.habits[oldName];
        scheduleSave();
        renderHabits();
      }
    });
  });
  list.querySelectorAll("[data-remove-habit]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      delete state.habits[e.target.dataset.removeHabit];
      scheduleSave();
      renderHabits();
    });
  });
}
document.getElementById("addHabit").addEventListener("click", () => {
  let name = "นิสัยใหม่";
  let n = 1;
  while (state.habits[name]) { n++; name = `นิสัยใหม่ ${n}`; }
  state.habits[name] = { streak: 0, history: {}, coin: COIN_REWARDS.habit };
  scheduleSave();
  renderHabits();
});

/* ---------- Reward Shop ---------- */
function fmtWhen(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "";
  const pad = (x) => String(x).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function renderShop() {
  document.getElementById("coinBalanceBig").textContent = state.coins.balance;

  const grid = document.getElementById("shopGrid");
  grid.innerHTML = "";
  state.coins.shop.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = `
      <button class="btn-icon shop-remove" data-remove="${i}" title="ลบรายการนี้">✕</button>
      <div class="shop-icon">${escapeHtml(item.icon || "🎁")}</div>
      <input type="text" class="shop-name" value="${escapeAttr(item.name)}" data-idx="${i}" placeholder="ชื่อรางวัล">
      <div class="shop-cost-row">
        <span class="shop-cost">🪙 <input type="number" class="shop-cost-input" min="1" value="${item.cost}" data-idx="${i}"></span>
        <button class="btn btn-primary btn-sm shop-buy" data-idx="${i}" data-cost="${item.cost}">แลก</button>
      </div>
    `;
    grid.appendChild(div);
  });

  grid.querySelectorAll(".shop-name").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      state.coins.shop[+e.target.dataset.idx].name = e.target.value;
      scheduleSave();
    });
  });
  grid.querySelectorAll(".shop-cost-input").forEach((inp) => {
    inp.addEventListener("input", (e) => {
      const v = Math.max(1, +e.target.value || 1);
      state.coins.shop[+e.target.dataset.idx].cost = v;
      scheduleSave();
      renderShop();
    });
  });
  grid.querySelectorAll(".shop-buy").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const item = state.coins.shop[+e.currentTarget.dataset.idx];
      if (spendCoins(item.cost)) {
        state.coins.history.unshift({ name: item.name, cost: item.cost, at: new Date().toISOString() });
        state.coins.history = state.coins.history.slice(0, 30);
        scheduleSave();
        showToast(`แลก "${item.name}" แล้ว 🎉`);
        renderShop();
      } else {
        showToast(`เหรียญไม่พอ ขาดอีก ${item.cost - state.coins.balance} 🪙`);
      }
    });
  });
  grid.querySelectorAll(".shop-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      state.coins.shop.splice(+e.currentTarget.dataset.remove, 1);
      scheduleSave();
      renderShop();
    });
  });

  const hist = document.getElementById("shopHistory");
  if (state.coins.history.length === 0) {
    hist.innerHTML = `<p class="shop-empty">ยังไม่มีการแลกรางวัล — สะสมเหรียญจากการทำ habit แล้วมาแลกได้เลย</p>`;
  } else {
    hist.innerHTML = state.coins.history
      .slice(0, 8)
      .map((h) => `<div class="history-row"><span>${escapeHtml(h.name)}</span><span class="history-meta">−${h.cost} 🪙 · ${fmtWhen(h.at)}</span></div>`)
      .join("");
  }
  refreshShopAffordability();
}
document.getElementById("addShopItem").addEventListener("click", () => {
  state.coins.shop.push({ icon: "🎁", name: "รางวัลใหม่", cost: 50 });
  scheduleSave();
  renderShop();
});

/* ---------- Share / Backup (export & import) ---------- */
function openDataModal() {
  document.getElementById("exportText").value = JSON.stringify(state, null, 2);
  document.getElementById("importText").value = "";
  document.getElementById("importMsg").hidden = true;
  document.getElementById("dataModal").hidden = false;
}
function closeDataModal() { document.getElementById("dataModal").hidden = true; }

function doExportCopy() {
  const ta = document.getElementById("exportText");
  ta.select();
  navigator.clipboard.writeText(ta.value)
    .then(() => showToast("คัดลอกข้อมูลแล้ว 📋"))
    .catch(() => showToast("คัดลอกไม่สำเร็จ ลองเลือกแล้วกด Ctrl+C"));
}
function doExportDownload() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mission-control-backup.json";
  a.click();
  URL.revokeObjectURL(url);
  showToast("ดาวน์โหลดไฟล์แล้ว 💾");
}
function applyImport(text) {
  const msg = document.getElementById("importMsg");
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    msg.textContent = "ข้อมูลไม่ถูกต้อง (อ่าน JSON ไม่ได้)";
    msg.className = "modal-error";
    msg.hidden = false;
    return;
  }
  if (!parsed || !parsed.lifeGoals || !parsed.habits) {
    msg.textContent = "ไฟล์นี้ไม่ใช่ข้อมูล Mission Control";
    msg.className = "modal-error";
    msg.hidden = false;
    return;
  }
  state = migrateState(parsed);
  saveLocal();
  renderAll();
  msg.textContent = "นำเข้าข้อมูลสำเร็จ ✓";
  msg.className = "modal-success";
  msg.hidden = false;
  showToast("นำเข้าข้อมูลแล้ว ✓");
}

/* ---------- Utils ---------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function escapeAttr(str) { return escapeHtml(str); }

/* ---------- Init ---------- */
function init() {
  state = loadLocal();
  maybeDailyReset();
  maybeExerciseDailyReset();
  renderAll();

  document.getElementById("dataBtn").addEventListener("click", openDataModal);
  document.getElementById("dataClose").addEventListener("click", closeDataModal);
  document.getElementById("exportCopyBtn").addEventListener("click", doExportCopy);
  document.getElementById("exportDownloadBtn").addEventListener("click", doExportDownload);
  document.getElementById("importBtn").addEventListener("click", () => {
    applyImport(document.getElementById("importText").value.trim());
  });
  document.getElementById("importFile").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { document.getElementById("importText").value = reader.result; };
    reader.readAsText(file);
  });
  document.getElementById("dataModal").addEventListener("click", (e) => {
    if (e.target.id === "dataModal") closeDataModal();
  });
}

/* ---------- Boot ---------- */
init();
