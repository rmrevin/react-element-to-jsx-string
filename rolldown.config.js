const { defineConfig } = require('rolldown');
const pkg = require('./package.json');

const extractExternals = () => [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

module.exports = defineConfig({
  input: 'src/index.ts',
  output: [
    // {
    //   file: pkg.main,
    //   format: 'cjs',
    //   sourcemap: true,
    //   exports: 'named',
    // },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: extractExternals(),
});
