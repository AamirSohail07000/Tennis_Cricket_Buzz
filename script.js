document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
      link.addEventListener("click", function() {
          links.forEach(item => item.classList.remove("active"));
          this.classList.add("active");
      });
  });
});

document.getElementById("sportSwitch").addEventListener("change", function() {
  let sportText = document.getElementById("sportText");

  if (this.checked) {
      sportText.textContent = "Football";
      window.location.href = "football.html"; // Redirect to Football page
  } else {
      sportText.textContent = "Cricket";
      window.location.href = "cricket.html"; // Redirect to Cricket page
  }
});
