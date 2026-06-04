import { execSync } from 'node:child_process'

function git(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim() || null
  } catch {
    return null
  }
}

function gitDate(args, filePath) {
  return git(`git log ${args} --format="%as" -- "${filePath}"`)?.split('\n')[0] || null
}

const repoRoot = git('git rev-parse --show-toplevel')
const remoteUrl = git('git remote get-url origin')
const githubBase = remoteUrl
  ?.replace(/\.git$/, '')
  .replace(/^git@github\.com:/, 'https://github.com/')

/**
 * Remark plugin that:
 * - Injects `lastUpdated` (most recent commit date) into frontmatter if absent.
 * - Injects `created` (first commit date) into frontmatter if absent.
 * - Throws a build error for *.explainer.mdx files that have no `authors`.
 */
export function remarkLastUpdated() {
  return function (_tree, file) {
    const filePath = file.history[0]
    if (!filePath) return

    const fm = (file.data.astro ??= {}).frontmatter ??= {}
    const isExplainer = filePath.includes('.explainer.')

    if (isExplainer) {
      const authors = fm.authors
      const hasAuthors =
        Array.isArray(authors)
          ? authors.length > 0
          : typeof authors === 'string' && authors.trim().length > 0
      if (!hasAuthors) {
        throw new Error(
          `[open-ui] Missing required frontmatter field "authors" in ${filePath}`,
        )
      }

      if (fm.menu === 'Graduated Proposals') {
        const missing = []
        if (!fm.whatwg_issue && !fm.whatwg_pr) missing.push('whatwg_issue/whatwg_pr')
        if (!fm.specification) missing.push('specification')
        if (!fm.mdn) missing.push('mdn')
        if (missing.length) {
          throw new Error(
            `[open-ui] Graduated proposal missing required fields: ${missing.join(', ')} in ${filePath}`,
          )
        }
      }
    }

    if (!fm.lastUpdated) {
      const date = gitDate('-1', filePath)
      if (date) fm.lastUpdated = date
    }

    if (!fm.historyUrl && githubBase && repoRoot) {
      const relativePath = filePath.replace(repoRoot + '/', '')
      fm.historyUrl = `${githubBase}/commits/main/${relativePath}`
    }

    if (!fm.created) {
      const date = gitDate('--diff-filter=A --follow', filePath)
      if (date) fm.created = date
    }
  }
}
