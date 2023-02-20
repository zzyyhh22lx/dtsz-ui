// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import {
  DtszButton,
  DProgressbar,
  DIcon,
  DtszAvatar,
    DtszImage,
    DtszDialog,
  DtszNotify
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
  },
};
