<!-- Layout.vue -->
<template>
  <DefaultTheme.Layout>
    <h2>test</h2>
    <template #doc-after>
      <div style="margin-top: 24px">
        <giscus src="https://giscus.app/client.js"
            data-repo="UserIDXiaoYe/MyViteBlog"
            data-repo-id="R_kgDOOYqXBA"
            data-category="General"
            data-category-id="DIC_kwDOOYqXBM4CpUAn"
            data-mapping="url"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme="preferred_color_scheme"
            data-lang="zh-CN"
            crossorigin="anonymous"
            async>
        </giscus>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<script lang="ts" setup>
import Giscus from "@giscus/vue";
import DefaultTheme from "vitepress/theme";
// import NotFound from "./NotFound.vue";
import { watch } from "vue";
import { inBrowser, useData } from "vitepress";

const { isDark, page } = useData();

const { Layout } = DefaultTheme;

watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe");

  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? "dark" : "light" } } },
    "https://giscus.app"
  );
});
</script>