(function () {
  "use strict";

  function toggleScrolled() {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");

    if (!header) return;

    if (
      !header.classList.contains("scroll-up-sticky") &&
      !header.classList.contains("sticky-top") &&
      !header.classList.contains("fixed-top")
    ) {
      return;
    }

    window.scrollY > 100
      ? body.classList.add("scrolled")
      : body.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.body.classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  document.querySelectorAll("#navmenu a").forEach(link => {
    link.addEventListener("click", () => {
      if (document.body.classList.contains("mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  const preloader = document.querySelector("#preloader");

  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  const scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (!scrollTop) return;

    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }

  if (scrollTop) {
    scrollTop.addEventListener("click", e => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  function aosInit() {
    AOS.init({
      duration: 650,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }

  window.addEventListener("load", aosInit);

  GLightbox({
    selector: ".glightbox",
  });

  new PureCounter();

  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach(item => {
      item.addEventListener("click", () => {
        item.parentNode.classList.toggle("faq-active");
      });
    });

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(swiperElement => {
      const configElement = swiperElement.querySelector(".swiper-config");
      if (!configElement) return;

      const config = JSON.parse(configElement.innerHTML.trim());
      new Swiper(swiperElement, config);
    });
  }

  window.addEventListener("load", initSwiper);

  window.addEventListener("load", () => {
    if (!window.location.hash) return;

    const section = document.querySelector(window.location.hash);
    if (!section) return;

    setTimeout(() => {
      const scrollMarginTop = getComputedStyle(section).scrollMarginTop;

      window.scrollTo({
        top: section.offsetTop - parseInt(scrollMarginTop),
        behavior: "smooth",
      });
    }, 100);
  });

  const navLinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navLinks.forEach(link => {
      if (!link.hash) return;

      const section = document.querySelector(link.hash);
      if (!section) return;

      const position = window.scrollY + 200;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach(activeLink => activeLink.classList.remove("active"));

        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();
