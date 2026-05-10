# 廠語通 FactoryTong

Factory LINE SOP System for Foreign Worker Communication.

這是「廠語通 FactoryTong」的獨立 SaaS MVP 展示版，主打工廠、工地與製造現場的外籍員工 LINE SOP 溝通流程。

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

後台 Demo 網址：

```text
https://fishxit777.github.io/foreign-worker-sop-web/admin.html
```

## 檔案

- `index.html`：廠語通 SaaS 產品首頁
- `app.html`：FactoryTong 工廠 LINE SOP 公告產生器
- `app.js`：加班、請假、工安、機台 SOP、宿舍、LINE 群組公告產生邏輯
- `admin.html`：展示型後台 Demo，使用瀏覽器 localStorage 模擬公告紀錄與導入管線
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

這個網站不是取代萬語通主站，而是作為低門檻工廠產品入口。

廠語通 FactoryTong 負責讓老闆先理解「每天重複溝通可以模板化、系統化、留下 LINE 紀錄」。

萬語通負責後續導入 LINE 群組，產生月費 SaaS 收入。

目前不共用 `11STARS-line-bot` 的 Render 後端，避免影響正式 LINE Bot。之後若要做登入、付款、客戶資料庫、LINE 回覆追蹤，再另外建立獨立 Render 服務。

## 程式功能

- 選擇現場情境
- 填入日期、時間、地點、主管與補充事項
- 產生可貼到 LINE 的中文公告與翻譯指令
- 一鍵複製公告
- 下載 TXT 備份
- 存到後台 Demo
- 後台查看最近公告紀錄、客戶導入管線與模板庫
