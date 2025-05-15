# 记录踩坑记录

## vercel部署相关
部署vitepress项目遇到报错：
```
sh: line 1: /vercel/path0/node_modules/.bin/vitepress: Permission denied
```
```
Error: Command "npm run docs:build" exited with 126
```
删除node_modules文件夹后重新执行```npm install```，问题解决

## github删除仓库文件

github现在可以直接在网页端操作删除文件夹<br><br>
![选中“Delete directory”直接删除文件夹](../images/image.png)

## Tailwind CSS引入vue3
官网已经更新到了v4，但是中文文档还是v3的安装方法
访问英文官网获取最新引入方法：https://tailwindcss.com/docs/installation/using-vite
另外，引入时通常是引入全部样式，包括了默认的"preflight"，如果不想引入"preflight"或者已经有"normalize.css"，可以修改main.css
```css
/* @import "tailwindcss"; */
@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme);

/* 调整这两个导入的顺序可以控制样式优先级 */
@import "./normalize.css" layer(base);
@import "tailwindcss/preflight.css" layer(base);

@import "tailwindcss/utilities.css" layer(utilities);
```
将原来全部导入改为分别导入