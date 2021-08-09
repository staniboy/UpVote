const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions,
    };
  },
  computed: {
    sortedSubmitions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
};

Vue.createApp(upvoteApp).mount("#app");
