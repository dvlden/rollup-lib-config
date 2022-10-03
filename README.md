# Rollup Config

Config is fully transparent. You don't need to touch it, unless you want
to implement some additional plugins or change output formats.

It is currently configured to output `ES` and `CJS` with type definitions.
For the purpose of module building it is as minimal as possible.

Tests are handled by the Jest testing framework.


## Getting started

- `gh repo clone dvlden/rollup-lib-config`
- `pnpm i`


### Commands

- `pnpm run test` - run all tests
- `pnpm run build` - clean output directory and build for production


## Important Notes

If you cloned my repository and want to use this for modules development, before you push any changes to Git or Npm, make sure to update some important files.

- package.json
- readme
- license
