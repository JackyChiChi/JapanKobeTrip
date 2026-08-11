const days = [
  { date: "10/24", week: "六", region: "啟程・神戶", title: "飛向港都的第一天", intro: "帶著期待起飛，抵達神戶後慢慢入住、好好休息。", events: [
    ["14:20", "長榮航空起飛", "桃園機場第二航廈 → 神戶機場 UKB"], ["18:00", "抵達神戶機場", "領取行李後前往三宮"], ["晚間", "Hotel Monterey Kobe", "辦理入住・自由晚餐"] ] },
  { date: "10/25", week: "日", region: "神戶市區", title: "港都與異人館散步", intro: "從神社、山景一路走到海港，收集神戶最經典的風景。", events: [
    ["09:00", "生田神社", "在市中心的古老神社開啟一天"], ["10:00", "三宮站前店租車", "取車・確認導航與 ETC"], ["上午", "神戶布引香草園", "搭纜車看城市與香草花園"], ["午後", "北野異人館街", "坡道上的洋館散步"], ["傍晚", "KOBE HARBORLAND umie", "購物與港景晚餐"], ["夜間", "美利堅公園", "看神戶塔與海港夜色"] ] },
  { date: "10/26", week: "一", region: "勝尾寺・有馬", title: "達摩與溫泉的山間日", intro: "拜訪滿山達摩，再到有馬溫泉街泡一場金銀之湯。", events: [
    ["上午", "勝尾寺", "尋找遍布寺院的勝運達摩"], ["午後", "有馬溫泉街", "石板巷弄散步與小吃"], ["午後", "有馬玩具博物館", "木製玩具與溫暖童趣"], ["傍晚", "金之湯・銀之湯", "體驗有馬兩種名湯"], ["彈性", "六甲有馬空中纜車", "依天候與營運時間安排"] ] },
  { date: "10/27", week: "二", region: "三田・摩耶山", title: "購物與百萬夜景", intro: "白天尋寶，晚上登上掬星台，把閃亮神戶收進眼底。", events: [
    ["上午", "Kobe Sanda Premium Outlets", "神戶三田暢貨中心購物"], ["午後", "Outlet 悠閒逛街", "預留用餐與退稅時間"], ["夜間", "摩耶山掬星台", "日本三大夜景之一・留意末班交通"] ] },
  { date: "10/28", week: "三", region: "大阪", title: "魔法電影的一整天", intro: "保留一整天給環球影城，從開園玩到夜晚亮燈。", events: [
    ["開園前", "前往日本環球影城", "建議提早 60 分鐘抵達"], ["上午", "熱門園區與設施", "依整理券或快速通關時段安排"], ["午後", "園區午餐與遊行", "預留休息與購物時間"], ["夜間", "夜景與紀念品", "離園前確認回程交通"] ] },
  { date: "10/29", week: "四", region: "姬路", title: "白鷺城與山寺秋色", intro: "沿著古城與庭園慢行，再到書寫山感受靜謐秋意。", events: [
    ["上午", "姬路城", "登上白鷺城・建議穿好走的鞋"], ["中午", "好古園", "庭園散步與午餐"], ["午後", "書寫山圓教寺", "纜車上山・留意末班時間"], ["傍晚", "AEON MALL", "晚餐與補給"] ] },
  { date: "10/30", week: "五", region: "淡路島・鳴門", title: "沿著海風追一圈島", intro: "從神秘岩戶到鳴門漩渦，今天的主角是壯闊海景。", events: [
    ["上午", "Awaji Island Ride", "依體力與路線安排島上移動"], ["上午", "安乎岩戶神社", "海島上的神秘岩窟"], ["中午", "生石海峽展望台", "眺望紀淡海峽"], ["午後", "道之驛 Uzushio", "淡路島漢堡與伴手禮"], ["午後", "鳴門漩渦", "需依當日潮汐時間調整"] ] },
  { date: "10/31", week: "六", region: "舞子・明石", title: "走近跨海大橋", intro: "在舞子仰望明石海峽大橋，慢慢享受旅程最後一個完整午後。", events: [
    ["上午", "淡路島自由時光", "退房後悠閒前往舞子"], ["13:15", "明石海峽大橋塔頂體驗", "橋之科學館報到・13:25 出發・約 16:05 結束"], ["傍晚", "神戶自由行程", "採買伴手禮・整理行李"] ] },
  { date: "11/01", week: "日", region: "神戶・回程", title: "帶著蜂蜜色回家", intro: "把最後一點港都時光裝進行李，期待下一次旅行。", events: [
    ["上午", "最後散步與採買", "預留前往機場時間"], ["16:30", "前往神戶機場", "建議起飛前 2 小時抵達"], ["19:00", "長榮航空起飛", "神戶機場 UKB → 桃園機場第二航廈"], ["21:15", "抵達台北", "平安回家"] ] }
];

const tabs = document.querySelector(".date-tabs");
const card = document.querySelector("#day-card");

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
      <ol class="timeline">${day.events.map(event => `<li><time>${event[0]}</time><i></i><span>${event[1]}<small>${event[2]}</small></span></li>`).join("")}</ol>
      ${index === 7 ? `<a class="bridge-day-link" href="bridge.html"><span>BRIDGE WORLD</span><strong>查看上橋流程與注意事項</strong><b>→</b></a>` : ""}
      <div class="day-tools">
        <div class="note-field"><label for="food-${index}">今天想吃</label><input id="food-${index}" data-note="food-${index}" placeholder="早餐、午餐、點心…" value="${escapeHtml(localStorage.getItem(`food-${index}`) || "")}"></div>
        <div class="note-field"><label for="backup-${index}">替代行程 / 備註</label><input id="backup-${index}" data-note="backup-${index}" placeholder="下雨天備案、預約時間…" value="${escapeHtml(localStorage.getItem(`backup-${index}`) || "")}"></div>
      </div>
    </div>`;
  document.querySelectorAll(".date-tab").forEach((tab, i) => { tab.classList.toggle("active", i === index); tab.setAttribute("aria-selected", i === index); });
  card.querySelectorAll("[data-note]").forEach(input => input.addEventListener("input", () => localStorage.setItem(input.dataset.note, input.value)));
}

function escapeHtml(value) { return value.replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char])); }

renderTabs();
renderDay(0);
tabs.addEventListener("click", event => { const button = event.target.closest(".date-tab"); if (button) renderDay(Number(button.dataset.index)); });

document.querySelectorAll("[data-check]").forEach(box => {
  box.checked = localStorage.getItem(`check-${box.dataset.check}`) === "true";
  box.addEventListener("change", () => localStorage.setItem(`check-${box.dataset.check}`, box.checked));
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => { const open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", open); });
nav.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); });
