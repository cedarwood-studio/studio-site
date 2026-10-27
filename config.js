// config.js — every PLACEHOLDER below is one of the three things ticket #51/#52 and the
// site README ask Jack to fill in before this goes live on studio.jacksenechal.com.
// Swapping a value here is the only edit needed; nothing else in index.html changes.
window.STUDIO_CONFIG = {
  // Stripe Payment Links, one per tier. Test-mode links are fine for the preview;
  // swap to live links from Bitwarden (STRIPE_RESTRICTED_KEY account) before launch.
  stripeLinks: {
    basic: "https://buy.stripe.com/PLACEHOLDER_BASIC",
    standard: "https://buy.stripe.com/PLACEHOLDER_STANDARD",
    premium: "https://buy.stripe.com/PLACEHOLDER_PREMIUM",
  },

  // Where the "Get an estimate" form POSTs. See README.md "Form endpoint" for the
  // Formspree setup steps and the later brain-intake-endpoint alternative.
  formEndpoint: "https://formspree.io/f/PLACEHOLDER_FORM_ID",

  // Real address lands via issue #52. Until then this is intentionally not a working
  // mailto.
  contactEmail: "hello@PLACEHOLDER",
};
