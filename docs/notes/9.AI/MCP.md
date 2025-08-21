---
title: MCP
createTime: 2025/08/21 12:49:13
permalink: /ai/mcp/706lbgrz/
---

> MCP（Model Context Protocol，模型上下文协议） ，2024 年 11 月底，由 Claude(Anthropic) 推出的一种开放标准，旨在统一大模型与外部数据源和工具之间的通信协议，AI 应用层的开发算是进入了新的时代。

> MCP 的主要目的在于解决当前 AI 模型因数据孤岛限制而无法充分发挥潜力的难题，MCP 使得 AI 应用能够安全地访问和操作本地及远程数据，为 AI 应用提供了连接万物的接口。

> - MCP 介绍 [https://guangzhengli.com/blog/zh/model-context-protocol](https://guangzhengli.com/blog/zh/model-context-protocol)

## MCP 官方集成教学

- [Git](https://github.com/modelcontextprotocol/servers/blob/main/src/git) - Git 读取、操作、搜索。
- [GitHub](https://github.com/modelcontextprotocol/servers/blob/main/src/github) - Repo 管理、文件操作和 GitHub API 集成。
- [Google Maps](https://github.com/modelcontextprotocol/servers/blob/main/src/google-maps) - 集成 Google Map 获取位置信息。
- [PostgreSQL](https://github.com/modelcontextprotocol/servers/blob/main/src/postgres) - 只读数据库查询。
- [Slack](https://github.com/modelcontextprotocol/servers/blob/main/src/slack) - Slack 消息发送和查询。

## 第三方平台官方支持 MCP 的例子

- [Grafana](https://github.com/grafana/mcp-grafana) - 在 Grafana 中搜索查询数据。
- [JetBrains](https://github.com/JetBrains/mcp-jetbrains) – JetBrains IDEs。
- [Stripe](https://github.com/stripe/agent-toolkit) - 与 Stripe API 交互。
