import Vue from "vue";
import Vuetify from "vuetify/lib"; //"vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      dark: true,
    themes: {
      name: "checklist_theme",
      light: {
        primary: "#c686f4", // "purple"
        secondary: "#75f9ad", //"green",
        accent: "#3f86f5", //"blue",
        error: "#f4c686",
        icon: "#000099",
        footer: "#99CCFF",
        footerTerms: "#CCE6FF",
        footerBg: "#004C99",
        white: "#FFFFFF",
        black: "#000000",
      },
      dark: {
        primary: "#c0306e",
        secondary: "#000000",
        other: "#d3d3d3",
        spotifyGreen: "#1DB954",
        spotifyBlack: "#191414",
        githubBlue: "#4078c0",
        githubPurple: "#6e5494",
        githubGrey: "#f5f5f5",
        githubWhite: "#fafafa",
      },
    },
  },
  icons: {
    iconfont: "mdi",
    values: {
      cancel: "fas fa-ban",
      menu: "fas fa-ellipsis-v",
      account: "mdi-account-circle",
      home: "mdi-home",
      dotsVertical: "mdi-dots-vertical",
      approved: "mdi-checkbox-marked-circle",
      pending: "mdi-arrow-up-thin-circle-outline",
      denied: "mdi-cancel",
      calendar: "mdi-calendar",
    },
  },
});
