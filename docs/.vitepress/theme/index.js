// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import { DtszButton, DProgressbar, DIcon, DtszAvatar, DtszImage,DtszDialog,DtszNotify } from 'dtsz-ui'
export default {
  ...DefaultTheme,
  NotFound: () => 'custom 404',
  enhanceApp({ app }) {
    app.component('DtszButton', DtszButton)
    app.component('DProgressbar', DProgressbar)
    app.component('DIcon', DIcon)
    app.component('DtszAvatar', DtszAvatar)
    app.component('DtszImage', DtszImage)
    app.component('DtszDialog', DtszDialog)
    app.component('DtszNotify', DtszNotify)
  }
};
