// Function to activate the tab based on the given tab ID
function activateTab(tabId) {
  const tab = new bootstrap.Tab(document.querySelector(`#${tabId}-tab`));
  tab.show();

  // Update the active class for tabs
  document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.classList.remove('active');
  });
  document.querySelector(`#${tabId}-tab`).classList.add('active');
}

// Handle link clicks to activate tabs
document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      const target = this.getAttribute('data-target').substring(1); // Get the target tab ID without '#'
      activateTab(target);
      // Optionally, update the URL hash
      window.location.hash = target;
  });
});

// Activate the tab based on the URL hash on page load
window.addEventListener('DOMContentLoaded', (event) => {
  const hash = window.location.hash.substring(1); // Get the hash without '#'
  if (hash) {
      activateTab(hash);
  }
});

{/* <a href="tabs.html#readme" class="tab-link">Readme</a> */}
