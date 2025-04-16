import { defineTheme } from 'vitepress'
import { h } from 'vue'
import Layout from './Layout.vue'  // 新增导入
export default defineTheme({
  Layout: () => h(Layout),
})