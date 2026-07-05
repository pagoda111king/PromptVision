# PromptVision

PromptVision 是一个零构建的静态落地页，用来展示并复制 AI 绘画提示词。

## 文件结构

- `index.html`：Vercel 默认入口页面
- `index.css`：页面样式
- `script.js`：搜索、分类筛选、复制提示词交互
- `vercel.json`：Vercel 静态站基础配置
- `PROJECT.md`：项目索引和维护说明

## 本地预览

```bash
python3 -m http.server 4173
```

打开 `http://127.0.0.1:4173`。

## Vercel 部署

在 Vercel 新建项目并导入这个 GitHub 仓库：

- Framework Preset：Other
- Build Command：留空
- Output Directory：留空或 `.`
- Install Command：留空

这个站点不需要 Node 构建，Vercel 会直接发布仓库根目录里的静态文件。
