import './toggle-menu-button.css'
import 'invokers-polyfill'

function ToggleMenuButton() {
  return (
    <button
      type="button"
      className="header-menu-btn"
      aria-label="Toggle menu"
      title="Toggle menu"
      aria-expanded="false"
      command="--toggle-menu"
      commandfor="site-nav"
      aria-controls="site-nav"
    >
      <svg
        aria-hidden="true"
        style="height: 1em; font-size: 1.25em"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </button>
  )
}

export default ToggleMenuButton
