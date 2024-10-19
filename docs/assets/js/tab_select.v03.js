// v03
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
      var activeLink = document.querySelector('.nav-link.active'); // Assuming you have nav links to activate/deactivate

      if (activeTab) {
        console.log("Deactivating tab content:", activeTab); // Debug info: log the currently active tab content
        activeTab.classList.remove('show', 'active');
      } else {
        console.log("No active tab content found to deactivate."); // Debug info: active tab content not found
      }

      if (activeLink) {
        console.log("Deactivating active link:", activeLink); // Debug info: log the currently active link
        activeLink.classList.remove('active');
      } else {
        console.log("No active link found to deactivate."); // Debug info: active link not found
      }

      // Activate the target tab content
      console.log("Activating tab content:", targetTab); // Debug info: log the tab content being activated
      targetTab.classList.add('show', 'active');

      // Activate the corresponding tab link
      var targetLink = document.querySelector(`.nav-link[href='${hash}']`); // Assuming links have href attributes matching the hash
      if (targetLink) {
        console.log("Activating corresponding link:", targetLink); // Debug info: log the link being activated
        targetLink.classList.add('active');
      } else {
        console.log("No corresponding link found for hash:", hash); // Debug info: no corresponding link found
      }
    } else {
      console.log("No tab found for hash:", hash); // Debug info: target tab not found
    }
  } else {
    console.log("No hash found in URL."); // Debug info: no hash present
  }
});
