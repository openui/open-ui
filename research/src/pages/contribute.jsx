import { navigate } from 'gatsby'
import { useEffect } from 'react'

/**
 *
 * This component acts as a redirect to ensure backlinks aren't broken.
 * Related: https://github.com/openui/open-ui/issues/303
 */

function ContributePage() {
  useEffect(() => {
    return navigate('/get-involved', { replace: true })
  })

  return null
}

export default ContributePage
