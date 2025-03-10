document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
      link.addEventListener("click", function() {
          links.forEach(item => item.classList.remove("active"));
          this.classList.add("active");
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let sportSwitch = document.getElementById("sportSwitch");
  let sportText2 = document.getElementById("sportText2");
  let sportText1 = document.getElementById("sportText1");

  // Detect if the user is on football.html
  let isFootballPage = window.location.pathname.includes("football.html");

  if (isFootballPage) {
      sportSwitch.checked = true; // Set switch to Football mode
      sportText2.textContent = "Football"; 
      sportText1.textContent = "Cricket";
  } else {
      sportSwitch.checked = false; // Set switch to Cricket mode
      sportText2.textContent = "Football";
      sportText1.textContent = "Cricket";
  }

  // Toggle between Cricket (Home) and Football page
  sportSwitch.addEventListener("change", function() {
      if (this.checked) {
          window.location.href = "football.html"; // Redirect to Football page
      } else {
          window.location.href = "index.html"; // Redirect to Home (Cricket) page
      }
  });
});
