import { useEffect } from 'preact/hooks'

function Page() {
  useEffect(() => {
    return history.replace('/get-involved')
  })

  return null
}

export default Page
