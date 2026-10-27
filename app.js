// app.js — a few lines, no dependencies. Wires config.js values into the page and handles
// the "Get an estimate" preselect links from the "Also on the menu" section.
(function () {
  var cfg = window.STUDIO_CONFIG || {};

  // Buy buttons -> Stripe Payment Links (see config.js / README.md for the real links).
  document.querySelectorAll(".buy-btn").forEach(function (el) {
    var tier = el.getAttribute("data-tier");
    if (cfg.stripeLinks && cfg.stripeLinks[tier]) {
      el.href = cfg.stripeLinks[tier];
    }
  });

  // Estimate form -> configured endpoint (Formspree-style placeholder; see README.md).
  var form = document.getElementById("estimate-form");
  if (form && cfg.formEndpoint) {
    form.action = cfg.formEndpoint;
  }

  // Footer email (real address lands via issue #52; placeholder is not a live mailto).
  var footerEmail = document.getElementById("footer-email");
  if (footerEmail && cfg.contactEmail) {
    footerEmail.textContent = cfg.contactEmail;
    footerEmail.href = "mailto:" + cfg.contactEmail;
  }

  // "Also on the menu" rows jump to the form and preselect the matching offer.
  document.querySelectorAll('a[data-preselect]').forEach(function (el) {
    el.addEventListener("click", function () {
      var offerField = document.getElementById("offer");
      if (offerField) offerField.value = el.getAttribute("data-preselect");
    });
  });
})();
