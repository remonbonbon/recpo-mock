const { createApp } = Vue;

createApp({
  data() {
    return {
      articles: _(ARTICLES).shuffle().take(10).value(),
    };
  },
}).mount("#app");
