// Import our custom CSS
import '../scss/styles.scss'

// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import images
import logo from '../assets/images/logos/kbm-logo.png'

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Set logo image
  const logoElement = document.getElementById('kbm-logo')
  if (logoElement) {
    logoElement.src = logo
  }

  // Initialize Bootstrap tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})

