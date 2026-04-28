# 甜蜜女友３ — アマカノ３ Fan Site

> 在温泉升腾的小镇，与五位少女共赴一场夏日奇遇

基于 **あざらしそふと** 制作的恋爱冒险游戏《アマカノ３》构建的粉丝应援页面。原画由 **ピロ水** 大师执笔。

## 预览

纯静态页面，直接在浏览器打开 `index.html` 即可预览。

## 项目结构

```
amakano3/
├── index.html              # 主页面
├── style.css               # 样式表（浅色樱花主题）
├── script.js               # 交互脚本
├── video/
│   └── promo.mp4           # 官方宣传视频
└── web_images/
    ├── hero-bg-new.png     # Hero 主视觉
    ├── 次页.png             # 剧情插图
    ├── bg/                 # 各区块背景
    │   ├── bg-01.png
    │   ├── bg-02.png
    │   └── bg-03.png
    ├── chars/              # 女主角图片
    │   ├── touka/          # 御所院 冬樺
    │   ├── sayumi/         # 鴻 小幸
    │   ├── scarlet/        # 斯嘉丽·斑鸠·维斯特利亚
    │   ├── kanon/          # 柳木 叶梦
    │   └── shion/          # 柳木 诗梦
    └── gallery/            # 画廊图片（13张）
```

## 技术栈

- 纯 HTML / CSS / JavaScript，零依赖
- CSS 自定义属性（变量）管理配色
- Canvas 樱花粒子动画
- Intersection Observer 滚动揭示
- 响应式布局（桌面 / 平板 / 手机）

## 页面区块

| 区块 | 说明 |
|------|------|
| Hero | 全屏主视觉 + 视差缩放 |
| 宣传视频 | 官方 PV，自动播放，带控制条 |
| 剧情概要 | 故事背景介绍 |
| 五位女主角 | 角色卡片，悬停 3D 倾斜 |
| 视觉画廊 | 随机选取 CG，灯箱大图预览 |
| 作品信息 | 游戏基础资讯 |

## 版权

- 游戏版权归属 **あざらしそふと / Azarashi Soft**
- 原画：**ピロ水**
- 本页面为粉丝自制，非官方页面
- 图片与视频版权归原著作方所有

## 部署

静态文件，可部署到任意静态托管服务：

```bash
# GitHub Pages
git init && git add -A && git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
# 在仓库 Settings → Pages 中启用
```
