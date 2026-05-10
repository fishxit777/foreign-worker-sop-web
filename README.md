# 外籍員工溝通 SOP 包網站

這是「外籍員工溝通 SOP 包」的獨立 landing page。

建議 GitHub repo 名稱：

```text
foreign-worker-sop-web
```

GitHub Pages 預期網址：

```text
https://fishxit777.github.io/foreign-worker-sop-web/
```

SOP 產生器網址：

```text
https://fishxit777.github.io/foreign-worker-sop-web/app.html
```

## 檔案

- `index.html`：一頁式產品網站
- `app.html`：外籍員工 LINE 公告產生器
- `app.js`：加班、請假、工安、機台 SOP、宿舍、LINE 群組公告產生邏輯
- 工廠主視覺：引用萬語通主站公開圖片
- `.nojekyll`：讓 GitHub Pages 直接使用靜態檔

## 上架方式

1. 在 GitHub 建立新 repo：`foreign-worker-sop-web`
2. 上傳這個資料夾內所有檔案
3. 到 Settings > Pages
4. Source 選 `Deploy from a branch`
5. Branch 選 `main` / root
6. 等待 GitHub Pages 產生網址

## 定位

這個網站不是取代萬語通主站，而是作為低門檻產品入口。

SOP 包負責讓老闆先理解「每天重複溝通可以模板化」。

萬語通負責後續導入 LINE 群組，產生月費 SaaS 收入。

## 程式功能

- 選擇現場情境
- 填入日期、時間、地點、主管與補充事項
- 產生可貼到 LINE 的中文公告與翻譯指令
- 一鍵複製公告
- 下載 TXT 備份
