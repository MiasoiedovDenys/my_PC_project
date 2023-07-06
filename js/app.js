const sections = document.querySelectorAll("section");
const headerLogoImage = document.querySelector(".header__logo-image");
const headerImage = document.querySelector(".main__image-container");
const headerTitle = document.querySelector(".header__title");
const welcomeContainer = document.querySelector(".welcome-container");

const hideElements = () => {
  headerImage.classList.add("hidden");
  headerTitle.classList.add("hidden");
  welcomeContainer.style.cssText = "position: absolute; top: 0; max-width: 1200px";
  sections.forEach((e) => e.classList.add("hidden"));
  document.querySelectorAll(".active_js").forEach((e) => e.classList.remove("active_js"));
};

const showElements = () => {
  headerLogoImage.classList.remove("hidden");
  headerImage.classList.remove("hidden");
  headerTitle.classList.remove("hidden");
  welcomeContainer.style.cssText = "position: inherit;";
  sections.forEach((e) => e.classList.add("hidden"));
  document.querySelectorAll(".active_js").forEach((e) => e.classList.remove("active_js"));
};

const togglePage = (link) => {
  const idPage = link.split("#")[1];
  const section = document.getElementById(idPage);

  sections.forEach((e) => e.classList.add("hidden"));
  hideElements();
  section.classList.remove("hidden");

  const currentLink = document.querySelector(`[href="${link}"]`);
  currentLink.closest("li").classList.add("active_js");
};

document.querySelectorAll(".header__menu a").forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    const link = e.getAttribute("href");

    if (link) {
      togglePage(link);
    }
  });
});

document.querySelector(".header__logo-image").addEventListener("click", showElements);