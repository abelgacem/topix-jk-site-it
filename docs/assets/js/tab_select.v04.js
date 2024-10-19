// Function to deactivate all tabs and content
function deactivateTabs() {
    document.querySelectorAll('.nav-link.active, .tab-pane.show').forEach(function(el) {
        el.classList.remove('active', 'show');
    });
  
  }
  
  // Function to activate the specified tab
  function activateTab(targetLink, targetTab) {
    if (targetLink && targetTab) {
        targetLink.classList.add('active');
        targetTab.classList.add('show');
    }
  }
  
  // Main function to handle tab activation based on hash
  function handleTabActivation(hash) {
    if (!hash) return; // If no hash, do nothing
  
    var targetTab = document.querySelector(hash);
    var activeTab = document.querySelector('.tab-pane.active')
    console.log('targetTab:hash = ',hash)
    console.log('targetTab:id   = ',targetTab.id)
    console.log('targetTab:classlist = ',targetTab.classList)
    console.log('activeTab:id        = ',activeTab.id)
    console.log('activeTab:classlist = ',activeTab.classList)
  
    deactivateTabs();
  
    var targetLink = document.querySelector(`.nav-link[href='${hash}']`);
    var targetTab  = document.querySelector(hash);
    // activateTab(targetLink, targetTab);
  
  
  }
  
  // // Function to handle page load and hash changes
  // function onPageLoad() {
  //   handleTabActivation(window.location.hash);
  // }
  
  // Function to handle hash change events
  function onHashChange() {
    console.log('onHashChange activated')
    handleTabActivation(window.location.hash);
  }
  
  // Set up event listeners
  window.addEventListener('hashchange', onHashChange);
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    // Function to activate the correct tab based on hash
    function activateTab(hash) {
      if (!hash) return; // If no hash, do nothing
  
      // Deactivate any currently active tab and content
      document.querySelectorAll('.nav-link.active, .tab-pane.show').forEach(function(el) {
        el.classList.remove('active', 'show');
      });
  
      // Activate the corresponding tab link and content pane
      var targetLink = document.querySelector(`.nav-link[href='${hash}']`);
      var targetTab = document.querySelector(hash);
  
      if (targetLink && targetTab) {
        targetLink.classList.add('active');
        targetTab.classList.add('show');
      }
    }
  
    // Check if a hash is present when the page loads
    activateTab(window.location.hash);
  
    // Listen for any hash changes (e.g., clicking tabs)
    window.addEventListener('hashchange', function() {
      activateTab(window.location.hash);
    });
  });
  
  
  // //v01
  // document.addEventListener("DOMContentLoaded", function() {
  //   // Get the current URL fragment (if any)
  //   var hash = window.location.hash;
  //   console.log("Hash value:", hash); // Debug info: log the current hash
    
  //   // Check if the hash is set and corresponds to a tab id
  //   if (hash) {
  //     // find the element with id='hash'
  //     const targetTab = document.querySelector(hash);
  //     const activeTab = document.querySelector('.tab-pane.active');
  //     console.log("target tab:hash      =   ", hash);
  //     console.log("target tab:classList =   ", targetTab.classList);
  //     console.log("target tab:id        =   ", targetTab.id);
  //     if (targetTab) {
        
  //       // Show the target tab
  //       activeTab.classList.remove('show');
  //       targetTab.classList.add('show');
  
  //       // Deactive tab
  //       activeTab.classList.remove('active');
  //       // // Deactive all tab
  //       // document.querySelectorAll('.nav-link').forEach(navLink => {
  //       // navLink.classList.remove('active');
  //       // });  
        
  //       // Active the target tab
  //       targetTab.classList.add('active');      
  //     }
  //   }
  // });
  
  