# 外籍員工溝通 SOP 系統

這是「外籍員工溝通 SOP」的獨立 SaaS MVP 展示版。

## 網址

- 產品首頁：https://fishxit777.github.io/foreign-worker-sop-web/
- SOP 產生器：https://fishxit777.github.io/foreign-worker-sop-web/app.html
- 後台 Demo：https://fishxit777.github.io/foreign-worker-sop-web/admin.html

## 目前完成

- `index.html`：SaaS 產品首頁，說明定位、完成項目、未完成缺口與導入策略。
- `app.html`：外籍員工 LINE 公告產生器。
- `app.js`：加班、請假、工安、機台 SOP、宿舍、LINE 群組公告產生邏輯，並可存到後台 Demo。
- `admin.html`：展示型後台 Demo，使用瀏覽器 localStorage 模擬公告紀錄、客戶導入管線與模板庫。
- `.nojekyll`：讓 GitHub Pages 直接使用靜態檔。
- `robots.txt`、`sitemap.xml`：基本 SEO 檔案。

## 與萬語通的關係

這個專案不是取代萬語通主站，而是把萬語通拆出一條更容易賣給工廠老闆的 SaaS 產品線。

- 萬語通：處理 LINE 群組翻譯、OCR、語音、AI 摘要。
- SOP 系統：先把主管每天重複交代的內容整理成標準公告與流程。
- 銷售策略：先用免費工具與模板吸引用戶，再導入萬語通月費方案。

## 部署策略

目前不共用 `11STARS-line-bot` 的 Render 後端，避免影響正式 LINE Bot。

現在這個 repo 用 GitHub Pages 就夠：

```text
foreign-worker-sop-web
```

之後如果要做真正 SaaS 後端，再另外建立獨立 Render 服務，例如：

```text
foreign-worker-sop-app
```

那時再接登入、客戶資料庫、付款、方案權限、LINE 回覆追蹤與報表。

## 程式功能

- 選擇現場情境
- 填入日期、時間、地點、主管與補充事項
- 產生可貼到 LINE 的中文公告與翻譯指令
- 一鍵複製公告
- 下載 TXT 備份
- 存到後台 Demo
- 後台查看最近公告紀錄、客戶導入管線與模板庫
