# 17.1.0 (2026-06-17)


### Bug Fixes

* add react 18 support, fixes [#728](https://github.com/algolia/react-element-to-jsx-string/issues/728) ([#729](https://github.com/algolia/react-element-to-jsx-string/issues/729)) ([8e17e12](https://github.com/algolia/react-element-to-jsx-string/commit/8e17e1283fd48108663c7fedf7d174c957c00f68))
* **browser:** Add IE 11 support ([#288](https://github.com/algolia/react-element-to-jsx-string/issues/288)) ([6c071b6](https://github.com/algolia/react-element-to-jsx-string/commit/6c071b62ff48ef9a2bbe067610c46ea081ece00f)), closes [#211](https://github.com/algolia/react-element-to-jsx-string/issues/211) [#285](https://github.com/algolia/react-element-to-jsx-string/issues/285)
* **build:** missing babel helpers, true esm modules, simplify ([#290](https://github.com/algolia/react-element-to-jsx-string/issues/290)) ([faa8f46](https://github.com/algolia/react-element-to-jsx-string/commit/faa8f468aa13ba4cb0d2e82bdba58d7dbcd4069f))
* **build:** revert to stringify-object@2 ([58542bc](https://github.com/algolia/react-element-to-jsx-string/commit/58542bcc24e21914a0630e308f6a92fb7da9df91)), closes [#71](https://github.com/algolia/react-element-to-jsx-string/issues/71)
* **children:** ensure the array of children is well handled ([36b462a](https://github.com/algolia/react-element-to-jsx-string/commit/36b462a406b2490ab5d12fdbb7c2fef984c3e994))
* **deps:** allow react 0.14 ([7347b71](https://github.com/algolia/react-element-to-jsx-string/commit/7347b7112bd2fa2b73cb17fccd963aa623858fdd)), closes [#24](https://github.com/algolia/react-element-to-jsx-string/issues/24)
* **deps:** pin dependency @base2/pretty-print-object to 1.0.0 ([07f19f9](https://github.com/algolia/react-element-to-jsx-string/commit/07f19f95844681fc4a04e440138e41e385f98a75))
* **deps:** pin dependency react-is to 17.0.2 ([a62c5fd](https://github.com/algolia/react-element-to-jsx-string/commit/a62c5fdaa33d4e891631ba48661f8466c96d809d))
* **deps:** Remove dependency stringify-object ([6dc6d8d](https://github.com/algolia/react-element-to-jsx-string/commit/6dc6d8d8d442671d5f00f86b1cba0d9eea1f30e7))
* **deps:** remove direct dep on react-addons-test-utils ([06d2588](https://github.com/algolia/react-element-to-jsx-string/commit/06d258876c6738461761f26aa7a69764055f3c6d)), closes [#56](https://github.com/algolia/react-element-to-jsx-string/issues/56)
* **deps:** Replace dependency stringify-object with pretty-print-object ([940a413](https://github.com/algolia/react-element-to-jsx-string/commit/940a41326ebff1cc83e352084bfe8f0e79897836))
* **deps:** update dependency @base2/pretty-print-object to v1.0.2 ([3431228](https://github.com/algolia/react-element-to-jsx-string/commit/34312289d8b25d7d57c95c15a5b018a55d83546c))
* **deps:** update dependency is-plain-object to v3 ([#361](https://github.com/algolia/react-element-to-jsx-string/issues/361)) ([b58cbbd](https://github.com/algolia/react-element-to-jsx-string/commit/b58cbbd76e0fdbd1fe552dedfa6598b6acb6740b))
* **deps:** update dependency is-plain-object to v3.0.1 ([4974512](https://github.com/algolia/react-element-to-jsx-string/commit/4974512273c86c72415376fea89f9d6e07e2b2e5))
* **deps:** update dependency stringify-object to v3.2.1 ([539ea56](https://github.com/algolia/react-element-to-jsx-string/commit/539ea5684a5c927f4138bd5135aa4ae6f3d09e00))
* **deps:** update dependency stringify-object to v3.2.2 ([b1a4c5e](https://github.com/algolia/react-element-to-jsx-string/commit/b1a4c5e95ef1ae5254ae231aff2a2ecbab608d3b))
* **deps:** update dependency stringify-object to v3.3.0 ([bfe9a9f](https://github.com/algolia/react-element-to-jsx-string/commit/bfe9a9f9ee77e07dc1f573f84570c458c6af465f))
* Fix TypeScript type declaration ([#516](https://github.com/algolia/react-element-to-jsx-string/issues/516)) ([c4fe54a](https://github.com/algolia/react-element-to-jsx-string/commit/c4fe54adcafbe688d397fe652e61952a56e7cffe))
* fixed crashing on circular React elements ([#619](https://github.com/algolia/react-element-to-jsx-string/issues/619)) ([ea73118](https://github.com/algolia/react-element-to-jsx-string/commit/ea73118d80e668510d7de1ec23215248ef72b0a1))
* **flow:** export flow definitions in the released bundle and fix the npm ignore too restrictive ([#115](https://github.com/algolia/react-element-to-jsx-string/issues/115)) ([c4f91b9](https://github.com/algolia/react-element-to-jsx-string/commit/c4f91b9b050c0418f29443f45f2673d7e2258d8a))
* **formatting:** Children with multiline string are now correctly indented ([d18809e](https://github.com/algolia/react-element-to-jsx-string/commit/d18809eaf841ceedcf7d11137c3890d643f8d35b))
* **formatting:** Date/RegExp values output by formatComplexDataStructure ([#250](https://github.com/algolia/react-element-to-jsx-string/issues/250)) ([0387b72](https://github.com/algolia/react-element-to-jsx-string/commit/0387b726db87b8756b7ff8ca5bea06a3df4b535e))
* **formatting:** fix an edge case where number and string childrens are not correctly merged ([47572e0](https://github.com/algolia/react-element-to-jsx-string/commit/47572e0a83954d9d9cf6394079de774b3b01c3e8))
* **formatting:** Fix JSX delimiters escaping in string ([6e0eea3](https://github.com/algolia/react-element-to-jsx-string/commit/6e0eea326513d389db649d58e1f56d1ee38a0903))
* **formatting:** Fix JSX element in prop object recursive loop ([#309](https://github.com/algolia/react-element-to-jsx-string/issues/309)) ([fd4f53b](https://github.com/algolia/react-element-to-jsx-string/commit/fd4f53bf33beca67f5c6bd4a5ad08f154b196dc0))
* **formatting:** fix the anonymous functional component detection after babel upgrade ([7a1b93e](https://github.com/algolia/react-element-to-jsx-string/commit/7a1b93eca7446c4183298a03178f737678d85678))
* **formatting:** Make the props "key" and "ref" order predictibale ([#340](https://github.com/algolia/react-element-to-jsx-string/issues/340)) ([3853463](https://github.com/algolia/react-element-to-jsx-string/commit/38534639a106284fc5f9cd3b150bd5b364d43027))
* **formatting:** symbol description are now quoted ([2747f1b](https://github.com/algolia/react-element-to-jsx-string/commit/2747f1b34501a5fcc83f344a46f72b31e805c3d3)), closes [#134](https://github.com/algolia/react-element-to-jsx-string/issues/134)
* **formatting:** trailing space ([2a07d5e](https://github.com/algolia/react-element-to-jsx-string/commit/2a07d5ea16e033ade019eb2b1be966f5f21d1f1d)), closes [#135](https://github.com/algolia/react-element-to-jsx-string/issues/135)
* **functionValue:** handle nested datastructures ([94d1aeb](https://github.com/algolia/react-element-to-jsx-string/commit/94d1aeb97ccf8ba09ca4c6896e53480c4f1dc16c))
* handle <div>{123}</div> ([609ac78](https://github.com/algolia/react-element-to-jsx-string/commit/609ac7857cc745c08a4f37dacffcc7b599f1e9a3)), closes [#8](https://github.com/algolia/react-element-to-jsx-string/issues/8)
* handle arrays the right way ([597a910](https://github.com/algolia/react-element-to-jsx-string/commit/597a9108aef3d4e7045d87730ede227f388f6599))
* handle empty objects ([fe052bd](https://github.com/algolia/react-element-to-jsx-string/commit/fe052bd878e034734777aeb4cff09945d38591c3))
* handle invalid Date objects ([#605](https://github.com/algolia/react-element-to-jsx-string/issues/605)) ([#606](https://github.com/algolia/react-element-to-jsx-string/issues/606)) ([dbbd9e5](https://github.com/algolia/react-element-to-jsx-string/commit/dbbd9e5e0bb1e766910809da77e5a6126897202a))
* Handle multiple words before trailing space ([#572](https://github.com/algolia/react-element-to-jsx-string/issues/572)) ([e0c082e](https://github.com/algolia/react-element-to-jsx-string/commit/e0c082eb1d1e9fe2ed2918db157079d17af3af09))
* handle null and undefined prop values ([9a57a10](https://github.com/algolia/react-element-to-jsx-string/commit/9a57a1087958390c23534264d82bd4fd4b481f65)), closes [#1](https://github.com/algolia/react-element-to-jsx-string/issues/1)
* **lodash:** just use plain lodash and import ([062b3fe](https://github.com/algolia/react-element-to-jsx-string/commit/062b3fe6d0ec53747a19125db01dc103b567b2f9))
* merge plain strings props replacements ([7c2bf27](https://github.com/algolia/react-element-to-jsx-string/commit/7c2bf272f4daf635ecc571647aa09361ee9f971f))
* **quotes:** fixes [#82](https://github.com/algolia/react-element-to-jsx-string/issues/82) [#81](https://github.com/algolia/react-element-to-jsx-string/issues/81) [#80](https://github.com/algolia/react-element-to-jsx-string/issues/80) ([3d96ddc](https://github.com/algolia/react-element-to-jsx-string/commit/3d96ddc23d057625e76450f19c758c6f1e127ca5))
* **react:** Fix warning about access to PropTypes using React 15.5+ (fixes [#213](https://github.com/algolia/react-element-to-jsx-string/issues/213)) ([2dcfd10](https://github.com/algolia/react-element-to-jsx-string/commit/2dcfd10c60025b8887646e936bd73f9a3932f0b9))
* **release:** Missing `mversion` package in dev dependencies ([0f82ee7](https://github.com/algolia/react-element-to-jsx-string/commit/0f82ee77a554e20870750a34a18678aa47d1ccf1))
* **release:** revert change made by error in commit 86697517 ([903fd5c](https://github.com/algolia/react-element-to-jsx-string/commit/903fd5c30535ac7b643682a6f3b6a04003fc178a))
* Rework the propNameSorter to be less dependents of node sort internals ([a9ee312](https://github.com/algolia/react-element-to-jsx-string/commit/a9ee31247928d5854226de3b9fe2ae67cea231ce))
* **stateless comps:** add No Display Name as default component name ([dc0f65c](https://github.com/algolia/react-element-to-jsx-string/commit/dc0f65ccddf9499771dca887f285edafd60edee7)), closes [#11](https://github.com/algolia/react-element-to-jsx-string/issues/11)
* stringifying elements with props containing circular references ([#660](https://github.com/algolia/react-element-to-jsx-string/issues/660)) ([f203060](https://github.com/algolia/react-element-to-jsx-string/commit/f203060004e59af945019dad32a05f67508cc947))
* **tagName:** fixed an edge-case with decorated component name ([9169ac7](https://github.com/algolia/react-element-to-jsx-string/commit/9169ac7a9f2713c1483acff545f614ada66bc8b4))
* **test:** Fix usage of yarn instead of npm in test script ([0db5aa4](https://github.com/algolia/react-element-to-jsx-string/commit/0db5aa48c2f81538511567f9e4243631dbc06b55))
* **travis:** manually install yarn on Travis CI ([b8a4c1a](https://github.com/algolia/react-element-to-jsx-string/commit/b8a4c1a1d52225ed4ffb0c9c7bf207578fbda355))
* **whitespace:** handle {true} {false} ([eaca1a2](https://github.com/algolia/react-element-to-jsx-string/commit/eaca1a2c6daf3e9ba78a223c9b8f7d354eb9e804)), closes [#6](https://github.com/algolia/react-element-to-jsx-string/issues/6) [#7](https://github.com/algolia/react-element-to-jsx-string/issues/7)
* **whitespace:** remove unwanted whitespace in output ([3e2e7b8](https://github.com/algolia/react-element-to-jsx-string/commit/3e2e7b893bfb427701102dfd2ebac0bac655f2f4))
* **whitespace:** stop rendering it differently in SOME cases ([128aa95](https://github.com/algolia/react-element-to-jsx-string/commit/128aa95d07542f0edeec5cd9bb2c29064dacce0d))


### chore

* **build:** switch to stringify-object@3 ([e9a5c7f](https://github.com/algolia/react-element-to-jsx-string/commit/e9a5c7fb8fbb4bb41a5e12d786fecdae8d1f7ab5))
* **deps:** update jest monorepo to v23 (major) ([#305](https://github.com/algolia/react-element-to-jsx-string/issues/305)) ([aef55a2](https://github.com/algolia/react-element-to-jsx-string/commit/aef55a29c6cb7a08ded92efd2baae277d00d0c48))


* React 19 (#865) ([e391aae](https://github.com/algolia/react-element-to-jsx-string/commit/e391aae7f0a113b44a7f55ca176cf93d6e6dfe11)), closes [#865](https://github.com/algolia/react-element-to-jsx-string/issues/865)


### Features

* Added ability to manually format functions ([0b33af9](https://github.com/algolia/react-element-to-jsx-string/commit/0b33af9c9f5263b132f570a8ad21def4db7f90d0))
* Added ability to manually format props ([85307ec](https://github.com/algolia/react-element-to-jsx-string/commit/85307ece2f610ba11202f92066e7d57b041185e8))
* allow filterProps to be a function ([#417](https://github.com/algolia/react-element-to-jsx-string/issues/417)) ([c4908bb](https://github.com/algolia/react-element-to-jsx-string/commit/c4908bbb52e58e104c9d42d1ceaff80d53fd4bdf))
* **browser:** build a dedicated version for the browser ([#242](https://github.com/algolia/react-element-to-jsx-string/issues/242)) ([574d850](https://github.com/algolia/react-element-to-jsx-string/commit/574d8502bd3e49e10a71b9ffc9b2d96cea26d529))
* **deep:** handle deeply set functions ([ad21917](https://github.com/algolia/react-element-to-jsx-string/commit/ad21917ae0e76e2dc60c8c38986c44f1fcb4a2ed))
* **deep:** handle deeply set React elements ([a06f329](https://github.com/algolia/react-element-to-jsx-string/commit/a06f3294b9555e0f76df12097f4524b0bd041598))
* **deps:** upgrade all deps ([f3e368d](https://github.com/algolia/react-element-to-jsx-string/commit/f3e368d0cf100870ebb3428fd8a401edac496a30))
* **functionValue:** format functions output the way you want ([460e0cc](https://github.com/algolia/react-element-to-jsx-string/commit/460e0cc5f09a8d2c093df598c488f06347b5365c))
* handle key="" ([da85281](https://github.com/algolia/react-element-to-jsx-string/commit/da8528177e4075a3267eded79dba7985147bbcdd))
* handle ref="manual-ref" ([5b18191](https://github.com/algolia/react-element-to-jsx-string/commit/5b18191e76ef8f3f9652a8b753b7d856410be7a2))
* **inline attributes:** Allow formatting attribute on the same line ([da72176](https://github.com/algolia/react-element-to-jsx-string/commit/da72176fe3b6075fcd43200248b4988653b78aa9))
* **pretty:** prettify objects, arrays, nested ([864b9db](https://github.com/algolia/react-element-to-jsx-string/commit/864b9db49b700909047bd234950535998bb7bbb2))
* **React:** React v15 compat ([37ee7b5](https://github.com/algolia/react-element-to-jsx-string/commit/37ee7b58967c3d96947b703d3f9e2f90a283a1ad))
* **React:** support 15.5+ ([1a99024](https://github.com/algolia/react-element-to-jsx-string/commit/1a99024b5dd52128e92301803f86752906718aa0))
* sort object keys in a deterministic way ([c1ce8a6](https://github.com/algolia/react-element-to-jsx-string/commit/c1ce8a623bf1fb457ac14763723b8d3f83a97027))
* **sortObject:** Add a test for issue 344 ([#357](https://github.com/algolia/react-element-to-jsx-string/issues/357)) ([5fe7604](https://github.com/algolia/react-element-to-jsx-string/commit/5fe76042fe61df9db31976d1d0a6dc26d2d1321a)), closes [#334](https://github.com/algolia/react-element-to-jsx-string/issues/334)
* **sortProps:** add option to remove sorting of props ([66e8307](https://github.com/algolia/react-element-to-jsx-string/commit/66e83077498e9fcac4dc70fd2a8766fa85d65e91))
* support more element types ([#617](https://github.com/algolia/react-element-to-jsx-string/issues/617)) ([bf7f4cf](https://github.com/algolia/react-element-to-jsx-string/commit/bf7f4cf8d31494997b9d5f36f238286d67cd6ae1))
* **typescript:** Add TypeScript declaration file. ([#475](https://github.com/algolia/react-element-to-jsx-string/issues/475)) ([f9ea4e5](https://github.com/algolia/react-element-to-jsx-string/commit/f9ea4e54c3d01f45ace0038f2031bf9095a48138))


### Reverts

* Revert "14.0.0" ([ad18c36](https://github.com/algolia/react-element-to-jsx-string/commit/ad18c3608dcd3df95675bcb7fc42b4fca74cabc7))


### BREAKING CHANGES

* To simplify the library maintenance, this major version only support React 19.
* **deps:** If you use the `showFunctions: true` option, the function are now always inlined in the output by default. Before it was not always the case (depending one the engine, platform or babel versions)

You could get back to the previous behavior by using the `preserveFunctionLineBreak` function export as a value of the option `functionValue`.

* test(smoke): Adapt the CommonJS bundle import
* **browser:** This PR change of the internal directory structure of the exported code. The previous code has move from the `dist/` into the `dist/esm` directory (but remender that we do not avice you to do use internals code  🤓)

* fix(bunble): do not bundle peer dependencies

* qa(ci): Avoid duplicate runs of checks on CI

* qa(dependencies): Upgrade to latest rollup versions

* qa(test): Allow to run the smoke tests aggaint all builded versions
* **formatting:** Trailing are now preserved. In some rare case, `react-element-to-jsx-string` failed to respect the JSX specs for the trailing space. Event is the space were in the final output. There were silentrly ignored by JSX parser. This commit fix this bug by protecting the trailing space in the output.

If we take the JSX:
```jsx
<div>
  foo <strong>bar</strong> baz
</div>
```

Before it was converted to (the trailing space are replace by `*` for the readability):
```html
<div>
  foo*
  <strong>
    bar
  </strong>
  *baz
</div>
```

Now there are preserved:
```html
<div>
  foo{' '}
  <strong>
    bar
  </strong>
  {' '}baz
</div>
```
* **formatting:** Symbol description are now correctly quoted. This change the output if you use Symbol in your code
* **formatting:** Improve string escaping of string that contains JSX delimiters (`{`,`}`,`<`,`>`)

Before:
```
console.log(reactElementToJsxString(<div>{`Mustache :{`}</div>);

// <div>Mustache :&lbrace;</div>
```

Now:
```
console.log(reactElementToJsxString(<div>{`Mustache :{`}</div>);

// <div>{`Mustache :{`}</div>
```
* **build:** You need an ES2015 env to use
react-element-to-jsx-string now

You can use the Babel polyfill to do so.
* **pretty:** objects and arrays are now prettified by default following #50 
If this is a concern to you, open a PR that adds an option to inline parts or the whole output like before
* **deep:** functions are now stringified to `function noRefCheck()
{}` instead of `function () {code;}`. For various reasons AND to be
specific about the fact that we do not represent the function in a
realistic way.



## [17.0.1](https://github.com/algolia/react-element-to-jsx-string/compare/v17.0.0...v17.0.1) (2025-04-25)



# [17.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v15.0.0...v17.0.0) (2025-01-18)


### Bug Fixes

* **deps:** update dependency @base2/pretty-print-object to v1.0.2 ([3431228](https://github.com/algolia/react-element-to-jsx-string/commit/34312289d8b25d7d57c95c15a5b018a55d83546c))


* React 19 (#865) ([e391aae](https://github.com/algolia/react-element-to-jsx-string/commit/e391aae7f0a113b44a7f55ca176cf93d6e6dfe11)), closes [#865](https://github.com/algolia/react-element-to-jsx-string/issues/865)


### BREAKING CHANGES

* To simplify the library maintenance, this major version only support React 19.



# [15.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v14.3.4...v15.0.0) (2022-05-09)


### Bug Fixes

* add react 18 support, fixes [#728](https://github.com/algolia/react-element-to-jsx-string/issues/728) ([#729](https://github.com/algolia/react-element-to-jsx-string/issues/729)) ([8e17e12](https://github.com/algolia/react-element-to-jsx-string/commit/8e17e1283fd48108663c7fedf7d174c957c00f68))



## [14.3.4](https://github.com/algolia/react-element-to-jsx-string/compare/v14.3.3...v14.3.4) (2021-10-19)


### Bug Fixes

* stringifying elements with props containing circular references ([#660](https://github.com/algolia/react-element-to-jsx-string/issues/660)) ([f203060](https://github.com/algolia/react-element-to-jsx-string/commit/f203060004e59af945019dad32a05f67508cc947))



## [14.3.3](https://github.com/algolia/react-element-to-jsx-string/compare/v14.3.2...v14.3.3) (2021-10-19)


### Bug Fixes

* **deps:** pin dependency react-is to 17.0.2 ([a62c5fd](https://github.com/algolia/react-element-to-jsx-string/commit/a62c5fdaa33d4e891631ba48661f8466c96d809d))
* fixed crashing on circular React elements ([#619](https://github.com/algolia/react-element-to-jsx-string/issues/619)) ([ea73118](https://github.com/algolia/react-element-to-jsx-string/commit/ea73118d80e668510d7de1ec23215248ef72b0a1))
* handle invalid Date objects ([#605](https://github.com/algolia/react-element-to-jsx-string/issues/605)) ([#606](https://github.com/algolia/react-element-to-jsx-string/issues/606)) ([dbbd9e5](https://github.com/algolia/react-element-to-jsx-string/commit/dbbd9e5e0bb1e766910809da77e5a6126897202a))


### Features

* support more element types ([#617](https://github.com/algolia/react-element-to-jsx-string/issues/617)) ([bf7f4cf](https://github.com/algolia/react-element-to-jsx-string/commit/bf7f4cf8d31494997b9d5f36f238286d67cd6ae1))



## [14.3.2](https://github.com/algolia/react-element-to-jsx-string/compare/v14.3.1...v14.3.2) (2020-10-28)


### Bug Fixes

* **deps:** update dependency is-plain-object to v3.0.1 ([4974512](https://github.com/algolia/react-element-to-jsx-string/commit/4974512273c86c72415376fea89f9d6e07e2b2e5))
* Handle multiple words before trailing space ([#572](https://github.com/algolia/react-element-to-jsx-string/issues/572)) ([e0c082e](https://github.com/algolia/react-element-to-jsx-string/commit/e0c082eb1d1e9fe2ed2918db157079d17af3af09))



## [14.3.1](https://github.com/algolia/react-element-to-jsx-string/compare/v14.3.0...v14.3.1) (2020-01-21)


### Bug Fixes

* Fix TypeScript type declaration ([#516](https://github.com/algolia/react-element-to-jsx-string/issues/516)) ([c4fe54a](https://github.com/algolia/react-element-to-jsx-string/commit/c4fe54adcafbe688d397fe652e61952a56e7cffe))



# [14.3.0](https://github.com/algolia/react-element-to-jsx-string/compare/v14.2.0...v14.3.0) (2020-01-17)


### Features

* allow filterProps to be a function ([#417](https://github.com/algolia/react-element-to-jsx-string/issues/417)) ([c4908bb](https://github.com/algolia/react-element-to-jsx-string/commit/c4908bb))



# [14.2.0](https://github.com/algolia/react-element-to-jsx-string/compare/v14.1.0...v14.2.0) (2019-12-29)


### Bug Fixes

* **deps:** pin dependency @base2/pretty-print-object to 1.0.0 ([07f19f9](https://github.com/algolia/react-element-to-jsx-string/commit/07f19f95844681fc4a04e440138e41e385f98a75))
* **formatting:** fix the anonymous functional component detection after babel upgrade ([7a1b93e](https://github.com/algolia/react-element-to-jsx-string/commit/7a1b93eca7446c4183298a03178f737678d85678))


### Features

* **typescript:** Add TypeScript declaration file. ([#475](https://github.com/algolia/react-element-to-jsx-string/issues/475)) ([f9ea4e5](https://github.com/algolia/react-element-to-jsx-string/commit/f9ea4e54c3d01f45ace0038f2031bf9095a48138))



# [14.1.0](https://github.com/algolia/react-element-to-jsx-string/compare/v14.0.3...v14.1.0) (2019-09-15)


### Bug Fixes

* **deps:** Remove dependency stringify-object ([6dc6d8d](https://github.com/algolia/react-element-to-jsx-string/commit/6dc6d8d))
* **deps:** Replace dependency stringify-object with pretty-print-object ([940a413](https://github.com/algolia/react-element-to-jsx-string/commit/940a413))



## [14.0.3](https://github.com/algolia/react-element-to-jsx-string/compare/v14.0.2...v14.0.3) (2019-07-19)


### Bug Fixes

* **deps:** update dependency is-plain-object to v3 ([#361](https://github.com/algolia/react-element-to-jsx-string/issues/361)) ([b58cbbd](https://github.com/algolia/react-element-to-jsx-string/commit/b58cbbd))
* Rework the propNameSorter to be less dependents of node sort internals ([a9ee312](https://github.com/algolia/react-element-to-jsx-string/commit/a9ee312))
* **deps:** update dependency stringify-object to v3.3.0 ([bfe9a9f](https://github.com/algolia/react-element-to-jsx-string/commit/bfe9a9f))
* **formatting:** Make the props "key" and "ref" order predictibale ([#340](https://github.com/algolia/react-element-to-jsx-string/issues/340)) ([3853463](https://github.com/algolia/react-element-to-jsx-string/commit/3853463))


### chore

* **deps:** update jest monorepo to v23 (major) ([#305](https://github.com/algolia/react-element-to-jsx-string/issues/305)) ([aef55a2](https://github.com/algolia/react-element-to-jsx-string/commit/aef55a2))


### Features

* **sortObject:** Add a test for issue 344 ([#357](https://github.com/algolia/react-element-to-jsx-string/issues/357)) ([5fe7604](https://github.com/algolia/react-element-to-jsx-string/commit/5fe7604)), closes [#334](https://github.com/algolia/react-element-to-jsx-string/issues/334)


### BREAKING CHANGES

* **deps:** If you use the `showFunctions: true` option, the function are now always inlined in the output by default. Before it was not always the case (depending one the engine, platform or babel versions)

You could get back to the previous behavior by using the `preserveFunctionLineBreak` function export as a value of the option `functionValue`.

* test(smoke): Adapt the CommonJS bundle import



<a name="14.0.2"></a>
## [14.0.2](https://github.com/algolia/react-element-to-jsx-string/compare/v14.0.1...v14.0.2) (2018-10-10)


### Bug Fixes

* **formatting:** Fix JSX element in prop object recursive loop ([#309](https://github.com/algolia/react-element-to-jsx-string/issues/309)) ([fd4f53b](https://github.com/algolia/react-element-to-jsx-string/commit/fd4f53b))
* **functionValue:** handle nested datastructures ([94d1aeb](https://github.com/algolia/react-element-to-jsx-string/commit/94d1aeb))



<a name="14.0.1"></a>
## [14.0.1](https://github.com/algolia/react-element-to-jsx-string/compare/v14.0.0...v14.0.1) (2018-06-20)


### Bug Fixes

* **browser:** Add IE 11 support ([#288](https://github.com/algolia/react-element-to-jsx-string/issues/288)) ([6c071b6](https://github.com/algolia/react-element-to-jsx-string/commit/6c071b6)), closes [#211](https://github.com/algolia/react-element-to-jsx-string/issues/211) [#285](https://github.com/algolia/react-element-to-jsx-string/issues/285)
* **build:** missing babel helpers, true esm modules, simplify ([#290](https://github.com/algolia/react-element-to-jsx-string/issues/290)) ([faa8f46](https://github.com/algolia/react-element-to-jsx-string/commit/faa8f46))



<a name="14.0.0"></a>
# [14.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v13.2.0...v14.0.0) (2018-05-25)


### Features

* **browser:** build a dedicated version for the browser ([#242](https://github.com/algolia/react-element-to-jsx-string/issues/242)) ([574d850](https://github.com/algolia/react-element-to-jsx-string/commit/574d850))


### BREAKING CHANGES

* **browser:** This PR change of the internal directory structure of the exported code. The previous code has move from the `dist/` into the `dist/esm` directory (but remender that we do not avice you to do use internals code  🤓)

* fix(bunble): do not bundle peer dependencies

* qa(ci): Avoid duplicate runs of checks on CI

* qa(dependencies): Upgrade to latest rollup versions

* qa(test): Allow to run the smoke tests aggaint all builded versions



<a name="13.2.0"></a>
# [13.2.0](https://github.com/algolia/react-element-to-jsx-string/compare/v13.1.0...v13.2.0) (2018-03-14)


### Bug Fixes

* **deps:** update dependency stringify-object to v3.2.2 ([b1a4c5e](https://github.com/algolia/react-element-to-jsx-string/commit/b1a4c5e))



<a name="13.1.0"></a>
# [13.1.0](https://github.com/algolia/react-element-to-jsx-string/compare/v13.0.0...v13.1.0) (2017-11-15)


### Bug Fixes

* **formatting:** Date/RegExp values output by formatComplexDataStructure ([#250](https://github.com/algolia/react-element-to-jsx-string/issues/250)) ([0387b72](https://github.com/algolia/react-element-to-jsx-string/commit/0387b72))
* **react:** Fix warning about access to PropTypes using React 15.5+ (fixes [#213](https://github.com/algolia/react-element-to-jsx-string/issues/213)) ([2dcfd10](https://github.com/algolia/react-element-to-jsx-string/commit/2dcfd10))
* **test:** Fix usage of yarn instead of npm in test script ([0db5aa4](https://github.com/algolia/react-element-to-jsx-string/commit/0db5aa4))



<a name="13.0.0"></a>
# [13.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v12.0.0...v13.0.0) (2017-10-09)


### Bug Fixes

* **deps:** update dependency stringify-object to v3.2.1 ([539ea56](https://github.com/algolia/react-element-to-jsx-string/commit/539ea56))
* **formatting:** symbol description are now quoted ([2747f1b](https://github.com/algolia/react-element-to-jsx-string/commit/2747f1b)), closes [#134](https://github.com/algolia/react-element-to-jsx-string/issues/134)
* **formatting:** trailing space ([2a07d5e](https://github.com/algolia/react-element-to-jsx-string/commit/2a07d5e)), closes [#135](https://github.com/algolia/react-element-to-jsx-string/issues/135)


### BREAKING CHANGES

* **formatting:** Trailing are now preserved. In some rare case, `react-element-to-jsx-string` failed to respect the JSX specs for the trailing space. Event is the space were in the final output. There were silentrly ignored by JSX parser. This commit fix this bug by protecting the trailing space in the output.

If we take the JSX:
```jsx
<div>
  foo <strong>bar</strong> baz
</div>
```

Before it was converted to (the trailing space are replace by `*` for the readability):
```html
<div>
  foo*
  <strong>
    bar
  </strong>
  *baz
</div>
```

Now there are preserved:
```html
<div>
  foo{' '}
  <strong>
    bar
  </strong>
  {' '}baz
</div>
```
* **formatting:** Symbol description are now correctly quoted. This change the output if you use Symbol in your code



<a name="12.0.0"></a>
# [12.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v11.0.1...v12.0.0) (2017-08-03)


### Bug Fixes

* **flow:** export flow definitions in the released bundle and fix the npm ignore too restrictive ([#115](https://github.com/algolia/react-element-to-jsx-string/issues/115)) ([c4f91b9](https://github.com/algolia/react-element-to-jsx-string/commit/c4f91b9))
* **formatting:** Children with multiline string are now correctly indented ([d18809e](https://github.com/algolia/react-element-to-jsx-string/commit/d18809e))
* **formatting:** Fix JSX delimiters escaping in string ([6e0eea3](https://github.com/algolia/react-element-to-jsx-string/commit/6e0eea3))
* **release:** revert change made by error in commit 86697517 ([903fd5c](https://github.com/algolia/react-element-to-jsx-string/commit/903fd5c))
* **travis:** manually install yarn on Travis CI ([b8a4c1a](https://github.com/algolia/react-element-to-jsx-string/commit/b8a4c1a))


### BREAKING CHANGES

* **formatting:** Improve string escaping of string that contains JSX delimiters (`{`,`}`,`<`,`>`)

Before:
```
console.log(reactElementToJsxString(<div>{`Mustache :{`}</div>);

// <div>Mustache :&lbrace;</div>
```

Now:
```
console.log(reactElementToJsxString(<div>{`Mustache :{`}</div>);

// <div>{`Mustache :{`}</div>
```



<a name="11.0.1"></a>
## [11.0.1](https://github.com/algolia/react-element-to-jsx-string/compare/v11.0.0...v11.0.1) (2017-07-21)


### Bug Fixes

* **formatting:** fix an edge case where number and string childrens are not correctly merged ([47572e0](https://github.com/algolia/react-element-to-jsx-string/commit/47572e0))



<a name="11.0.0"></a>
# [11.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v10.1.0...v11.0.0) (2017-07-20)

### Bug Fixes

* **release:** Missing `mversion` package in dev dependencies ([0f82ee7](https://github.com/algolia/react-element-to-jsx-string/commit/0f82ee7))
* **escaping:** Complete lib refactor to handle more escaping cases ([9f3c671](https://github.com/algolia/react-element-to-jsx-string/commit/9f3c671))

### BREAKING CHANGES

* Fix escaping issue with quotes (in props value or in children of type string)
* Handle props value of `Date` type: `<div foo={new Date("2017-01-01T11:00:00.000Z")} />`
* Escape brace chars (`{}`) in a children string: `<script type="application/json+ld">&lbrace; hello: 'world' &rbrace;</script>`



<a name="10.1.0"></a>
# [10.1.0](https://github.com/algolia/react-element-to-jsx-string/compare/v10.0.1...v10.1.0) (2017-06-13)


### Features

* **sortProps:** add option to remove sorting of props ([66e8307](https://github.com/algolia/react-element-to-jsx-string/commit/66e8307))



<a name="10.0.1"></a>
## [10.0.1](https://github.com/algolia/react-element-to-jsx-string/compare/v10.0.0...v10.0.1) (2017-06-12)



<a name="10.0.0"></a>
# [10.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v9.0.0...v10.0.0) (2017-06-07)



<a name="9.0.0"></a>
# [9.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v8.0.0...v9.0.0) (2017-06-07)


### Bug Fixes

* **quotes:** fixes #82 #81 #80 ([3d96ddc](https://github.com/algolia/react-element-to-jsx-string/commit/3d96ddc)), closes [#82](https://github.com/algolia/react-element-to-jsx-string/issues/82) [#81](https://github.com/algolia/react-element-to-jsx-string/issues/81) [#80](https://github.com/algolia/react-element-to-jsx-string/issues/80)



<a name="8.0.0"></a>
# [8.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v7.0.0...v8.0.0) (2017-05-24)



<a name="7.0.0"></a>
# [7.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v6.4.0...v7.0.0) (2017-05-14)



<a name="6.4.0"></a>
# [6.4.0](https://github.com/algolia/react-element-to-jsx-string/compare/v6.3.0...v6.4.0) (2017-04-24)


### Features

* **functionValue:** format functions output the way you want ([460e0cc](https://github.com/algolia/react-element-to-jsx-string/commit/460e0cc))
* **React:** support 15.5+ ([1a99024](https://github.com/algolia/react-element-to-jsx-string/commit/1a99024))



<a name="6.3.0"></a>
# [6.3.0](https://github.com/algolia/react-element-to-jsx-string/compare/v6.2.0...v6.3.0) (2017-03-06)



<a name="6.2.0"></a>
# [6.2.0](https://github.com/algolia/react-element-to-jsx-string/compare/v6.0.0...v6.2.0) (2017-02-27)


### Features

* **inline attributes:** Allow formatting attribute on the same line ([da72176](https://github.com/algolia/react-element-to-jsx-string/commit/da72176))



<a name="6.0.0"></a>
# [6.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v5.0.7...v6.0.0) (2017-01-03)


### Chores

* **build:** switch to stringify-object[@3](https://github.com/3) ([e9a5c7f](https://github.com/algolia/react-element-to-jsx-string/commit/e9a5c7f))


### BREAKING CHANGES

* build: You need an ES2015 env to use
react-element-to-jsx-string now

You can use the Babel polyfill to do so.



<a name="5.0.7"></a>
## [5.0.7](https://github.com/algolia/react-element-to-jsx-string/compare/v5.0.6...v5.0.7) (2017-01-03)


### Bug Fixes

* **build:** revert to stringify-object[@2](https://github.com/2) ([58542bc](https://github.com/algolia/react-element-to-jsx-string/commit/58542bc)), closes [#71](https://github.com/algolia/react-element-to-jsx-string/issues/71)



<a name="5.0.6"></a>
## [5.0.6](https://github.com/algolia/react-element-to-jsx-string/compare/v5.0.5...v5.0.6) (2017-01-02)



<a name="5.0.5"></a>
## [5.0.5](https://github.com/algolia/react-element-to-jsx-string/compare/v5.0.4...v5.0.5) (2017-01-02)



<a name="5.0.4"></a>
## [5.0.4](https://github.com/algolia/react-element-to-jsx-string/compare/v5.0.3...v5.0.4) (2016-12-08)



<a name="5.0.3"></a>
## [5.0.3](https://github.com/algolia/react-element-to-jsx-string/compare/v5.0.2...v5.0.3) (2016-12-08)



<a name="5.0.2"></a>
## [5.0.2](https://github.com/algolia/react-element-to-jsx-string/compare/v5.0.1...v5.0.2) (2016-11-17)



<a name="5.0.1"></a>
## [5.0.1](https://github.com/algolia/react-element-to-jsx-string/compare/v5.0.0...v5.0.1) (2016-11-16)


### Bug Fixes

* **deps:** remove direct dep on react-addons-test-utils ([06d2588](https://github.com/algolia/react-element-to-jsx-string/commit/06d2588)), closes [#56](https://github.com/algolia/react-element-to-jsx-string/issues/56)



<a name="5.0.0"></a>
# [5.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v4.2.0...v5.0.0) (2016-10-24)


### Features

* **pretty:** prettify objects, arrays, nested ([864b9db](https://github.com/algolia/react-element-to-jsx-string/commit/864b9db))


### BREAKING CHANGES

* pretty: objects and arrays are now prettified by default following #50
If this is a concern to you, open a PR that adds an option to inline parts or the whole output like before



<a name="4.2.0"></a>
# [4.2.0](https://github.com/algolia/react-element-to-jsx-string/compare/v4.1.0...v4.2.0) (2016-09-21)



<a name="4.1.0"></a>
# [4.1.0](https://github.com/algolia/react-element-to-jsx-string/compare/v4.0.0...v4.1.0) (2016-08-30)



<a name="4.0.0"></a>
# [4.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v3.2.0...v4.0.0) (2016-08-04)



<a name="3.2.0"></a>
# [3.2.0](https://github.com/algolia/react-element-to-jsx-string/compare/v3.1.2...v3.2.0) (2016-07-15)



<a name="3.1.2"></a>
## [3.1.2](https://github.com/algolia/react-element-to-jsx-string/compare/v3.1.1...v3.1.2) (2016-07-12)



<a name="3.1.1"></a>
## [3.1.1](https://github.com/algolia/react-element-to-jsx-string/compare/v3.1.0...v3.1.1) (2016-07-12)



<a name="3.1.0"></a>
# [3.1.0](https://github.com/algolia/react-element-to-jsx-string/compare/v3.0.0...v3.1.0) (2016-06-28)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v2.6.1...v3.0.0) (2016-05-25)



<a name="2.6.1"></a>
## [2.6.1](https://github.com/algolia/react-element-to-jsx-string/compare/v2.6.0...v2.6.1) (2016-04-15)


### Bug Fixes

* **deps:** allow react 0.14 ([7347b71](https://github.com/algolia/react-element-to-jsx-string/commit/7347b71)), closes [#24](https://github.com/algolia/react-element-to-jsx-string/issues/24)



<a name="2.6.0"></a>
# [2.6.0](https://github.com/algolia/react-element-to-jsx-string/compare/2.5.0...v2.6.0) (2016-04-15)


### Features

* **React:** React v15 compat ([37ee7b5](https://github.com/algolia/react-element-to-jsx-string/commit/37ee7b5))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/algolia/react-element-to-jsx-string/compare/2.3.0...2.4.0) (2016-02-02)



<a name="2.3.0"></a>
# [2.3.0](https://github.com/algolia/react-element-to-jsx-string/compare/v2.2.0...2.3.0) (2016-02-02)


### Features

* **deps:** upgrade all deps ([f3e368d](https://github.com/algolia/react-element-to-jsx-string/commit/f3e368d))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/algolia/react-element-to-jsx-string/compare/v2.1.5...v2.2.0) (2016-01-14)



<a name="2.1.5"></a>
## [2.1.5](https://github.com/algolia/react-element-to-jsx-string/compare/v2.1.4...v2.1.5) (2016-01-05)



<a name="2.1.4"></a>
## [2.1.4](https://github.com/algolia/react-element-to-jsx-string/compare/v2.1.3...v2.1.4) (2015-12-10)


### Bug Fixes

* **stateless comps:** add No Display Name as default component name ([dc0f65c](https://github.com/algolia/react-element-to-jsx-string/commit/dc0f65c)), closes [#11](https://github.com/algolia/react-element-to-jsx-string/issues/11)



<a name="2.1.3"></a>
## [2.1.3](https://github.com/algolia/react-element-to-jsx-string/compare/v2.1.0...v2.1.3) (2015-11-30)


### Bug Fixes

* handle <div>{123}</div> ([609ac78](https://github.com/algolia/react-element-to-jsx-string/commit/609ac78)), closes [#8](https://github.com/algolia/react-element-to-jsx-string/issues/8)
* **lodash:** just use plain lodash and import ([062b3fe](https://github.com/algolia/react-element-to-jsx-string/commit/062b3fe))
* **whitespace:** handle {true} {false} ([eaca1a2](https://github.com/algolia/react-element-to-jsx-string/commit/eaca1a2)), closes [#6](https://github.com/algolia/react-element-to-jsx-string/issues/6) [#7](https://github.com/algolia/react-element-to-jsx-string/issues/7)
* **whitespace:** stop rendering it differently in SOME cases ([128aa95](https://github.com/algolia/react-element-to-jsx-string/commit/128aa95))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/algolia/react-element-to-jsx-string/compare/v2.0.5...v2.1.0) (2015-10-25)


### Features

* handle key="" ([da85281](https://github.com/algolia/react-element-to-jsx-string/commit/da85281))
* handle ref="manual-ref" ([5b18191](https://github.com/algolia/react-element-to-jsx-string/commit/5b18191))



<a name="2.0.5"></a>
## [2.0.5](https://github.com/algolia/react-element-to-jsx-string/compare/v2.0.4...v2.0.5) (2015-10-21)


### Bug Fixes

* merge plain strings props replacements ([7c2bf27](https://github.com/algolia/react-element-to-jsx-string/commit/7c2bf27))



<a name="2.0.4"></a>
## [2.0.4](https://github.com/algolia/react-element-to-jsx-string/compare/v2.0.3...v2.0.4) (2015-10-16)


### Bug Fixes

* **tagName:** fixed an edge-case with decorated component name ([9169ac7](https://github.com/algolia/react-element-to-jsx-string/commit/9169ac7))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/algolia/react-element-to-jsx-string/compare/v2.0.2...v2.0.3) (2015-10-16)


### Bug Fixes

* handle arrays the right way ([597a910](https://github.com/algolia/react-element-to-jsx-string/commit/597a910))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/algolia/react-element-to-jsx-string/compare/v2.0.1...v2.0.2) (2015-10-16)


### Bug Fixes

* **children:** ensure the array of children is well handled ([36b462a](https://github.com/algolia/react-element-to-jsx-string/commit/36b462a))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/algolia/react-element-to-jsx-string/compare/v2.0.0...v2.0.1) (2015-10-16)


### Bug Fixes

* handle empty objects ([fe052bd](https://github.com/algolia/react-element-to-jsx-string/commit/fe052bd))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/algolia/react-element-to-jsx-string/compare/v1.1.2...v2.0.0) (2015-10-16)


### Features

* **deep:** handle deeply set functions ([ad21917](https://github.com/algolia/react-element-to-jsx-string/commit/ad21917))
* **deep:** handle deeply set React elements ([a06f329](https://github.com/algolia/react-element-to-jsx-string/commit/a06f329))


### BREAKING CHANGES

* deep: functions are now stringified to `function noRefCheck()
{}` instead of `function () {code;}`. For various reasons AND to be
specific about the fact that we do not represent the function in a
realistic way.



<a name="1.1.2"></a>
## [1.1.2](https://github.com/algolia/react-element-to-jsx-string/compare/v1.1.1...v1.1.2) (2015-10-16)


### Bug Fixes

* handle null and undefined prop values ([9a57a10](https://github.com/algolia/react-element-to-jsx-string/commit/9a57a10)), closes [#1](https://github.com/algolia/react-element-to-jsx-string/issues/1)



<a name="1.1.1"></a>
## [1.1.1](https://github.com/algolia/react-element-to-jsx-string/compare/v1.1.0...v1.1.1) (2015-10-15)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/algolia/react-element-to-jsx-string/compare/3e2e7b8...v1.1.0) (2015-10-15)


### Bug Fixes

* **whitespace:** remove unwanted whitespace in output ([3e2e7b8](https://github.com/algolia/react-element-to-jsx-string/commit/3e2e7b8))


### Features

* sort object keys in a deterministic way ([c1ce8a6](https://github.com/algolia/react-element-to-jsx-string/commit/c1ce8a6))
