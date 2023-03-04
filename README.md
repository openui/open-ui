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

## Contributing

### Uses Astro

The Open UI site is built on top of [Astro](https://astro.build/).

## Routing

Before we migrated to Astro, we manually defined the routes of each page. Because Astro uses file-based routing, it was important to not break pre-existing routes so the folder heirarchy has been updated to match the pre-existing route hierarchy.

This means that there is some inconsistencies in the following areas:

- The hierarchies displayed in the navigation bar don't match with the folder hierarchies in the repo. We have to manually specify the heading a page falls under within the navigation bar using the "menu" property in frontmatter.
- The names for the research component files are inconsistent, to prevent broken links. The majority have the pattern `[component].research.md`, but there are a small handful that are simply `[component].md`.

We can fix this by migrating all pages to their rightful pages while adding any necessary redirects to the `_redirects` file.

You can learn more about routing in Astro using the [documentation](https://docs.astro.build/en/core-concepts/routing/)