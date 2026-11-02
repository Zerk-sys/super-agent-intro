# DeepSeek dsh-superagent 介绍页

介绍 DeepSeek Harness 团队 2026 年 10 月 31 日发布的 dsh-superagent 研究原型：
面向单个 GitHub 仓库的主动式 Coding Agent，Router 与 Worker 架构。

本页不是 DeepSeek 官方页面。关键事实以官方仓库为准：
https://github.com/deepseek-ai/dsh-superagent-prototype

## 本地预览

直接用浏览器打开 `public/index.html`。

## 部署

使用 Cloudflare `cf` CLI，从本项目根目录运行：

```bash
cf deploy
```

部署后，Cloudflare 会返回 workers.dev 验收链接。

## 验收链接

https://super-agent-intro.robintoken177.workers.dev

Worker 名称：super-agent-intro，版本 ID：bba5af41-f666-445c-af1f-a2abad28d139（2026-11-02 部署）。
