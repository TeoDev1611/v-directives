const app = Vue.createApp({
  data() {
    return {
      title: `I am a title from data`,
      correct: `<code>This is correct</code>`,
      incorrect: `<code>This is incorrect</code>`,
      isShowing: true,
      yes: "This is showing",
      count: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  },
});

app.mount('#app')