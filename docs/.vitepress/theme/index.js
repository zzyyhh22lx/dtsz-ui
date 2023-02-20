// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import { DtszButton, DProgressbar, DIcon } from "dtsz-ui";
import { loadingDirective } from "dtsz-ui/src/loading/index";

export default {
  ...DefaultTheme,
  NotFound: () => "custom 404",
  enhanceApp({ app }) {
    app.component("DtszButton", DtszButton);
    app.component("DProgressbar", DProgressbar);
    app.component("DIcon", DIcon);
    app.directive("loading", loadingDirective);
  },
};