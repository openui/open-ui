# Open UI

> The purpose of [Open UI](https://open-ui.org/) to the web platform is to allow web developers to style and extend built-in web UI controls, such as \<select> dropdowns, checkboxes, radio buttons, and date/color pickers.

You can learn how to contribute by reading our [getting involved](https://open-ui.org/get-involved) guide. Our guide runs through the entire standardization process, from research, to review, to completion

## Running the repo

Prerequisites:

1. [Install Node.js](https://nodejs.org), (ensure the version of Node you use is specified in the .nvmrc file)
2. [Install the yarn package manager](https://yarnpkg.com/getting-started/install)

Other useful tools:

1. [Install nvm](https://github.com/nvm-sh/nvm), to help manage your installed node versions.

## Useful Commands

Run these commands from the context of this `research` directory, as opposed to the root directory. This list contains the most useful commands. You should run `yarn run` to see all scripts.

```sh
yarn              # install dependencies

yarn start        # run docs
yarn build        # build docs

nvm use           # use the correct version of `node`
nvm install       # install the version of node specified in `.nvmrc`
```

## Deployments

The site is deployed automatically on merge to `main`.
