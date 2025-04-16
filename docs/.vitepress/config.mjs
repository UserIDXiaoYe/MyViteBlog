import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XIAOYE-Blog",
  description: "学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    nav:nav,
    sidebar: sidebar,
    head: [
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ],   
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present XIAOYE'
    },
    socialLinks: [
      { icon: 'twitter', link:'https://x.com/XIAOYE_42'},
      { icon: 'github', link: 'https://github.com/UserIDXiaoYe' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/424514787?spm_id_from=333.1007.0.0' },
    ],
    // 显示文章更新时间
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      },
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter :{prev:'上一篇',next:'下一篇'},
    outline:{
      label:'页面导航',
      level: 'deep',
    },
    search: {
      provider: 'local'
    }
  },
  lastUpdated: true,
})

