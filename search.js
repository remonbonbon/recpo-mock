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
        const words = this.searchWord.trim().split(/\s/);
        for (const w of words) {
          tmp = tmp.filter(
            (a) =>
              a.title?.includes(w) ||
              a.description?.includes(w) ||
              a.detail?.includes(w) ||
              a.tags.some((tag) => (tag.group + ":" + tag.name).includes(w))
          );
        }
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
    toggleSearchTag(tag) {
      // すでにある場合、削除
      const removedTags = _.remove(this.selectedTags, (t) => t.id === tag.id);
      if (0 === removedTags.length) {
        // 無かった場合、追加
        this.selectedTags.push(tag);
      }
    },
  },
}).mount("#app");
