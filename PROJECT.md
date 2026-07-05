# PromptVision Static Site

## Purpose

把 `1.html` 整理为可直接部署到 Vercel 的 GitHub 静态站仓库。

## Entry Points

- Site entry: `index.html`
- Styles: `index.css`
- Interactions: `script.js`
- Deployment config: `vercel.json`

## Release Gate

上站前至少检查：

1. `index.html` 能在本地服务器根路径打开。
2. 搜索框、分类按钮、复制提示词按钮可以正常使用。
3. 桌面和手机宽度下没有明显文字重叠或卡片内容不可见。
4. GitHub 仓库已推送，Vercel 导入仓库后不需要构建命令。

## Notes

页面图片和首屏视频当前使用外部 CDN 链接。后续如果要提高稳定性，可以把核心视觉资产下载到仓库的 `assets/` 目录并改成本地引用。
