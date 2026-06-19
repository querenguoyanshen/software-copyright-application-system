# 意图驱动网络策略管理系统（第一阶段简化版）

基于 Vue 3 + Vite + Element Plus + Node.js + Express 的可运行演示系统。系统不依赖真实 UKey、密码设备或网络设备，所有设备、态势、策略、日志数据均为本地模拟数据，后端使用 JSON 文件持久化，便于本地演示和截图。

## 功能模块

- 登录与角色菜单：管理员、操作员、审计员三类账号，登录后按角色显示菜单。
- 首页：展示设备名称、生产厂商、软件版本、产品型号、序列号，以及区域、组织、应用、策略、日志、告警数量。
- 态势感知：展示设备运行状态、灾备统计、应用概况、接口访问、平台运行状态、授时状态告警。
- 区域管理：区域查询、新建、修改、删除。
- 组织管理：组织查询、新建、修改、删除，新建时选择所属区域。
- 应用管理：应用查询、新建、修改、删除，包含应用名称、区域、组织、权限、设备 IP、状态、创建时间。
- 意图策略管理：创建业务意图，自动生成策略规则，支持策略预览、启用、停用、删除，以及同源同目标同协议同端口允许/拒绝冲突检测。
- 日志记录：登录、新增、修改、删除、生成策略等操作自动写入日志。
- 日志审计：仅审计员可见，支持日志查询、审计、删除、导出 CSV，使用模拟 HMAC 判断日志完整性。

## 默认账号

| 角色 | 用户名 | 密码 |
| --- | --- | --- |
| 管理员 | admin | Admin@123456 |
| 操作员 | operator | Operator@123456 |
| 审计员 | auditor | Auditor@123456 |

## 安装方式

```bash
npm run install:all
```

也可以分别安装：

```bash
npm install
npm install --prefix server
npm install --prefix client
```

## 运行方式

同时启动前端和后端：

```bash
npm run dev
```

分别启动：

```bash
npm run dev:server
npm run dev:client
```

默认地址：

- 前端：http://localhost:5173
- 后端：http://localhost:3001/api

## 目录结构

```text
.
├── client/              # Vue 3 + Vite + Element Plus 前端
│   ├── src/api/         # API 封装
│   ├── src/router/      # 前端路由和角色守卫
│   ├── src/views/       # 中文业务页面
│   └── src/AppLayout.vue
├── server/              # Node.js + Express 后端
│   ├── data/db.json     # 首次运行自动生成的本地 JSON 数据库
│   └── index.js         # API、模拟数据、日志和 HMAC
└── package.json         # 根目录快捷脚本
```
