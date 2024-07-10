const { createApp } = Vue;

createApp({
  data() {
    return {
      categories: _(ARTICLES)
        .map((a) => a.category)
        .uniq()
        .value(),
      playersList: _(ARTICLES)
        .map((a) => a.numOfPlayers)
        .uniq()
        .sortBy((p) => parseInt(p, 10) || 0)
        .value(),
      howLongList: _(ARTICLES)
        .map((a) => a.howLong)
        .uniq()
        .value(),
      selectedCategories: [],
      selectedPlayers: [],
      selectedHowLong: [],
      sortOption: "latest",
      searchWord: "",
    };
  },
  computed: {
    articles() {
      let tmp = ARTICLES;
      if (this.searchWord) {
        tmp = tmp.filter(
          (a) =>
            a.title?.includes(this.searchWord) ||
            a.description?.includes(this.searchWord) ||
            a.detail?.includes(this.searchWord)
        );
      }
      if (0 < this.selectedCategories.length) {
        tmp = tmp.filter((a) => this.selectedCategories.includes(a.category));
      }
      if (0 < this.selectedPlayers.length) {
        tmp = tmp.filter((a) => this.selectedPlayers.includes(a.numOfPlayers));
      }
      if (0 < this.selectedHowLong.length) {
        tmp = tmp.filter((a) => this.selectedHowLong.includes(a.howLong));
      }
      if (this.sortOption === "latest") {
        tmp = _.orderBy(tmp, "publishedAt", "desc");
      }
      if (this.sortOption === "like") {
        tmp = _.orderBy(tmp, "likeCount", "desc");
      }
      if (this.sortOption === "view") {
        tmp = _.orderBy(tmp, "viewCount", "desc");
      }
      if (this.sortOption === "random") {
        tmp = _.shuffle(tmp);
      }
      return tmp;
    },
  },
}).mount("#app");
