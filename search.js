const { createApp } = Vue;

createApp({
  data() {
    return {
      tagGroups: TAG_GROUPS,
      tagsByGroup: TAGS_BY_GROUP,
      selectedTags: [],
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
      if (0 < this.selectedTags.length) {
        const selectedTagsByGroup = _.groupBy(this.selectedTags, "group");
        // 同タググループ内はOR、異なるタググループ間はAND条件でフィルタリング
        for (const sTags of Object.values(selectedTagsByGroup)) {
          tmp = tmp.filter((a) =>
            a.tags.some((t1) => sTags.some((t2) => t1.id === t2.id))
          );
        }
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
  methods: {
    resetSearch() {
      this.selectedTags = [];
      this.sortOption = "latest";
      this.searchWord = "";
    },
  },
}).mount("#app");
