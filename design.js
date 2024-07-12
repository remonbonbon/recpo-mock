const { createApp } = Vue;

createApp({
  data() {
    return {
      articles: _(ARTICLES).shuffle().take(4).value(),
    };
  },
  methods: {
    toggleSidebar(selector) {
      for (const elem of document.querySelectorAll(selector)) {
        elem?.classList?.toggle("open");
      }
    },
  },
}).mount("#app");
