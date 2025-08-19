// Smooth scroll for "Discover Our Story" button
document.getElementById("discover-btn").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Form submission handling (demo)
document.getElementById("farmerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Farmer login successful (demo only)");
});

document.getElementById("buyerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Buyer login successful (demo only)");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! We will contact you soon.");
});