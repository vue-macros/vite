import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'vue-macros/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
      },
    }),

    Inspect(),
  ],
})
