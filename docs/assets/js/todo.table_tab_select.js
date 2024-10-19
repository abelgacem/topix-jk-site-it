// v01
// Handle link clicks to activate tabs
document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      const target = this.getAttribute('data-target'); // Get the target tab ID

      // Show the target tab
      const tab = new bootstrap.Tab(document.querySelector(`${target}-tab`));
      tab.show();

      // Update the active class for tabs
      document.querySelectorAll('.nav-link').forEach(navLink => {
          navLink.classList.remove('active');
      });
      document.querySelector(`${target}-tab`).classList.add('active');
  });
});

{/* <a href="#" class="tab-link" data-target="#readme">Readme</a> */}