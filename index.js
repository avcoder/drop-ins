new Vue({
  el: "#app",
  mounted() {
    this.getMath();
    this.getResearch();
    this.getTutoring();
    this.getWriting();
  },
  data: {
    mathEvents: [],
    writingEvents: [],
    tutoringEvents: [],
    researchEvents: [],
    days: 0,
  },
  methods: {
    async getMath() {
      const data = await fetch(
        `https://georgianc.libcal.com/1.0/events?cal_id=7721&iid=1300&key=4da1c6f5f121f5922dd2ae211cc1f680&days=${this.days}`
      );
      const json = await data.json();
      this.mathEvents = [...json.events];
    },

    async getTutoring() {
      const data = await fetch(
        `https://georgianc.libcal.com/1.0/events?cal_id=7779&iid=1300&key=4da1c6f5f121f5922dd2ae211cc1f680&days=${this.days}`
      );
      const json = await data.json();
      this.tutoringEvents = [...json.events];
    },

    async getWriting() {
      const data = await fetch(
        `https://georgianc.libcal.com/1.0/events?cal_id=7487&iid=1300&key=4da1c6f5f121f5922dd2ae211cc1f680&days=${this.days}`
      );
      const json = await data.json();
      this.writingEvents = [...json.events];
    },

    async getResearch() {
      const data = await fetch(
        `https://georgianc.libcal.com/1.0/events?cal_id=7492&iid=1300&key=4da1c6f5f121f5922dd2ae211cc1f680&days=${this.days}`
      );
      const json = await data.json();
      this.researchEvents = [...json.events];
    },

    formatDate(strDate) {
      return new Date(strDate).toLocaleString();
    },
  },

  watch: {
    days() {
      this.getMath();
      this.getResearch();
      this.getTutoring();
      this.getWriting();
    },
  },
});
