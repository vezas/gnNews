import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

import { config as configDotEnv } from 'dotenv';

configDotEnv();

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [tsconfigPaths(), svgr()],
  base: process.env.BASE_URL || '/'
});
