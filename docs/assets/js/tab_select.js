//v01
// document.addEventListener("DOMContentLoaded", function() {
document.addEventListener("hashchange", function() {
  
  // Get the current URL fragment (if any)
  var hash = window.location.hash;
  console.log('hash = ', hash)

  // Check if the hash is set and corresponds to a tab id
  if (hash) {
    var targetTab = document.querySelector(hash);
    var activeTab = document.querySelector('.tab-pane.active');
    console.log('targetTab = ', targetTab)
    console.log('activeTab = ', activeTab)
    if (targetTab) {
      
      // show target tab
      targetTab.classList.add('show');

      // Deactivate previous active tab
      document.querySelector('.tab-pane.active').classList.remove('show', 'active');      

      // Activate the target tab
      targetTab.classList.add('active');

      // Remove the hash from the URL
      history.replaceState(null, '', window.location.pathname + window.location.search);

    }
  }
});
