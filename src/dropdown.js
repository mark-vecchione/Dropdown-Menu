document.addEventListener('DOMContentLoaded', function() {
    // Function to close all dropdown menus
    function closeAllDropdowns() {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.hidden = true;
        menu.classList.remove('show');
        const button = menu.closest('.dropdown').querySelector('.dropdown-button');
        if (button) {
          button.setAttribute('aria-expanded', 'false');
        }
      });
    }
  
    // Initialize dropdown functionality for each dropdown container
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      const button = dropdown.querySelector('.dropdown-button');
      const menu = dropdown.querySelector('.dropdown-menu');
  
      button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from bubbling up
        // Close all other dropdowns before toggling this one
        closeAllDropdowns();
  
        // Toggle the visibility of this dropdown's menu
        if (menu.hidden) {
          menu.hidden = false;
          menu.classList.add('show');
          button.setAttribute('aria-expanded', 'true');
        } else {
          menu.hidden = true;
          menu.classList.remove('show');
          button.setAttribute('aria-expanded', 'false');
        }
      });
    });
  
    // Close all dropdowns when clicking anywhere outside
    document.addEventListener('click', function() {
      closeAllDropdowns();
    });
  });
  