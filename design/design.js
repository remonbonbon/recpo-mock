const { createApp } = Vue;

createApp({
  data() {
    return {
      articles: _(ARTICLES).shuffle().take(4).value(),
    };
  },
}).mount("#app");
