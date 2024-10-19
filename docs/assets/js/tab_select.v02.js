//v02
document.addEventListener("DOMContentLoaded", function() {
  // Get the current URL fragment (if any)
  var hash = window.location.hash;
  console.log("Hash value:", hash); // Debug info: log the current hash

  // Check if the hash is set and corresponds to a tab id
  if (hash) {
    var targetTab = document.querySelector(hash);
    console.log("Target tab element:", targetTab); // Debug info: log the target tab element

    if (targetTab) {
      // Deactivate currently active tab
      var activeTab = document.querySelector('.tab-pane.active');
      if (activeTab) {
        console.log("Deactivating tab:", activeTab); // Debug info: log the currently active tab
        activeTab.classList.remove('show', 'active');
      } else {
        console.log("No active tab found to deactivate."); // Debug info: active tab not found
      }

      // Activate the target tab
      console.log("Activating tab:", targetTab); // Debug info: log the tab being activated
      targetTab.classList.add('show', 'active');
    } else {
      console.log("No tab found for hash:", hash); // Debug info: target tab not found
    }
  } else {
    console.log("No hash found in URL."); // Debug info: no hash present
  }
});
