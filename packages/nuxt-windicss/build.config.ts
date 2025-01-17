import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  emitCJS: true,
  entries: [
    'src/index',
    { input: 'src/template/', outDir: 'dist/template', format: 'esm', declaration: false },
  ],
  externals: [
    '@nuxt/kit',
    '@nuxt/kit-edge',
    '@windicss/plugin-utils',
    'consola',
    'pathe',
    'defu',
  ],
})
