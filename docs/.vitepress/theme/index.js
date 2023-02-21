// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import {
  DtszButton,
  DProgressbar,
  DIcon,
  DtszAvatar,
  DtszImage,
  DtszDialog,
  DtszNotify,
  DtszBackToTop,
  DtszNav,
  DtszRow,
  DtszCol,
} from "dtsz-ui";
import { loadingDirective } from "dtsz-ui/src/loading/index";

export default {
  ...DefaultTheme,
  NotFound: () => "custom 404",
  enhanceApp({ app }) {
    app.component("DtszButton", DtszButton);
    app.component("DProgressbar", DProgressbar);
    app.component("DIcon", DIcon);
    app.component("DtszAvatar", DtszAvatar);
    app.component("DtszImage", DtszImage);
    app.directive("loading", loadingDirective);
    app.component('DtszDialog', DtszDialog)
    app.component('DtszNotify', DtszNotify)
    app.component("DtszBackToTop", DtszBackToTop);
    app.component("DtszRow", DtszRow);
    app.component('DtszNav', DtszNav)
    app.component('DtszCol', DtszCol)
  },
};
