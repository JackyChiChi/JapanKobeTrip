// 行程依「神戶旅遊.pdf」整理；未指定時間以彈性時段呈現。
const days = [
  {
    "date": "10/24",
    "week": "六",
    "region": "台北 → 神戶",
    "title": "飛向港都的第一天",
    "intro": "傍晚抵達神戶，先用一頓炸豬排為九日旅程揭開序幕。",
    "events": [
      {
        "time": "14:20–18:00",
        "title": "長榮航空飛往神戶",
        "note": "桃園機場第二航廈 → 神戶機場 UKB 第二航廈；時間依當地時間顯示"
      }
    ],
    "stay": {
      "name": "神戶蒙特埃瑪納酒店",
      "note": "三宮站・10/24—10/25",
      "map": "https://maps.app.goo.gl/RPn1Bx4hcyhxE55j8",
      "mapcode": "12 368 873*55"
    },
    "meals": [
      {
        "type": "晚餐",
        "name": "とんかつ四郎吉",
        "map": "https://maps.app.goo.gl/Qr4Jj6CtEwVCLheY7"
      }
    ]
  },
  {
    "date": "10/25",
    "week": "日",
    "region": "神戶市區・港灣",
    "title": "神社、港灣與摩耶夜景",
    "intro": "09:00 參拜生田神社、10:00 取車，接著遊逛港灣與美利堅公園，再到摩耶山掬星台欣賞夜景。",
    "events": [
      {
        "time": "09:00",
        "title": "生田神社",
        "note": "參拜與境內散步",
        "map": "https://maps.app.goo.gl/hCCLhNhbg8y9DeXB9"
      },
      {
        "time": "10:00",
        "title": "TOYOTA Rent a Car 三宮站前店",
        "note": "取車・確認導航、ETC 與還車方式",
        "map": "https://maps.app.goo.gl/pgWa97hiqfVvJRyw7"
      },
      {
        "time": "取車後",
        "title": "KOBE HARBORLAND umie",
        "note": "購物與港灣散步",
        "map": "https://maps.app.goo.gl/A2cRDAye8tzvK5UL6",
        "parking": [
          {
            "name": "umie 地下停車場",
            "map": "https://maps.app.goo.gl/o6Jj519nsYJi2sGe6",
            "mapcode": "12 337 185*27"
          }
        ]
      },
      {
        "time": "接續",
        "title": "美利堅公園",
        "note": "神戶塔、BE KOBE 與海港散步",
        "map": "https://maps.app.goo.gl/7SbyzZRu13LMjDW58",
        "parking": [
          {
            "name": "Times Meriken Park Parking Lot",
            "map": "https://maps.app.goo.gl/n33cRL7q3rNtk7h36",
            "mapcode": "12 337 356*85"
          }
        ]
      },
      {
        "time": "夜景",
        "title": "摩耶山掬星台",
        "note": "日本三大夜景之一；依當日狀況安排上山時間",
        "parking": [
          {
            "name": "COIN PARK 五毛通４丁目",
            "map": "https://maps.app.goo.gl/DiFWEd5iKKqhz7b48",
            "mapcode": "12 461 821*58"
          },
          {
            "name": "タイムパーキング 五毛通４丁目",
            "map": "https://maps.app.goo.gl/xBFM7cV5eQD2njHQ7",
            "mapcode": "12 461 731*05"
          },
          {
            "name": "Akippa｜Oji Koen 4-chome Parking Lot",
            "map": "https://maps.app.goo.gl/z7XboWSjcMbZCmzh6",
            "mapcode": "12 461 670*31"
          }
        ]
      }
    ],
    "stay": {
      "name": "神戶蒙特埃瑪納酒店",
      "note": "三宮站・續住",
      "map": "https://maps.app.goo.gl/RPn1Bx4hcyhxE55j8",
      "mapcode": "12 368 873*55"
    },
    "meals": [
      {
        "type": "晚餐",
        "name": "Kobe Beef Yakiniku Okatora Sannomiya",
        "map": "https://maps.app.goo.gl/LNp8zwHuDqSerzyR8"
      }
    ]
  },
  {
    "date": "10/26",
    "week": "一",
    "region": "有馬溫泉",
    "title": "六甲山景與有馬暖湯",
    "intro": "搭六甲空中纜車、走訪六甲空中庭園，再逛有馬玩具博物館與金之湯；有馬鱒魚池列為選去行程，晚餐在飯店享用。",
    "events": [
      {
        "time": "上午",
        "title": "六甲空中纜車",
        "note": "搭纜車欣賞山景，銜接六甲空中庭園",
        "parking": [
          {
            "name": "六甲空中纜車停車場",
            "map": "https://maps.app.goo.gl/tBQSFtWraPw39viV6",
            "mapcode": "12 734 533*06"
          }
        ]
      },
      {
        "time": "接續",
        "title": "六甲空中庭園",
        "note": "六甲山上散步與賞景",
        "map": "https://maps.app.goo.gl/tkS7EuVjVhkvJEHu7"
      },
      {
        "time": "午後",
        "title": "有馬玩具博物館",
        "note": "參觀玩具展示",
        "map": "https://maps.app.goo.gl/HJE4Cfp1891qkvrv5"
      },
      {
        "time": "接續",
        "title": "金之湯",
        "note": "有馬溫泉泡湯",
        "map": "https://maps.app.goo.gl/rgap49M5jvPYus7v5"
      },
      {
        "time": "選去",
        "title": "有馬鱒魚池",
        "note": "依當日時間與體力決定是否前往",
        "map": "https://maps.app.goo.gl/g6r5Sx5Czwb2M2VUA"
      }
    ],
    "stay": {
      "name": "有馬溫泉 月光園鴻朧館",
      "note": "一泊二食・有馬溫泉",
      "map": "https://maps.app.goo.gl/HMuKFM3h2ksytF189",
      "mapcode": "12 734 866*67"
    },
    "meals": [
      {
        "type": "晚餐",
        "name": "飯店晚餐"
      }
    ]
  },
  {
    "date": "10/27",
    "week": "二",
    "region": "神戶三田・天橋立",
    "title": "Outlet 購物後前往宮津",
    "intro": "在神戶三田暢貨中心購物後北上宮津，為隔日的天橋立行程預留移動時間。",
    "events": [
      {
        "time": "白天",
        "title": "Kobe Sanda Premium Outlets",
        "note": "購物、午餐與退稅；結束後前往宮津住宿",
        "map": "https://maps.app.goo.gl/rx1e5abEGMyk9eZS6",
        "mapcode": "155 068 670*20",
        "floorMap": "https://platinumaps.jp/d/premiumoutlets-kobesanda?culture=en&floor=1F"
      }
    ],
    "stay": {
      "name": "Mercure Kyoto Miyazu Resort & Spa",
      "note": "京都宮津美居溫泉度假酒店",
      "map": "https://maps.app.goo.gl/sYEwxo9ngfEGUXnB7",
      "mapcode": "197 298 043*63"
    },
    "meals": [
      {
        "type": "早餐",
        "name": "飯店早餐"
      }
    ]
  },
  {
    "date": "10/28",
    "week": "三",
    "region": "天橋立・城崎",
    "title": "海之京都與溫泉小鎮",
    "intro": "走訪天橋立展望所、View Land 與遊船，伊根灣遊覽船及舟屋之里公園列為選去；之後前往城崎一之湯與溫泉纜車。",
    "events": [
      {
        "time": "上午",
        "title": "雪舟觀展望所",
        "note": "從高處欣賞天橋立景觀",
        "map": "https://maps.app.goo.gl/osHHvAZKJDh8pbTJA",
        "mapcode": "197 205 301*58"
      },
      {
        "time": "接續",
        "title": "天橋立 View Land",
        "note": "搭纜車欣賞天橋立景觀",
        "parking": [
          {
            "name": "天橋立 View Land 停車",
            "map": "https://maps.app.goo.gl/MkmCFrZqMyf5vrUk8",
            "mapcode": "197 202 313*16"
          }
        ]
      },
      {
        "time": "接續",
        "title": "天橋立遊船",
        "note": "搭船欣賞天橋立沿岸景色",
        "map": "https://maps.app.goo.gl/EMTY6d7zTDA7LCVUA",
        "mapcode": "197 202 377*84"
      },
      {
        "time": "選去",
        "title": "伊根灣遊覽船",
        "note": "依當日時間決定是否前往伊根",
        "map": "https://maps.app.goo.gl/T38PRkYSH9gfuffd7",
        "mapcode": "652 603 078*45"
      },
      {
        "time": "選去",
        "title": "道之驛 舟屋之里公園",
        "note": "選擇伊根行程時，可接續前往舟屋之里公園",
        "map": "https://maps.app.goo.gl/9f21fRDh2jDg3UKW7",
        "mapcode": "652 605 519*06"
      },
      {
        "time": "城崎",
        "title": "一之湯",
        "note": "城崎溫泉泡湯",
        "map": "https://maps.app.goo.gl/LL5umbmTWj2qRSsY6",
        "mapcode": "428 742 674*24"
      },
      {
        "time": "彈性",
        "title": "城崎溫泉纜車",
        "note": "依當日抵達時間安排搭乘",
        "parking": [
          {
            "name": "城崎溫泉纜車停車場",
            "map": "https://maps.app.goo.gl/MoUd67tv65EaqtdA7",
            "mapcode": "428 741 625*62"
          }
        ]
      }
    ],
    "stay": {
      "name": "Rakuten STAY TERRACE Kinosaki Riverside",
      "note": "城崎溫泉・河畔住宿",
      "map": "https://maps.app.goo.gl/FkBXU7Rize1inLtE7",
      "mapcode": "428 621 550*22"
    },
    "meals": [
      {
        "type": "早餐",
        "name": "飯店早餐"
      },
      {
        "type": "點心筆記",
        "name": "名食玉子燒 今中（PDF 列於本日點心欄，前往時段待安排）"
      }
    ]
  },
  {
    "date": "10/29",
    "week": "四",
    "region": "城崎・姬路",
    "title": "玄武洞、白鷺城與書寫山",
    "intro": "離開城崎後先探訪玄武洞，再前往姬路城與書寫山圓教寺，傍晚到 AEON MALL 補給。",
    "events": [
      {
        "time": "上午",
        "title": "玄武洞公園",
        "note": "欣賞玄武岩柱狀節理地景",
        "map": "https://maps.app.goo.gl/M87t7m8ProniQs8ZA",
        "mapcode": "428 621 353*50"
      },
      {
        "time": "接續",
        "title": "姬路城",
        "note": "參觀天守與主要城區",
        "parking": [
          {
            "name": "大手門駐車場",
            "map": "https://maps.app.goo.gl/QZB53SRtM1WApXZz7",
            "mapcode": "24 308 004*56"
          }
        ]
      },
      {
        "time": "午後",
        "title": "書寫山圓教寺",
        "note": "搭纜車前往圓教寺",
        "parking": [
          {
            "name": "書寫山纜車站停車場",
            "map": "https://maps.app.goo.gl/Ehst9jc6ck7L2vZ98",
            "mapcode": "24 455 010*76"
          }
        ]
      },
      {
        "time": "接續",
        "title": "AEON MALL",
        "note": "購物與旅行補給",
        "map": "https://maps.app.goo.gl/FcFsWi5fqCT6sNzD7",
        "mapcode": "24 155 405*61"
      }
    ],
    "stay": {
      "name": "Designer rental villa Lino-Lino Himeji Higashiyama",
      "note": "Vacation STAY 93087v",
      "map": "https://maps.app.goo.gl/86AV4KCHNbapxS2Q8"
    }
  },
  {
    "date": "10/30",
    "week": "五",
    "region": "淡路島・鳴門",
    "title": "沿著海風追漩渦",
    "intro": "從姬路前往淡路島賞花，接著走訪道之驛、鳴門公園、觀光船與大鳴門橋紀念館；另留 A Happy Pancake 餐點筆記。",
    "events": [
      {
        "time": "上午",
        "title": "兵庫縣立公園淡路花之棧敷",
        "note": "欣賞波斯菊、鼠尾草等季節花卉",
        "map": "https://maps.app.goo.gl/bMFf1ctKAMz5tSNk8",
        "mapcode": "339 207 165*63"
      },
      {
        "time": "接續",
        "title": "道の駅うずしお",
        "note": "看海、購買伴手禮",
        "map": "https://maps.app.goo.gl/QhpzHQdcHu1Kw3qP6",
        "mapcode": "406 244 615*00"
      },
      {
        "time": "接續",
        "title": "鳴門公園",
        "note": "眺望大鳴門橋與鳴門海峽",
        "map": "https://maps.app.goo.gl/BGyfhuQ6xrwdRNbQA",
        "mapcode": "406 212 844*53"
      },
      {
        "time": "船班待定",
        "title": "鳴門觀光船",
        "note": "PDF 未指定船班；依預約時間安排",
        "map": "https://maps.app.goo.gl/Qzcb1uuqHMXYJeoSA",
        "mapcode": "406 210 243*42"
      },
      {
        "time": "接續",
        "title": "漩渦之丘 大鳴門橋紀念館",
        "note": "欣賞大鳴門橋景觀",
        "map": "https://maps.app.goo.gl/jCYrs7AwtQdVEU9s5"
      }
    ],
    "stay": {
      "name": "Yumekaiyu Awajishima",
      "note": "淡路島海景溫泉旅館",
      "map": "https://maps.app.goo.gl/coNPbhy1p8wiQRn28",
      "mapcode": "210 318 354*28"
    },
    "meals": [
      {
        "type": "餐點／點心",
        "name": "A Happy Pancake",
        "map": "https://maps.app.goo.gl/GLmyczVRAhVkZDo19",
        "mapcode": "339 044 048*65"
      }
    ]
  },
  {
    "date": "10/31",
    "week": "六",
    "region": "淡路島・舞子",
    "title": "岩戶神社與明石大橋",
    "intro": "從淡路島走訪安乎岩戶神社，午餐後短停淡路島休息站，再前往舞子參加 13:15 的明石大橋體驗。",
    "events": [
      {
        "time": "上午",
        "title": "安乎岩戶神社",
        "note": "參拜淡路島上的岩窟神社",
        "map": "https://maps.app.goo.gl/xDjuKK4EX5SW2i8e9",
        "mapcode": "210 497 830*24"
      },
      {
        "time": "午餐",
        "title": "Kintaro Higashiura 午餐",
        "note": "迴轉壽司；PDF 註記 11:30 開店",
        "map": "https://maps.app.goo.gl/2XnHm4HM16ncyBLb6",
        "mapcode": "339 149 340*80"
      },
      {
        "time": "接續",
        "title": "淡路島休息站（下行）",
        "note": "短停補給並眺望明石海峽大橋",
        "map": "https://maps.app.goo.gl/Zi3iAXuivzxCsr8s7",
        "mapcode": "946 872 552*67"
      },
      {
        "time": "13:15",
        "title": "明石海峽大橋・舞子",
        "note": "PDF 指定時間；提前抵達辦理報到，詳細流程請見上橋體驗頁",
        "parking": [
          {
            "name": "舞子站前停車",
            "mapcode": "31 169 585*66"
          },
          {
            "name": "舞子公園停車",
            "mapcode": "31 169 401*01"
          }
        ]
      }
    ],
    "stay": {
      "name": "Hotel Monterey Kobe",
      "note": "三宮站・旅程最後一晚",
      "map": "https://maps.app.goo.gl/nR166NCXwa8srUXW7",
      "mapcode": "12 368 753*00"
    },
    "meals": [
      {
        "type": "早餐",
        "name": "飯店早餐"
      },
      {
        "type": "午餐",
        "name": "Kintaro Higashiura（迴轉壽司・11:30 開）",
        "map": "https://maps.app.goo.gl/2XnHm4HM16ncyBLb6",
        "mapcode": "339 149 340*80"
      }
    ]
  },
  {
    "date": "11/01",
    "week": "日",
    "region": "神戶・回程",
    "title": "帶著楓色回家",
    "intro": "回程前走訪神戶布引香草園、北野異人館街與北野天滿神社，再到三宮還車，搭乘 19:00 航班返台。",
    "events": [
      {
        "time": "上午",
        "title": "神戶布引香草園",
        "note": "搭纜車與園區散步",
        "parking": [
          {
            "name": "神戶布引香草園停車",
            "map": "https://maps.app.goo.gl/DhcJaLXhaUGZbZdr8",
            "mapcode": "12 428 052*85"
          }
        ]
      },
      {
        "time": "接續",
        "title": "北野異人館街・北野天滿神社",
        "note": "北野街區散步與神社參拜",
        "map": "https://maps.app.goo.gl/VyrfEdQm1NjQ7QZ18"
      },
      {
        "time": "還車",
        "title": "TOYOTA Rent a Car 三宮",
        "note": "依租車預約時間完成還車，之後前往神戶機場",
        "map": "https://maps.app.goo.gl/LM7M631mpoJcxMLp9",
        "mapcode": "12 398 049*82"
      },
      {
        "time": "19:00–21:15",
        "title": "長榮航空返回台北",
        "note": "神戶機場 UKB 第二航廈 → 桃園機場第二航廈；時間依當地時間顯示"
      }
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
