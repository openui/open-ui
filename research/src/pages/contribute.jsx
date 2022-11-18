import { useEffect } from 'react'

/**
 *
 * This component acts as a redirect to ensure backlinks aren't broken.
 * Related: https://github.com/openui/open-ui/issues/303
 */

function ContributePage() {
  useEffect(() => {
    return history.replace('/get-involved')
  })

  return null
}

export default ContributePage
