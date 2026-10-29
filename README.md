# Alibarbar 本地商店预览与运营后台

抓取日期：2026-10-23。来源：https://www.ailibarbar.com/

这个目录保存了网站公开返回的 3 个 HTML 页面、94 个 JavaScript 文件、1 个 CSS 文件，以及这些页面和脚本引用的 90 个图片资源。`public/` 是未经改写的响应正文；`readable-assets/` 是相同 JS/CSS 的格式化副本，便于阅读。新建的 `admin-app/` 和 `backend.js` 是独立的本地实现，不是原站后台源码。

GitHub 仓库不包含本地运营数据、管理密钥、原始分析证据文件和重复的前端 ZIP 快照。克隆后首次启动会在本机生成新的密钥与数据库。

## 在本地运行

需要 Node.js 24 或更新版本。首次运行：

```bash
npm install
npm run build:admin
npm start
```

商店预览：http://127.0.0.1:4173/ ；后台：http://127.0.0.1:4173/orders2026 。旧后台路径 `/orders2589` 会跳转到新后台的订单页。可以用 `PORT=4180 npm start` 换端口。后台首次启动会在 `data/admin-key` 生成随机密钥；运行 `npm run admin:key` 查看并用于登录。

本地 SQLite 数据库存放在 `data/operations.sqlite`，与原站无连接。后台支持概览、订单录入与付款/发货状态、物流、商品 CRUD、客户、结账线索、评论审核、优惠码、邮件草稿、知识库和操作记录。原商店快照的结账、订单、客户注册和评论 API 也接入了本地服务。外部字体、社交链接和其他外站资源仍依赖网络。

**范围说明：**商品页面和购物车是从公开发布文件保存的静态前端，后台商品修改不会自动改写这些已发布的页面或定价。付款仍是原页面展示的银行转账流程，本地系统不会处理真实转账。邮件服务和找回密码邮件尚无凭据，后台仅保存草稿，不会向客户发信。订单数据从空库开始，原站真实订单不会自动出现。请只在本地 `127.0.0.1` 使用；若将来要上线，需要先接入正式的商品数据源、邮件服务和安全审查。

开发与验证：`npm run build:admin` 构建 React + TypeScript 后台，`npm test` 验证本地订单、商品、优惠码和数据持久化。可以设置 `AILIBARBAR_DATA_DIR` 指定另一个数据目录。

## 从哪里开始

- 首页 HTML：`public/index.html`
- 主入口：`readable-assets/index-Bwn3vGAd.js`
- 指南页：`public/guides/index.html`、`readable-assets/GuidesIndexPage-BwAbP6AT.js`
- Ingot 9000 页面：`public/ingot-9000/index.html`、`readable-assets/Ingot9000Page-o_3ymPIb.js`
- 结账与订单前端：`readable-assets/CheckoutPage-Bfv8WpO9.js`、`readable-assets/orders-api-BZUM9ZAd.js`
- 所有文件的原始地址、大小和 SHA-256：`manifest.json`
- 图片资源清单：`media-manifest.json`
- REA 浏览器抓取和本地 JavaScript 分析结果：本机的 `rea-evidence.json`（未入库）
- 本地首页预览：`local-preview.png`
- 新后台：`admin-app/src/main.tsx`、`admin-app/src/styles.css`
- 后台 API 与 SQLite：`backend.js`
- 后台构建输出：`admin-dist/`

## 恢复范围

REA 在首页观察到 17 个加载的脚本。保存的 94 个 JavaScript 文件全部可解析，且保存文件中引用的 95 个带构建哈希的 JS/CSS 资源均已找到。本地 REA 分析的 Evidence ID 为 `ev_40753c233da3d3395ba767dfde4a43d2435eaa190f613ef58f7fba5f884e0c7b`；首页脚本捕获的 Evidence ID 为 `ev_6a26ea4f5d963c86d37806ef8c5d376eaf5d617b4c3d44358a80c2ce9f1287a4`。REA 的语义关系图报告部分覆盖，不能把未识别的调用理解为不存在。

发布脚本未声明 source map，主入口的 `.js.map` 地址返回 404。因此 `readable-assets/` 是**格式化后的发布代码**，不是原始 React/TypeScript 源文件。这个快照不包含服务器端源码、构建配置、数据库或完整图片素材，也不能直接当作原项目部署。

`download_public_assets.py` 可重新抓取同样范围的公开 HTML 与 JS/CSS；`download_media.py` 可抓取页面和脚本引用的同源图片。它们不调用业务 API。
