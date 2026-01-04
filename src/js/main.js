// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import images
import logo from '../assets/images/logos/kbm-logo.png'

// Set logo image (runs after DOM is loaded due to module loading)
const logoElement = document.getElementById('kbm-logo')
if (logoElement) {
  logoElement.src = logo
}

