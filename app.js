const days = [
  {
    date: "10/24", week: "六", region: "台北 → 神戶", title: "飛向港都的第一天",
    intro: "傍晚抵達神戶，先用一頓炸豬排為九日旅程揭開序幕。",
    events: [
      { time: "14:20", title: "長榮航空起飛", note: "桃園機場第二航廈 → 神戶機場 UKB 第二航廈" },
      { time: "18:00", title: "抵達神戶機場", note: "領取行李後前往三宮" }
    ],
    stay: { name: "神戶蒙特埃瑪納酒店", note: "三宮站・10/24—10/25", map: "https://maps.app.goo.gl/RPn1Bx4hcyhxE55j8", mapcode: "12 368 873*55" },
    meals: [{ type: "晚餐", name: "とんかつ四郎吉", map: "https://maps.app.goo.gl/Qr4Jj6CtEwVCLheY7" }]
  },
  {
    date: "10/25", week: "日", region: "神戶市區", title: "神社、異人館與摩耶夜景",
    intro: "上午取車，從神戶山側一路玩到日本三大夜景之一的掬星台。",
    events: [
      { time: "09:00", title: "生田神社", note: "在神戶市中心的古老神社開啟一天", map: "https://maps.app.goo.gl/hCCLhNhbg8y9DeXB9" },
      { time: "10:00", title: "TOYOTA Rent a Car 三宮站前店", note: "取車・確認導航、ETC 與還車方式", map: "https://maps.app.goo.gl/pgWa97hiqfVvJRyw7" },
      { time: "上午", title: "神戶布引香草園", note: "搭乘纜車俯瞰神戶市景" },
      { time: "午後", title: "北野異人館街・北野天滿神社", note: "沿著北野坂慢慢散步" },
      {
        time: "夜間", title: "摩耶山掬星台", note: "日本三大夜景之一・PDF 提供三個停車備案",
        parking: [
          { name: "COIN PARK 五毛通４丁目", map: "https://maps.app.goo.gl/DiFWEd5iKKqhz7b48", mapcode: "12 461 821*58" },
          { name: "タイムパーキング 五毛通４丁目", map: "https://maps.app.goo.gl/xBFM7cV5eQD2njHQ7", mapcode: "12 461 731*05" },
          { name: "Akippa｜Oji Koen 4-chome Parking Lot", map: "https://maps.app.goo.gl/z7XboWSjcMbZCmzh6", mapcode: "12 461 670*31" }
        ]
      }
    ],
    stay: { name: "神戶蒙特埃瑪納酒店", note: "三宮站・續住", map: "https://maps.app.goo.gl/RPn1Bx4hcyhxE55j8", mapcode: "12 368 873*55" },
    meals: [{ type: "晚餐", name: "Kobe Beef Yakiniku Okatora Sannomiya", map: "https://maps.app.goo.gl/LNp8zwHuDqSerzyR8" }]
  },
  {
    date: "10/26", week: "一", region: "有馬溫泉", title: "金泉、銀泉與山間纜車",
    intro: "飯店步行約六分鐘進入溫泉街，在老街、玩具與山景之間慢慢走。",
    events: [
      { time: "上午", title: "有馬溫泉街", note: "由飯店步行約六分鐘" },
      { time: "上午", title: "有馬玩具博物館", note: "木製玩具與溫暖童趣" },
      { time: "午後", title: "金之湯・銀之湯", note: "體驗有馬兩種代表性泉質" },
      {
        time: "彈性", title: "六甲有馬空中纜車", note: "營運時間 09:30—17:10・請依天候確認",
        parking: [{ name: "Rokkoarima Ropeway Chu Parking Lot", map: "https://maps.app.goo.gl/9BMXqBzYFU4tVALa8", mapcode: "12 734 533*06" }]
      }
    ],
    stay: { name: "有馬溫泉 月光園鴻朧館", note: "一泊二食・有馬溫泉", map: "https://maps.app.goo.gl/HMuKFM3h2ksytF189", mapcode: "12 734 866*67" },
    meals: [{ type: "晚餐", name: "飯店晚餐" }]
  },
  {
    date: "10/27", week: "二", region: "神戶三田", title: "Outlet 悠閒購物日",
    intro: "把一天留給神戶三田暢貨中心，預留用餐、退稅與移動時間。",
    events: [
      { time: "整日", title: "Kobe Sanda Premium Outlets", note: "神戶三田 Premium Outlets", map: "https://maps.app.goo.gl/rx1e5abEGMyk9eZS6", mapcode: "155 068 670*20" }
    ],
    stay: {
      name: "神戶全日空皇冠假日酒店", note: "15:00 入住・11:00 退房", map: "https://maps.app.goo.gl/UQzuTnhD3zagoAaS8",
      parking: [
        { name: "ANA Crowne Plaza Kobe Parking Lot", map: "https://maps.app.goo.gl/F5JEoLt5e8rYo46z5", mapcode: "12 428 200*87" },
        { name: "飯店停車備用 Mapcode", mapcode: "12 428 171*44" }
      ]
    },
    meals: [{ type: "早餐", name: "飯店早餐" }]
  },
  {
    date: "10/28", week: "三", region: "環球影城・自駕備案", title: "魔法世界，或追一日楓景",
    intro: "PDF 欄頭標示環球影城，詳細欄另列勝尾寺、箕面與神戶港自駕路線，兩套都保留。",
    events: [
      { time: "主行程", title: "日本環球影城", note: "安排整日遊園・依門票與快速通關時段行動" },
      {
        time: "備案", title: "勝尾寺", note: "滿山勝運達摩・停車位置為地下有料停車場",
        parking: [{ name: "勝尾寺有料駐車場（地下）", map: "https://maps.app.goo.gl/xCeM5vGQpnJtJyxq7", mapcode: "52 104 313*53" }]
      },
      {
        time: "備案", title: "明治之森箕面國定公園", note: "瀑布與森林步道・留意步行時間",
        parking: [{ name: "Times 大滝上駐車場（ゲート外）", map: "https://maps.app.goo.gl/uPzuwebPWR2aPzus9", mapcode: "52 071 207*56" }]
      },
      {
        time: "備案", title: "KOBE HARBORLAND umie", note: "購物、晚餐與港景", map: "https://maps.app.goo.gl/A2cRDAye8tzvK5UL6",
        parking: [{ name: "umie 地下駐車場", map: "https://maps.app.goo.gl/o6Jj519nsYJi2sGe6", mapcode: "12 337 185*27" }]
      },
      {
        time: "備案", title: "美利堅公園", note: "神戶塔與海港夜色", map: "https://maps.app.goo.gl/7SbyzZRu13LMjDW58",
        parking: [{ name: "Times Meriken Park Parking Lot", map: "https://maps.app.goo.gl/n33cRL7q3rNtk7h36", mapcode: "12 337 356*85" }]
      }
    ],
    stay: { name: "神戶全日空皇冠假日酒店", note: "新神戶站・續住", map: "https://maps.app.goo.gl/UQzuTnhD3zagoAaS8" }
  },
  {
    date: "10/29", week: "四", region: "姬路", title: "白鷺城與書寫山秋色",
    intro: "上午登姬路城，午後搭纜車上書寫山，傍晚到 AEON MALL 補給。",
    events: [
      {
        time: "上午", title: "姬路城", note: "建議穿著好走的鞋・停車於大手門停車場",
        parking: [{ name: "大手門駐車場", map: "https://maps.app.goo.gl/QZB53SRtM1WApXZz7", mapcode: "24 308 004*56" }]
      },
      {
        time: "午後", title: "書寫山圓教寺", note: "搭乘纜車上山・留意末班時間",
        parking: [{ name: "書寫山纜車站停車場", map: "https://maps.app.goo.gl/Ehst9jc6ck7L2vZ98", mapcode: "24 455 010*76" }]
      },
      { time: "傍晚", title: "AEON MALL", note: "晚餐與旅行補給", map: "https://maps.app.goo.gl/FcFsWi5fqCT6sNzD7", mapcode: "24 155 405*61" }
    ],
    stay: { name: "Designer rental villa Lino-Lino Himeji Higashiyama", note: "Vacation STAY 93087v", map: "https://maps.app.goo.gl/86AV4KCHNbapxS2Q8" }
  },
  {
    date: "10/30", week: "五", region: "淡路島・鳴門", title: "沿著海風追漩渦",
    intro: "從道之驛一路前往鳴門與海峽展望台，行程請配合當日潮汐。",
    events: [
      { time: "上午", title: "道の駅うずしお", note: "海景、伴手禮與淡路島美食", map: "https://maps.app.goo.gl/QhpzHQdcHu1Kw3qP6", mapcode: "406 244 615*00" },
      { time: "中午", title: "鳴門觀光船", note: "務必依當日潮汐與船班調整", map: "https://maps.app.goo.gl/Qzcb1uuqHMXYJeoSA", mapcode: "406 210 243*42" },
      { time: "午後", title: "漩渦之丘 大鳴門橋紀念館", note: "眺望大鳴門橋與漩渦海峽", map: "https://maps.app.goo.gl/jCYrs7AwtQdVEU9s5" },
      { time: "午後", title: "生石海峽展望台", note: "眺望紀淡海峽", map: "https://maps.app.goo.gl/hqtXAFnERHaXCyK36", mapcode: "210 054 764*26" }
    ],
    stay: { name: "Yumekaiyu Awajishima", note: "淡路島海景溫泉旅館", map: "https://maps.app.goo.gl/coNPbhy1p8wiQRn28", mapcode: "210 318 354*28" },
    meals: [{ type: "美食參考", name: "淡路島觀光美食資訊", map: "https://www.instagram.com/awajishima_tour/", mapLabel: "Instagram" }]
  },
  {
    date: "10/31", week: "六", region: "淡路島・舞子", title: "岩戶神社與明石大橋",
    intro: "上午從淡路島北上，午餐後前往舞子，完成期待已久的上橋體驗。",
    events: [
      { time: "上午", title: "安乎岩戶神社", note: "淡路島上的岩窟神社", map: "https://maps.app.goo.gl/xDjuKK4EX5SW2i8e9", mapcode: "210 497 830*24" },
      {
        time: "13:15", title: "明石海峽大橋・舞子", note: "橋之科學館集合・請依預約通知提早報到",
        parking: [
          { name: "舞子站前停車", mapcode: "31 169 585*66" },
          { name: "舞子公園停車", mapcode: "31 169 401*01" }
        ]
      }
    ],
    stay: { name: "Hotel Monterey Kobe", note: "三宮站・旅程最後一晚", map: "https://maps.app.goo.gl/nR166NCXwa8srUXW7", mapcode: "12 368 753*00" },
    meals: [
      { type: "早餐", name: "飯店早餐" },
      { type: "午餐", name: "Kintaro Higashiura（迴轉壽司・11:30 開）", map: "https://maps.app.goo.gl/2XnHm4HM16ncyBLb6" }
    ]
  },
  {
    date: "11/01", week: "日", region: "神戶・回程", title: "帶著楓色回家",
    intro: "退房後完成還車，預留充足時間前往神戶機場。",
    events: [
      { time: "白天", title: "TOYOTA Rent a Car 三宮", note: "依預約時間完成還車", map: "https://maps.app.goo.gl/LM7M631mpoJcxMLp9", mapcode: "12 398 049*82" },
      { time: "19:00", title: "長榮航空起飛", note: "神戶機場 UKB 第二航廈 → 桃園機場第二航廈" },
      { time: "21:15", title: "抵達台北", note: "平安回家" }
    ]
  }
];

const tabs = document.querySelector(".date-tabs");
const card = document.querySelector("#day-card");

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function mapLink(url, label = "Google Maps") {
  if (!url) return "";
  return `<a class="nav-link" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
}

function mapcodeButton(code) {
  if (!code) return "";
  return `<button class="mapcode-button" type="button" data-copy="${escapeHtml(code)}" aria-label="複製 Mapcode ${escapeHtml(code)}"><span>MAPCODE</span><b>${escapeHtml(code)}</b><small>點一下複製</small></button>`;
}

function parkingList(items = []) {
  if (!items.length) return "";
  return `<div class="parking-list"><p class="parking-label">🚗 停車導航</p>${items.map(item => `
    <div class="parking-item">
      <strong>${escapeHtml(item.name)}</strong>
      <div class="action-row">${mapLink(item.map)}${mapcodeButton(item.mapcode)}</div>
    </div>`).join("")}</div>`;
}

function eventActions(event) {
  const actions = `${mapLink(event.map)}${mapcodeButton(event.mapcode)}`;
  return actions ? `<div class="action-row">${actions}</div>` : "";
}

function infoCards(day) {
  const cards = [];
  if (day.stay) {
    cards.push(`<section class="trip-info-card stay-info">
      <p class="info-label">今晚住這裡</p>
      <h4>🛏️ ${escapeHtml(day.stay.name)}</h4>
      <p>${escapeHtml(day.stay.note)}</p>
      <div class="action-row">${mapLink(day.stay.map)}${mapcodeButton(day.stay.mapcode)}</div>
      ${parkingList(day.stay.parking)}
    </section>`);
  }
  if (day.meals?.length) {
    cards.push(`<section class="trip-info-card meal-info">
      <p class="info-label">吃飯筆記</p>
      <div class="meal-list">${day.meals.map(meal => `<div class="meal-item"><span>${escapeHtml(meal.type)}</span><strong>${escapeHtml(meal.name)}</strong>${mapLink(meal.map, meal.mapLabel || "地圖")}</div>`).join("")}</div>
    </section>`);
  }
  return cards.length ? `<div class="trip-info-grid">${cards.join("")}</div>` : "";
}

function renderTabs() {
  tabs.innerHTML = days.map((day, index) => `<button class="date-tab ${index === 0 ? "active" : ""}" role="tab" aria-selected="${index === 0}" data-index="${index}"><span>${day.date}</span><small>週${day.week}</small></button>`).join("");
}

function renderDay(index) {
  const day = days[index];
  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation = "";
  card.innerHTML = `
    <div class="day-summary">
      <span class="day-index">${String(index + 1).padStart(2, "0")}</span>
      <div><p>${day.date}・星期${day.week}</p><h3>${day.title}</h3><p>${day.intro}</p><span class="region-tag">📍 ${day.region}</span></div>
    </div>
    <div class="day-detail">
      <p class="detail-kicker">TODAY'S ROUTE</p>
      <ol class="timeline">${day.events.map(event => `<li>
        <time>${escapeHtml(event.time)}</time><i></i>
        <div class="event-content"><strong>${escapeHtml(event.title)}</strong><small>${escapeHtml(event.note)}</small>${eventActions(event)}${parkingList(event.parking)}</div>
      </li>`).join("")}</ol>
      ${index === 7 ? `<a class="bridge-day-link" href="bridge.html"><span>BRIDGE WORLD</span><strong>查看上橋流程與注意事項</strong><b>→</b></a>` : ""}
      ${infoCards(day)}
      <div class="day-tools">
        <div class="note-field"><label for="food-${index}">今天想吃／補充</label><input id="food-${index}" data-note="food-${index}" placeholder="臨時找到的餐廳、點心…" value="${escapeHtml(localStorage.getItem(`food-${index}`) || "")}"></div>
        <div class="note-field"><label for="backup-${index}">替代行程／備註</label><input id="backup-${index}" data-note="backup-${index}" placeholder="下雨天備案、預約時間…" value="${escapeHtml(localStorage.getItem(`backup-${index}`) || "")}"></div>
      </div>
    </div>`;
  document.querySelectorAll(".date-tab").forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
    tab.setAttribute("aria-selected", i === index);
  });
  card.querySelectorAll("[data-note]").forEach(input => input.addEventListener("input", () => localStorage.setItem(input.dataset.note, input.value)));
}

async function copyMapcode(button) {
  const value = button.dataset.copy;
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const input = document.createElement("textarea");
    input.value = value;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  const hint = button.querySelector("small");
  const original = hint.textContent;
  button.classList.add("copied");
  hint.textContent = "已複製！";
  window.setTimeout(() => { button.classList.remove("copied"); hint.textContent = original; }, 1600);
}

renderTabs();
renderDay(0);
tabs.addEventListener("click", event => {
  const button = event.target.closest(".date-tab");
  if (button) renderDay(Number(button.dataset.index));
});
card.addEventListener("click", event => {
  const button = event.target.closest("[data-copy]");
  if (button) copyMapcode(button);
});

document.querySelectorAll("[data-check]").forEach(box => {
  box.checked = localStorage.getItem(`check-${box.dataset.check}`) === "true";
  box.addEventListener("change", () => localStorage.setItem(`check-${box.dataset.check}`, box.checked));
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});
