
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu").querySelector("ul");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

