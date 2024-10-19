//v01
document.addEventListener("DOMContentLoaded", function() {
  // Get the current URL fragment (if any)
  var hash = window.location.hash;

  // Check if the hash is set and corresponds to a tab id
  if (hash) {
    // open an alert box
    var targetTab = document.querySelector(hash);
    if (targetTab) {
      // Deactivate currently active tab
      document.querySelector('.tab-pane.active').classList.remove('show', 'active');

      // Activate the target tab
      targetTab.classList.add('show', 'active');
    }
  }
});
