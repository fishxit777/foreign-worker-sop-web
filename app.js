const scenarioData = {
  overtime: {
    label: "加班通知",
    helper: "適合臨時加班、週末加班、趕出貨前的 LINE 公告。",
    fields: {
      date: "加班日期",
      time: "加班時間",
      place: "集合地點",
      owner: "負責主管",
      note: "補充事項"
    },
    build: ({ company, date, time, place, owner, note, language }) => [
      `【${company}｜加班通知】`,
      "",
      `日期：${date}`,
      `時間：${time}`,
      `集合地點：${place}`,
      `負責主管：${owner}`,
      "",
      "請可以配合加班的同仁，在 LINE 群組回覆「收到」。",
      "如果不能加班，請在今天下班前用文字回覆原因，方便主管安排人力。",
      note ? `補充：${note}` : "",
      "",
      `請用廠語通 / FactoryTong 翻譯成${language}，語氣清楚、禮貌、不要太像命令。`
    ]
  },
  leave: {
    label: "請假規則",
    helper: "適合新人報到、請假混亂、臨時病假太常口頭講的場景。",
    fields: {
      date: "生效日期",
      time: "最晚告知時間",
      place: "請假回報方式",
      owner: "審核主管",
      note: "補充事項"
    },
    build: ({ company, date, time, place, owner, note, language }) => [
      `【${company}｜請假規則】`,
      "",
      `生效日期：${date}`,
      `請假最晚告知時間：${time}`,
      `回報方式：${place}`,
      `審核主管：${owner}`,
      "",
      "請假請用 LINE 留文字紀錄，不要只用口頭告知。",
      "如果是臨時病假，請先告知主管，並補上原因與預計回來上班的時間。",
      "沒有收到主管確認前，請不要自行缺勤。",
      note ? `補充：${note}` : "",
      "",
      `請用廠語通 / FactoryTong 翻譯成${language}，讓外籍員工可以清楚理解請假流程。`
    ]
  },
  safety: {
    label: "工安提醒",
    helper: "適合每天開工前提醒，或針對安全帽、手套、護目鏡重複宣導。",
    fields: {
      date: "提醒日期",
      time: "適用時段",
      place: "工作區域",
      owner: "負責主管",
      note: "安全重點"
    },
    build: ({ company, date, time, place, owner, note, language }) => [
      `【${company}｜工安提醒】`,
      "",
      `日期：${date}`,
      `時段：${time}`,
      `工作區域：${place}`,
      `負責主管：${owner}`,
      "",
      "進入工作區前，請先確認安全帽、手套、護目鏡與必要防護用品。",
      "機台運轉中，不要把手伸進危險區域，也不要自行拆除安全裝置。",
      "如果看到異常聲音、冒煙、漏油或設備故障，請立刻停止操作並通知主管。",
      note ? `今日重點：${note}` : "",
      "",
      `請用廠語通 / FactoryTong 翻譯成${language}，語氣要像現場主管提醒，不要像法規文件。`
    ]
  },
  machine: {
    label: "機台 SOP",
    helper: "適合新機台、換線、交接班，讓操作步驟固定下來。",
    fields: {
      date: "SOP 日期",
      time: "操作時段",
      place: "機台名稱/位置",
      owner: "負責主管",
      note: "操作重點"
    },
    build: ({ company, date, time, place, owner, note, language }) => [
      `【${company}｜機台 SOP 交辦】`,
      "",
      `日期：${date}`,
      `操作時段：${time}`,
      `機台/位置：${place}`,
      `負責主管：${owner}`,
      "",
      "操作前：請先確認材料、治具、安全開關與周邊環境。",
      "操作中：請依照標準步驟，不要自行調整參數或跳過檢查。",
      "操作後：請回報數量、異常狀況，並整理工作區。",
      note ? `本次操作重點：${note}` : "",
      "",
      `請用廠語通 / FactoryTong 翻譯成${language}，保留 SOP 條列格式，讓現場容易照做。`
    ]
  },
  dorm: {
    label: "宿舍規定",
    helper: "適合處理宿舍吵鬧、清潔、訪客、設備損壞等生活管理。",
    fields: {
      date: "生效日期",
      time: "安靜時間",
      place: "宿舍/房號",
      owner: "聯絡窗口",
      note: "補充規定"
    },
    build: ({ company, date, time, place, owner, note, language }) => [
      `【${company}｜宿舍規定】`,
      "",
      `生效日期：${date}`,
      `安靜時間：${time}`,
      `宿舍/房號：${place}`,
      `聯絡窗口：${owner}`,
      "",
      "請保持公共區域乾淨，垃圾依照規定分類與丟棄。",
      "晚上安靜時間請降低音量，不要影響其他同仁休息。",
      "如果設備故障、漏水或有安全問題，請拍照並在 LINE 群組回報。",
      note ? `補充規定：${note}` : "",
      "",
      `請用廠語通 / FactoryTong 翻譯成${language}，語氣清楚但不要讓員工覺得被責罵。`
    ]
  },
  line: {
    label: "LINE 群組規則",
    helper: "適合建立群組第一天，讓公告、回覆、交接都留下紀錄。",
    fields: {
      date: "開始日期",
      time: "回覆期限",
      place: "群組名稱",
      owner: "管理者",
      note: "群組規則"
    },
    build: ({ company, date, time, place, owner, note, language }) => [
      `【${company}｜LINE 群組規則】`,
      "",
      `開始日期：${date}`,
      `回覆期限：${time}`,
      `群組名稱：${place}`,
      `管理者：${owner}`,
      "",
      "公司公告會放在這個 LINE 群組，請大家每天確認訊息。",
      "看完重要公告，請回覆「收到」，讓主管知道你已經了解。",
      "如果看不懂中文，請直接在群組提問，不要自己猜。",
      note ? `群組規則：${note}` : "",
      "",
      `請用廠語通 / FactoryTong 翻譯成${language}，保留 LINE 群組公告的口語感。`
    ]
  }
};

const fieldIds = ["date", "time", "place", "owner", "note"];
const storageKey = "factorytong-sop-records";

function $(selector) {
  return document.querySelector(selector);
}

function getFormValues() {
  return {
    company: $("#company").value.trim() || "公司",
    language: $("#language").value,
    date: $("#date").value.trim() || "請填日期",
    time: $("#time").value.trim() || "請填時間",
    place: $("#place").value.trim() || "請填地點",
    owner: $("#owner").value.trim() || "請填主管",
    note: $("#note").value.trim()
  };
}

function setScenario(scenarioKey) {
  const scenario = scenarioData[scenarioKey] || scenarioData.overtime;
  document.body.dataset.scenario = scenarioKey;

  document.querySelectorAll("[data-scenario]").forEach((button) => {
    button.classList.toggle("active", button.dataset.scenario === scenarioKey);
  });

  $("#scenarioTitle").textContent = scenario.label;
  $("#scenarioHelper").textContent = scenario.helper;

  fieldIds.forEach((field) => {
    const label = document.querySelector(`[data-label-for="${field}"]`);
    if (label) label.textContent = scenario.fields[field];
  });

  generateNotice();
}

function generateNotice() {
  const scenarioKey = document.body.dataset.scenario || "overtime";
  const scenario = scenarioData[scenarioKey] || scenarioData.overtime;
  const lines = scenario.build(getFormValues()).filter(Boolean);
  $("#output").value = lines.join("\n");
  $("#characterCount").textContent = `${$("#output").value.length} 字`;
}

function readRecords() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function writeRecords(records) {
  localStorage.setItem(storageKey, JSON.stringify(records.slice(0, 50)));
}

function saveOutput() {
  const scenarioKey = document.body.dataset.scenario || "overtime";
  const scenario = scenarioData[scenarioKey] || scenarioData.overtime;
  const values = getFormValues();
  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    scenarioKey,
    scenarioLabel: scenario.label,
    company: values.company,
    language: values.language,
    owner: values.owner,
    place: values.place,
    content: $("#output").value
  };

  writeRecords([record, ...readRecords()]);
  $("#copyStatus").textContent = "已存到後台 Demo，可到管理看板查看。";
  window.setTimeout(() => {
    $("#copyStatus").textContent = "";
  }, 2800);
}

async function copyOutput() {
  const output = $("#output");
  output.select();
  output.setSelectionRange(0, output.value.length);

  try {
    await navigator.clipboard.writeText(output.value);
  } catch {
    document.execCommand("copy");
  }

  $("#copyStatus").textContent = "已複製，可以直接貼到 LINE。";
  window.setTimeout(() => {
    $("#copyStatus").textContent = "";
  }, 2400);
}

function downloadOutput() {
  const content = $("#output").value;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const today = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `factorytong-sop-${today}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function bindGenerator() {
  document.querySelectorAll("[data-scenario]").forEach((button) => {
    button.addEventListener("click", () => setScenario(button.dataset.scenario));
  });

  ["company", "language", ...fieldIds].forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("input", generateNotice);
    input.addEventListener("change", generateNotice);
  });

  $("#copyButton").addEventListener("click", copyOutput);
  $("#saveButton").addEventListener("click", saveOutput);
  $("#downloadButton").addEventListener("click", downloadOutput);
  $("#resetButton").addEventListener("click", () => {
    $("#date").value = "";
    $("#time").value = "";
    $("#place").value = "";
    $("#owner").value = "";
    $("#note").value = "";
    generateNotice();
  });

  setScenario("overtime");
}

document.addEventListener("DOMContentLoaded", bindGenerator);
