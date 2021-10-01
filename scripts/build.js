const { argv } = require('process')
const { build } = require('esbuild')

build({
  entryPoints: ['src/app.ts'],
  outfile: './dist/app.js',
  bundle: true,
  minify: argv[2] === 'production',
  sourcemap: argv[2] !== 'production',
  platform: 'node',
  watch: false
})
