import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#41b883",
      },
      dark: {
        primary: "#34495e",
      },
    },
  },
});
