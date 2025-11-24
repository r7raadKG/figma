import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#0c1a37',
          surface: '#12254a',
          primary: '#152859',
          secondary: '#febc0d',
          info: '#93e0f5',
        },
      },
    },
  },
});
