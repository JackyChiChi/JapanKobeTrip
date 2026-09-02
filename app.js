const days = [
  {
    date: "10/24", week: "六", region: "台北 → 神戶", title: "飛向港都的第一天",
    intro: "傍晚抵達神戶，先用一頓炸豬排為九日旅程揭開序幕。",
    events: [
      { time: "14:20–18:00", title: "長榮航空飛往神戶", note: "桃園機場第二航廈 → 神戶機場 UKB 第二航廈" },
      { time: "18:00–19:15", title: "入境、領取行李", note: "抵達神戶機場後預留約 75 分鐘辦理入境" },
      { time: "19:15–19:45", title: "前往三宮與飯店", note: "搭 Port Liner 前往三宮，抵達後步行至飯店", transfer: "電車約 20 分鐘＋步行約 10 分鐘" }
    ],
    stay: { name: "神戶蒙特埃瑪納酒店", note: "三宮站・10/24—10/25", map: "https://maps.app.goo.gl/RPn1Bx4hcyhxE55j8", mapcode: "12 368 873*55" },
    meals: [{ type: "晚餐", name: "とんかつ四郎吉", map: "https://maps.app.goo.gl/Qr4Jj6CtEwVCLheY7" }]
  },
  {
    date: "10/25", week: "日", region: "神戶市區・港灣", title: "神社、港灣與摩耶夜景",
    intro: "上午參拜與取車，中午遊逛 Harborland、美利堅公園，傍晚上摩耶山等待神戶夜景。",
    events: [
      { time: "09:00–09:45", title: "生田神社", note: "參拜並在境內散步約 45 分鐘", map: "https://maps.app.goo.gl/hCCLhNhbg8y9DeXB9", transfer: "飯店步行約 5–10 分鐘" },
      { time: "10:00–10:30", title: "TOYOTA Rent a Car 三宮站前店", note: "取車・確認導航、ETC 與還車方式", map: "https://maps.app.goo.gl/pgWa97hiqfVvJRyw7", transfer: "由生田神社步行約 10 分鐘" },
      {
        time: "10:45–13:15", title: "KOBE HARBORLAND umie", note: "購物、午餐與欣賞港景", map: "https://maps.app.goo.gl/A2cRDAye8tzvK5UL6", transfer: "三宮取車處至港區約 10–15 分鐘",
        parking: [{ name: "umie 地下停車場", map: "https://maps.app.goo.gl/o6Jj519nsYJi2sGe6", mapcode: "12 337 185*27" }]
      },
      {
        time: "13:25–15:10", title: "美利堅公園", note: "神戶塔、BE KOBE 與海港散步", map: "https://maps.app.goo.gl/7SbyzZRu13LMjDW58", transfer: "由 Harborland 步行約 10 分鐘",
        parking: [{ name: "Times Meriken Park Parking Lot", map: "https://maps.app.goo.gl/n33cRL7q3rNtk7h36", mapcode: "12 337 356*85" }]
      },
      {
        time: "15:45–19:00", title: "摩耶山掬星台", note: "預留纜車轉乘與候車；約 17:15 後等待夜景亮起",
        transfer: "港區至摩耶纜車站車程約 25 分鐘＋上山約 25 分鐘",
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
    intro: "09:00 從三宮出發，抵達有馬寄放行李後，在老街、玩具、溫泉與山景之間慢慢走。",
    events: [
      { time: "09:00–09:50", title: "三宮出發前往有馬溫泉", note: "抵達飯店後先寄放行李", transfer: "車程約 35–45 分鐘＋停車手續" },
      { time: "10:00–11:00", title: "有馬溫泉街", note: "老街散步、伴手禮與晨間小吃", transfer: "由飯店步行約 6 分鐘" },
      { time: "11:00–12:00", title: "有馬玩具博物館", note: "參觀木製玩具展示約 60 分鐘", transfer: "溫泉街內步行約 2 分鐘" },
      { time: "12:00–13:00", title: "溫泉街午餐與自由散步", note: "避開下午泡湯前過度緊湊" },
      { time: "13:00–15:00", title: "金之湯・銀之湯", note: "兩館之間步行約 5 分鐘，包含更衣與休息" },
      {
        time: "15:15–16:45", title: "六甲有馬空中纜車", note: "保留候車與山上停留時間，最晚 16:45 左右準備下山",
        transfer: "溫泉街至停車場車程約 5–10 分鐘",
        parking: [{ name: "Rokkoarima Ropeway Chu Parking Lot", map: "https://maps.app.goo.gl/9BMXqBzYFU4tVALa8", mapcode: "12 734 533*06" }]
      }
    ],
    stay: { name: "有馬溫泉 月光園鴻朧館", note: "一泊二食・有馬溫泉", map: "https://maps.app.goo.gl/HMuKFM3h2ksytF189", mapcode: "12 734 866*67" },
    meals: [{ type: "晚餐", name: "飯店晚餐" }]
  },
  {
    date: "10/27", week: "二", region: "神戶三田・天橋立", title: "Outlet 購物後前往宮津",
    intro: "在神戶三田暢貨中心購物後北上宮津，為隔日的天橋立行程預留移動時間。",
    events: [
      { time: "09:00–09:35", title: "有馬出發前往神戶三田", note: "提早抵達可先停車、喝咖啡，等待商場開門", transfer: "車程約 30–35 分鐘" },
      { time: "10:00–14:30", title: "Kobe Sanda Premium Outlets", note: "包含購物、午餐與退稅時間", map: "https://maps.app.goo.gl/rx1e5abEGMyk9eZS6", mapcode: "155 068 670*20", floorMap: "https://platinumaps.jp/d/premiumoutlets-kobesanda?culture=en&floor=1F" },
      { time: "14:30–16:20", title: "北上宮津・飯店入住", note: "途中可安排一次休息，建議不要晚於 15:00 離開 Outlet", transfer: "高速公路車程約 1 小時 40–50 分鐘" }
    ],
    stay: { name: "Mercure Kyoto Miyazu Resort & Spa", note: "京都宮津美居溫泉度假酒店", map: "https://maps.app.goo.gl/sYEwxo9ngfEGUXnB7", mapcode: "197 298 043*63" },
    meals: [{ type: "早餐", name: "飯店早餐" }]
  },
  {
    date: "10/28", week: "三", region: "天橋立・城崎", title: "海之京都與溫泉小鎮",
    intro: "先遊天橋立，午後採 A 伊根或 B 城崎纜車二選一；兩條支線都跑會壓縮晚上的溫泉時間。",
    events: [
      { time: "09:00–09:40", title: "雪舟觀展望所", note: "從高處欣賞天橋立景觀", map: "https://maps.app.goo.gl/osHHvAZKJDh8pbTJA", mapcode: "197 205 301*58", transfer: "飯店出發車程約 15–20 分鐘" },
      { time: "10:00–11:20", title: "天橋立 View Land", note: "包含停車、纜車／吊椅來回與山頂賞景", map: "https://maps.app.goo.gl/MkmCFrZqMyf5vrUk8", mapcode: "197 202 313*16", transfer: "展望所至停車場約 15 分鐘" },
      { time: "11:30–12:10", title: "天橋立遊船", note: "航程約 12 分鐘，時間含候船與碼頭步行", map: "https://maps.app.goo.gl/EMTY6d7zTDA7LCVUA", mapcode: "197 202 377*84", transfer: "由 View Land 步行前往碼頭" },
      { time: "12:10–13:10", title: "天橋立午餐", note: "13:10 前決定午後採 A 伊根或 B 城崎纜車" },
      { time: "14:00–14:35 A", title: "伊根灣遊覽船", note: "選擇 A；搭船後再前往舟屋之里公園", map: "https://maps.app.goo.gl/T38PRkYSH9gfuffd7", mapcode: "652 603 078*45", transfer: "天橋立至伊根車程約 35–40 分鐘" },
      { time: "14:45–15:20 A", title: "道之驛 舟屋之里公園", note: "選擇 A；15:20 左右離開才能在傍晚抵達城崎", map: "https://maps.app.goo.gl/9f21fRDh2jDg3UKW7", mapcode: "652 605 519*06", transfer: "遊覽船碼頭車程約 10 分鐘；至城崎約 1 小時 20 分鐘" },
      { time: "14:45–16:00 B", title: "城崎溫泉纜車", note: "選擇 B；建議搭 14:50 或 15:10 班次，上行末班為 16:50", transfer: "天橋立直達城崎約 1 小時 25 分鐘", parking: [{ name: "城崎溫泉纜車停車場", map: "https://maps.app.goo.gl/MoUd67tv65EaqtdA7", mapcode: "428 741 625*62" }] },
      { time: "17:00–20:00", title: "城崎溫泉・YUMEPA 夢之湯通行證", note: "入住後使用通行證體驗七大外湯；不必一次泡完" }
    ],
    stay: { name: "Rakuten STAY TERRACE Kinosaki Riverside", note: "城崎溫泉・河畔住宿", map: "https://maps.app.goo.gl/FkBXU7Rize1inLtE7", mapcode: "428 621 550*22" },
    meals: [{ type: "早餐", name: "飯店早餐" }]
  },
  {
    date: "10/29", week: "四", region: "城崎・姬路", title: "玄武洞、白鷺城與書寫山",
    intro: "離開城崎後先探訪玄武洞，再前往姬路城與書寫山圓教寺，傍晚到 AEON MALL 補給。",
    events: [
      { time: "09:00–10:00", title: "玄武洞公園", note: "欣賞玄武岩柱狀節理地景", map: "https://maps.app.goo.gl/M87t7m8ProniQs8ZA", mapcode: "428 621 353*50", transfer: "城崎住宿車程約 10–15 分鐘" },
      { time: "10:00–11:50", title: "前往姬路・途中簡單午餐", note: "建議在休息站快速用餐，避免壓縮書寫山時間", transfer: "高速公路車程約 1 小時 45–50 分鐘" },
      {
        time: "12:20–14:20", title: "姬路城", note: "參觀天守與主要城區，14:20 必須離開以銜接書寫山",
        transfer: "抵達後停車、步行至入口約 20–30 分鐘",
        parking: [{ name: "大手門駐車場", map: "https://maps.app.goo.gl/QZB53SRtM1WApXZz7", mapcode: "24 308 004*56" }]
      },
      {
        time: "15:00–16:45", title: "書寫山圓教寺", note: "建議搭 15:00 上山、16:45 下山；10 月下旬平日末班約 17:00",
        transfer: "姬路城至纜車站車程約 25 分鐘",
        parking: [{ name: "書寫山纜車站停車場", map: "https://maps.app.goo.gl/Ehst9jc6ck7L2vZ98", mapcode: "24 455 010*76" }]
      },
      { time: "17:15–19:00", title: "AEON MALL", note: "晚餐與旅行補給", map: "https://maps.app.goo.gl/FcFsWi5fqCT6sNzD7", mapcode: "24 155 405*61", transfer: "書寫山纜車站車程約 25–30 分鐘" }
    ],
    stay: { name: "Designer rental villa Lino-Lino Himeji Higashiyama", note: "Vacation STAY 93087v", map: "https://maps.app.goo.gl/86AV4KCHNbapxS2Q8" }
  },
  {
    date: "10/30", week: "五", region: "淡路島・鳴門", title: "沿著海風追漩渦",
    intro: "上午賞花與吃鬆餅，午後集中走大鳴門橋兩側；觀光船暫排 15:45，最終仍須依潮汐與預約調整。",
    events: [
      { time: "09:00–10:20", title: "姬路出發・前往淡路島", note: "經明石海峽大橋前往淡路島北部", transfer: "車程約 1 小時 15–25 分鐘" },
      { time: "10:20–11:20", title: "兵庫縣立公園淡路花之棧敷", note: "欣賞波斯菊、鼠尾草等季節花卉", map: "https://maps.app.goo.gl/bMFf1ctKAMz5tSNk8", mapcode: "339 207 165*63" },
      { time: "11:40–13:00", title: "A Happy Pancake", note: "預留候位與用餐時間；人潮多時最晚 13:00 離開", map: "https://maps.app.goo.gl/GLmyczVRAhVkZDo19", mapcode: "339 044 048*65", transfer: "花之棧敷車程約 20 分鐘" },
      { time: "14:10–14:35", title: "道の駅うずしお", note: "短停看海、購買伴手禮", map: "https://maps.app.goo.gl/QhpzHQdcHu1Kw3qP6", mapcode: "406 244 615*00", transfer: "A Happy Pancake 車程約 1 小時 10–20 分鐘" },
      { time: "14:45–15:10", title: "漩渦之丘 大鳴門橋紀念館", note: "以展望台與大鳴門橋景觀為主，這天不宜久留", map: "https://maps.app.goo.gl/jCYrs7AwtQdVEU9s5", transfer: "道之驛車程約 10 分鐘" },
      { time: "15:30 報到", title: "鳴門觀光船（暫排 15:45）", note: "船班受潮汐影響；預約後依官方建議時段整段平移", map: "https://maps.app.goo.gl/Qzcb1uuqHMXYJeoSA", mapcode: "406 210 243*42", transfer: "紀念館至龜浦觀光港約 20–25 分鐘" },
      { time: "16:25–17:00", title: "鳴門公園", note: "搭船後散步，眺望大鳴門橋與鳴門海峽", map: "https://maps.app.goo.gl/BGyfhuQ6xrwdRNbQA", mapcode: "406 212 844*53", transfer: "觀光港周邊車程約 5 分鐘；至飯店約 50–60 分鐘" }
    ],
    stay: { name: "Yumekaiyu Awajishima", note: "淡路島海景溫泉旅館", map: "https://maps.app.goo.gl/coNPbhy1p8wiQRn28", mapcode: "210 318 354*28" },
    meals: [{ type: "餐點／點心", name: "A Happy Pancake", map: "https://maps.app.goo.gl/GLmyczVRAhVkZDo19", mapcode: "339 044 048*65" }]
  },
  {
    date: "10/31", week: "六", region: "淡路島・舞子", title: "岩戶神社與明石大橋",
    intro: "上午從淡路島北上，午餐後前往舞子，完成期待已久的上橋體驗。",
    events: [
      { time: "09:00–09:20", title: "飯店出發前往安乎", note: "退房後沿淡路島東岸北上", transfer: "車程約 15–20 分鐘" },
      { time: "09:20–10:10", title: "安乎岩戶神社", note: "參拜淡路島上的岩窟神社", map: "https://maps.app.goo.gl/xDjuKK4EX5SW2i8e9", mapcode: "210 497 830*24" },
      { time: "11:30–12:05", title: "Kintaro Higashiura 午餐", note: "10:10 左右離開神社，提早抵達等候 11:30 開店", map: "https://maps.app.goo.gl/2XnHm4HM16ncyBLb6", mapcode: "339 149 340*80", transfer: "神社至餐廳車程約 35–40 分鐘" },
      { time: "12:25–12:40", title: "淡路島休息站（下行）", note: "短停補給並眺望明石海峽大橋", map: "https://maps.app.goo.gl/Zi3iAXuivzxCsr8s7", mapcode: "946 872 552*67", transfer: "餐廳車程約 20 分鐘" },
      {
        time: "12:55 報到", title: "明石海峽大橋・舞子", note: "PDF 預約時間 13:15；建議至少提早 20 分鐘抵達",
        transfer: "休息站至舞子停車場約 15 分鐘；體驗約至 16:00",
        parking: [
          { name: "舞子站前停車", mapcode: "31 169 585*66" },
          { name: "舞子公園停車", mapcode: "31 169 401*01" }
        ]
      },
      { time: "16:00–16:40", title: "前往 Hotel Monterey Kobe", note: "體驗結束後返回神戶三宮辦理入住", transfer: "舞子至三宮車程約 30–40 分鐘" }
    ],
    stay: { name: "Hotel Monterey Kobe", note: "三宮站・旅程最後一晚", map: "https://maps.app.goo.gl/nR166NCXwa8srUXW7", mapcode: "12 368 753*00" },
    meals: [
      { type: "早餐", name: "飯店早餐" },
      { type: "午餐", name: "Kintaro Higashiura（迴轉壽司・11:30 開）", map: "https://maps.app.goo.gl/2XnHm4HM16ncyBLb6", mapcode: "339 149 340*80" }
    ]
  },
  {
    date: "11/01", week: "日", region: "神戶・回程", title: "帶著楓色回家",
    intro: "09:00 退房後前往布引香草園，接著散步北野異人館；14:45 前還車，約 15:30 抵達機場。",
    events: [
      { time: "09:00–09:25", title: "退房・前往新神戶", note: "行李留在車上，先到纜車山麓站周邊停車", transfer: "三宮飯店至新神戶車程約 10–15 分鐘＋停車步行" },
      { time: "09:30–12:00", title: "神戶布引香草園", note: "搭首班纜車上山；園區 10:00 開放，包含纜車來回與散步", transfer: "纜車約每 30 秒一班，單程約 10 分鐘" },
      { time: "12:15–14:00", title: "北野異人館街・北野天滿神社", note: "挑選 1–2 間異人館，並在北野周邊簡單午餐", transfer: "新神戶周邊車程約 5–10 分鐘" },
      { time: "14:15–14:45", title: "TOYOTA Rent a Car 三宮", note: "加滿油後依預約方式完成還車", map: "https://maps.app.goo.gl/LM7M631mpoJcxMLp9", mapcode: "12 398 049*82", transfer: "北野至還車處車程約 10 分鐘" },
      { time: "15:00–15:30", title: "前往神戶機場", note: "由三宮搭 Port Liner，預留轉乘與步行時間", transfer: "電車約 20 分鐘" },
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

function floorMapLink(url) {
  if (!url) return "";
  return `<a class="floor-map-link" href="${escapeHtml(url)}" target="_blank" rel="noopener">
    <span class="floor-map-icon" aria-hidden="true">▦</span>
    <span><small>OUTLET FLOOR GUIDE</small><strong>開啟 1F 數位樓層地圖</strong></span>
    <b aria-hidden="true">↗</b>
  </a>`;
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
      <div class="meal-list">${day.meals.map(meal => `<div class="meal-item"><span>${escapeHtml(meal.type)}</span><strong>${escapeHtml(meal.name)}</strong><div class="action-row">${mapLink(meal.map, meal.mapLabel || "地圖")}${mapcodeButton(meal.mapcode)}</div></div>`).join("")}</div>
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
        <div class="event-content"><strong>${escapeHtml(event.title)}</strong><small>${escapeHtml(event.note)}</small>${event.transfer ? `<span class="transfer-chip"><b>移動</b>${escapeHtml(event.transfer)}</span>` : ""}${floorMapLink(event.floorMap)}${eventActions(event)}${parkingList(event.parking)}</div>
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
