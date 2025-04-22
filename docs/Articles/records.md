## 记录踩坑记录

### vercel部署相关
部署vitepress项目遇到报错：
```
sh: line 1: /vercel/path0/node_modules/.bin/vitepress: Permission denied
```
```
Error: Command "npm run docs:build" exited with 126
```
删除node_modules文件夹后重新执行```npm install```，问题解决