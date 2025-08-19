# Bento风格个人主页

这是一个复刻bento.me风格的个人主页，简洁美观，功能完整，支持GitHub Pages部署。

## 功能特点

- 响应式设计，适配各种设备屏幕
- 支持明暗模式切换
- 个人信息展示区
- 社交平台链接
- 功能卡片链接
- 作品展示区
- 平滑动画效果

## 项目结构
bento-clone/
├── index.html           # 主页面
├── css/
│   └── styles.css       # 样式文件
├── js/
│   └── main.js          # 交互功能脚本
├── assets/
│   └── images/          # 图片资源
└── README.md            # 部署说明
## 自定义内容

1. **更换头像**：替换 `assets/images/avatar.jpg` 文件
2. **修改个人信息**：编辑 `index.html` 中的名称和简介
3. **更新链接**：修改各卡片的 `href` 属性为实际链接
4. **更换作品图片**：替换 `assets/images/works/` 目录下的图片
5. **调整颜色**：修改 `tailwind.config` 中的颜色配置

## 部署到GitHub Pages

1. 将项目推送到GitHub仓库
2. 进入仓库设置
3. 在 "Pages" 选项中，选择 `main` 分支作为源
4. 点击 "Save"，几分钟后即可通过 `https://<你的用户名>.github.io/<仓库名>` 访问

## 依赖

- Tailwind CSS v3 (通过CDN引入)
- Font Awesome (通过CDN引入)
- Inter 字体 (通过Google Fonts引入)
