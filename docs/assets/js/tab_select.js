//v01
// document.addEventListener("DOMContentLoaded", function() {
document.addEventListener("DOMContentLoaded", function() {
  
  // Get the current URL fragment (if any)
  var hashTabContent  = window.location.hash;
  var hashTabNav      = hashTabContent + "-tab"; 
  console.log('hashTabContent  = ', hashTabContent)
  console.log('hashTabNav      = ', hashTabNav)

  // Check if the hash is set and corresponds to a tab id
  if (hashTabContent) {
    var targetContent = document.querySelector(hashTabContent);
    var targetNav     = document.querySelector(hashTabNav);
    var activeContent = document.querySelector('.tab-pane.active');
    var activeNav     = document.querySelector('.nav-link.active');
    console.log('targetContent = ', targetContent)
    console.log('targetNav     = ', targetNav)
    console.log('activeContent = ', activeContent)
    console.log('activeNav     = ', activeNav)
    if (targetContent) {
      
      // Deactivate all Tab
      document.querySelectorAll('.nav-link.active, .tab-pane.show').forEach(function(el) {
        el.classList.remove('active', 'show');
      });

      // Active target
      targetNav.classList.add('active');
      targetContent.classList.add('show');
      targetContent.classList.add('active');

      
      // Remove the hash from the URL
      // history.replaceState(null, '', window.location.pathname + window.location.search);
      
    }
  }
});
// if (!hash) return; // If no hash, do nothing
// document.querySelector('.tab-pane.active').classList.remove('show', 'active');      