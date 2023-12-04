function toggleNav() {
  var sideNav = document.getElementById("slide-out");
  var mainContent = document.getElementById("main-content-container");
  var navbarLogo = document.getElementById("navbar-logo");

  if (sideNav.style.width === "250px" || sideNav.style.width === "") {
    // Close the side navigation
    sideNav.style.width = "0";
    mainContent.style.marginLeft = "0";
    navbarLogo.style.transition = "opacity 0.5s";
    navbarLogo.style.opacity = 1; // Show the logo in the navbar
    updateColumnClasses("col-md-6", "col-lg-3"); // Use 2 columns for larger screens
  } else {
    // Open the side navigation
    sideNav.style.width = "250px";
    mainContent.style.marginLeft = "250px";
    navbarLogo.style.transition = "opacity 0.5s";
    navbarLogo.style.opacity = 0; // Hide the logo in the navbar
    updateColumnClasses("col-md-4", "col-lg-4"); // Use 3 columns for larger screens
  }
}

function updateColumnClasses(mdClass, lgClass) {
  var columns = document.getElementsByClassName("card-column");
  for (var i = 0; i < columns.length; i++) {
    columns[i].classList.remove("col-md-4", "col-lg-4", "col-md-6", "col-lg-3");
    columns[i].classList.add(mdClass, lgClass);
  }
}
