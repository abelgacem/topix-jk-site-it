//v01
document.addEventListener("DOMContentLoaded", function() {
  // Get the current URL fragment (if any)
  var hash = window.location.hash;
  console.log("Hash value:", hash); // Debug info: log the current hash
  
  // Check if the hash is set and corresponds to a tab id
  if (hash) {
    // find the element with id='hash'
    const target = this.getAttribute('data-target'); // Get the target tab ID
    var targetTab = document.querySelector(hash);
    console.log("target tab:hash      =   ", hash);
    console.log("target tab:classList =   ", targetTab.classList);
    console.log("target tab:id        =   ", targetTab.id);
    if (targetTab) {
      // define the element with class='tab-pane active'
      var currentTab = document.querySelector('.tab-pane.active');
      console.log("target tab:classList =   ", currentTab.classList);
      console.log("target tab:id        =   ", currentTab.id);
      // delete the css class "show remove" from this element
      currentTab.classList.remove('show', 'active');
      // add the css class "show remove" to this element
      targetTab.classList.add('show', 'active');
    }
  }
});
