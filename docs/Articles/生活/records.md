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