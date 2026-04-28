# 🌸 甜蜜女友３ — アマカノ３ Fan Site

> 在温泉升腾的小镇，与五位少女共赴一场夏日奇遇 · 粉丝应援页面

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/zhouG-code/amakano3?style=flat-square)](https://github.com/zhouG-code/amakano3/releases)
[![GitHub License](https://img.shields.io/github/license/zhouG-code/amakano3?style=flat-square)](LICENSE)
[![Made with Love](https://img.shields.io/badge/made%20with-%E2%9D%A4%EF%B8%8F%20by%20Fans-ff69b4.svg?style=flat-square)](#)

基于 **あざらしそふと** 制作的恋爱冒险游戏《アマカノ３》构建的粉丝应援页面。  
原画由 **ピロ水** 大师执笔，使用纯前端技术还原游戏柔美风格。

---

## ✨ 页面亮点

| 区块 | 说明 |
|------|------|
| **Hero 主视觉** | 全屏沉浸式大图，视差缩放与动态渐变文字 |
| **飘落樱花** | Canvas 绘制的 80 瓣樱花粒子动画，随窗口自适应 |
| **官方 PV** | 内嵌哔哩哔哩播放器，静音自动播放，带控制条 |
| **剧情概要** | 故事背景与温泉小镇世界观展示 |
| **五位女主角** | 角色卡片，悬停 3D 倾斜效果，独立微交互 |
| **视觉画廊** | 随机选取 18 张 CG，灯箱大图预览 |
| **作品信息** | 游戏基础资讯卡片 |
| **响应式设计** | 完美适配桌面、平板、手机 |

---

## 🎨 设计风格

- 以 **浅色／樱花粉金** 为主题色，还原原作清新治愈氛围
- 自定义 CSS 变量全局管理配色，维护简单
- 滚动揭示动画 + 导航栏智能变色
- 零依赖，纯 HTML / CSS / JavaScript 实现

---

## 📁 项目结构

```
amakano3/
├── index.html              # 主页面
├── style.css               # 样式表（浅色樱花主题）
├── script.js               # 交互脚本
├── video/
│   └── promo.mp4           # 官方宣传视频（不上传 Git，建议外链）
├── web_images/
│   ├── hero-bg-new.png     # Hero 主视觉
│   ├── 次页.png             # 剧情插图
│   ├── bg/                 # 各区块背景纹理
│   ├── chars/              # 角色图片（按角色分文件夹）
│   └── gallery/            # 画廊图片
└── README.md
```

---

## 🚀 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/zhouG-code/amakano3.git
   cd amakano3
   ```

2. **直接打开 `index.html`**  
   无需构建工具，浏览器直接运行即可预览。

3. **（可选）本地服务器预览**  
   如果遇到跨域限制，可使用 Python 快速启动：
   ```bash
   python3 -m http.server 8000
   ```
   然后访问 `http://localhost:8000`

---

## 🌐 部署

项目为纯静态文件，可部署到任意静态托管服务。

### GitHub Pages（推荐）

1. 将代码推送到 GitHub 仓库的 `main` 分支
2. 进入仓库 `Settings` → `Pages`
3. 选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`
4. 保存后稍等片刻，访问 `https://your-username.github.io/amakano3/`

### 其他平台
- **Vercel / Netlify**：导入 Git 仓库，自动构建部署
- **任意静态服务器**：将整个目录上传至 Nginx/Apache 根目录即可

---

## 🎬 视频处理

由于 GitHub 限制单文件 100MB，`promo.mp4` 采用 **哔哩哔哩外链嵌入**（参照 `index.html` 中 `<iframe>` 部分）。  
如需使用本地视频，请自行将文件放入 `video/` 目录，并修改 `<video>` 标签的 `src` 属性。

---

## 🛠️ 技术栈

- **HTML5** 语义化结构
- **CSS3** 变量、动画、Flex/Grid 布局
- **原生 JavaScript**（Canvas、Intersection Observer、事件处理）
- **Google Fonts**（Noto Sans SC / Noto Serif SC）

---

## 📝 维护与定制

- 角色图片路径在 `index.html` 中修改，替换为你自己的资源。
- 全局配色在 `style.css` 的 `:root` 变量中统一调整。
- 画廊图片列表在 `script.js` 的 `knownFiles` 数组中维护，支持 `.png` / `.jpg`。
- 修改后推送到 GitHub，网站自动更新。

---

## 📄 版权声明

- 游戏版权归属 **あざらしそふと / Azarashi Soft**
- 原画：**ピロ水**
- 本页面为粉丝自制，**非官方页面**
- 所有图片、视频及角色素材版权归原著作方所有

---

> 如果喜欢这个项目，请给个 ⭐ Star 支持一下～  
> 欢迎 Fork 并制作你自己的 Galgame 粉丝站！✨
```