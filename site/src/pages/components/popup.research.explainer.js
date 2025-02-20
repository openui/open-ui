import { useEffect } from 'preact/hooks'

/**
 *
 * This component acts as a redirect (from [1] to [2]) to ensure backlinks aren't broken.
 * [1] https://open-ui.org/components/popup.research.explainer
 * [2] https://open-ui.org/components/popover.research.explainer
 */

function Page() {
  useEffect(() => {
    return history.replace('/get-involved')
  })

  return null
}

export default Page
