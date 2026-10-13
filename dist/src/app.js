import { business } from "./data/business.js";
import { faqs } from "./data/knowledge-base.js";
import { mountSynqrixChatbot } from "./components/SynqrixChatbotMount.js";

const telHref = `tel:${business.phone.e164}`;
document.querySelectorAll("[data-phone-link]").forEach((link) => link.setAttribute("href", telHref));
document.querySelectorAll("[data-booking-link]").forEach((link) => {
  link.setAttribute("href", business.booking.url);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});
document.querySelectorAll("[data-map-link]").forEach((link) => {
  link.setAttribute("href", business.mapsSearchUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});
document.querySelector("[data-year]").textContent = new Intl.DateTimeFormat("tr-TR", { year: "numeric", timeZone: business.timeZone }).format(new Date());

const serviceRoot = document.querySelector("[data-services]");
serviceRoot.innerHTML = business.services.map((service, index) => `
  <article class="service-card reveal">
    <span class="service-index">0${index + 1}</span>
    <div><h3>${service.title}</h3><p>${service.summary}</p></div>
    <a class="service-link" href="${business.booking.url}" target="_blank" rel="noopener noreferrer" aria-label="${service.title} için randevu seçeneklerini aç">↗</a>
  </article>`).join("");

const faqRoot = document.querySelector("[data-faqs]");
faqRoot.innerHTML = faqs.map((faq) => `
  <details class="faq-item reveal">
    <summary>${faq.question}</summary>
    <div class="faq-answer"><p>${faq.answer}</p></div>
  </details>`).join("");

const schema = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "LocalBusiness"],
  name: business.name,
  telephone: business.phone.e164,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.district,
    addressRegion: business.address.city,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country
  }
};
document.querySelector("#business-schema").textContent = JSON.stringify(schema);

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
const closeMenu = () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
};
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

const header = document.querySelector("[data-header]");
const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

mountSynqrixChatbot();
