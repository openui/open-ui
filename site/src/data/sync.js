import fs from 'fs'
const contributorsUrl = `https://api.github.com/repos/openui/open-ui/contributors`
const contributors = await (await fetch(contributorsUrl)).json()
fs.writeFileSync(
  `${process.cwd()}/src/data/contributors.json`,
  JSON.stringify(contributors, undefined, 2),
)
