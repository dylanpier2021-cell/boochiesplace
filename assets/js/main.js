/* Boochie's Slots and Video Poker - minimal vanilla JS
   1) Mobile nav toggle  2) Lazy-load reveal on scroll
   Deferred via <script defer>, so the DOM is ready on run. */
(function () {
  "use strict";

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  var backdrop = document.querySelector(".nav-backdrop");

  function closeNav() {
    if (!links) return;
    links.classList.remove("open");
    if (backdrop) backdrop.classList.remove("show");
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    if (!links) return;
    links.classList.add("open");
    if (backdrop) backdrop.classList.add("show");
    document.body.classList.add("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      if (open) closeNav();
      else openNav();
    });

    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });

    if (backdrop) backdrop.addEventListener("click", closeNav);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---- Reveal on scroll + native lazy images ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---- Footer year ---- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
