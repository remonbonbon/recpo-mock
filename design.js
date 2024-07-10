const { createApp } = Vue;

createApp({
  data() {
    return {
      articles: _(ARTICLES).shuffle().take(2).value(),
    };
  },
}).mount("#app");
