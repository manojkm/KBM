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

  // Toggle star icon in email viewer header
  document.addEventListener('click', function(e) {
    const starButton = e.target.closest('.email-action-star')
    if (starButton) {
      e.preventDefault()
      starButton.classList.toggle('starred')
      
      // Update tooltip text
      const tooltipInstance = bootstrap.Tooltip.getInstance(starButton)
      if (tooltipInstance) {
        const isStarred = starButton.classList.contains('starred')
        tooltipInstance.setContent({ '.tooltip-inner': isStarred ? 'Unstar' : 'Star' })
      }
    }
  })

  // Handle Message Recipients collapse icon rotation
  const recipientsCollapse = document.getElementById('messageRecipientsCollapse')
  if (recipientsCollapse) {
    const collapseButton = document.querySelector('[data-bs-target="#messageRecipientsCollapse"]')
    if (collapseButton) {
      recipientsCollapse.addEventListener('show.bs.collapse', function() {
        collapseButton.querySelector('i').classList.remove('bi-chevron-up')
        collapseButton.querySelector('i').classList.add('bi-chevron-down')
      })
      recipientsCollapse.addEventListener('hide.bs.collapse', function() {
        collapseButton.querySelector('i').classList.remove('bi-chevron-down')
        collapseButton.querySelector('i').classList.add('bi-chevron-up')
      })
    }
  }

  // Handle "Select All" checkbox for recipients
  const selectAllRecipients = document.getElementById('selectAllRecipients')
  if (selectAllRecipients) {
    selectAllRecipients.addEventListener('change', function() {
      const checkboxes = document.querySelectorAll('#messageRecipientsCollapse tbody input[type="checkbox"]')
      checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllRecipients.checked
      })
    })
  }
})

