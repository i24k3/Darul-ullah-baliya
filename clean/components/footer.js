"use strict";
import { colors } from "../colors.js";

export const footer = () => {
  const data = {
    institution: {
      name: "Darul Uloom Bilaliya",
      address: "Ahmada Kadal, Lal Bazar<br>Srinagar, Jammu & Kashmir",
    },
    quickLinks: [
      { href: "/about", text: "About Us" },
      { href: "/academics", text: "Academics" },
      { href: "/admissions", text: "Admissions" },
      { href: "/contact", text: "Contact" },
    ],
    connectLinks: [
      { href: "/multimedia", text: "Audio Lectures" },
      { href: "/multimedia", text: "Photo Gallery" },
      { href: "/resources", text: "Resources" },
      { href: "/support", text: "Support Us" },
    ],
    contact: {
      phone: "+91 99999 99999",
      email: "info@darululoombilaliya.org",
    },
  };

  const linkList = (links) =>
    links
      .map(
        (link) => `
        <li>
          <a 
            href="${link.href}" 
            class="${colors.neutral.dark} hover:${colors.black.base} transition-all duration-300 tracking-wide"
          >
            ${link.text}
          </a>
        </li>
      `
      )
      .join("");

  return `
<footer 
  class="
    relative ${colors.white.bg} 
    border-t ${colors.neutral.border} 
    overflow-hidden 
  "
>

  <!-- Soft premium gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-black/5 via-white/60 to-gray-200/30 pointer-events-none"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12">

      <!-- Institution Info -->
      <div class="lg:col-span-4 space-y-4">
        <h3 class="text-3xl font-bold tracking-tight ${colors.black.base}">
          ${data.institution.name}
        </h3>
        <p class="${colors.neutral.medium} text-sm leading-relaxed">
          ${data.institution.address}
        </p>
      </div>

      <!-- Quick Links -->
      <div class="lg:col-span-2 lg:col-start-5">
        <h4 class="text-lg font-semibold ${colors.black.base} mb-4 tracking-wide">
          Quick Links
        </h4>
        <ul class="space-y-3 text-sm">
          ${linkList(data.quickLinks)}
        </ul>
      </div>

      <!-- Connect -->
      <div class="lg:col-span-3">
        <h4 class="text-lg font-semibold ${colors.black.base} mb-4 tracking-wide">
          Connect With Us
        </h4>
        <ul class="space-y-3 text-sm">
          ${linkList(data.connectLinks)}
        </ul>
      </div>

      <!-- Contact & Newsletter -->
      <div class="lg:col-span-3">
        <h4 class="text-lg font-semibold ${colors.black.base} mb-4 tracking-wide">
          Contact Info
        </h4>

        <div class="space-y-4 ${colors.neutral.dark} text-sm mb-8">

          <p class="flex items-center gap-3">
            <svg class="w-5 h-5 ${colors.secondary.base} flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            ${data.contact.phone}
          </p>

          <p class="flex items-center gap-3">
            <svg class="w-5 h-5 ${colors.secondary.base} flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            ${data.contact.email}
          </p>
        </div>

        <!-- Newsletter -->
        <form class="mt-6 max-w-md" onsubmit="event.preventDefault();">
          <label class="block text-sm font-medium ${colors.neutral.medium} mb-2">
            Subscribe to our newsletter
          </label>

          <div class="flex flex-col sm:flex-row gap-3">

            <input
              type="email"
              required
              placeholder="Your email address"
              class="
                flex-1 px-4 py-3 rounded-md 
                border ${colors.neutral.border} 
                ${colors.neutral.dark}
                bg-white/70 backdrop-blur-sm
                focus:outline-none 
                focus:ring-2 focus:ring-emerald-600/40
                shadow-sm
                placeholder:${colors.neutral.medium}
              "
            >

            <button 
              type="submit"
              class="
                px-6 py-3 rounded-md 
                font-semibold text-sm 
                ${colors.primary.bg} ${colors.white.base}
                ${colors.primary.hover}
                shadow-md hover:shadow-xl 
                transition-all duration-300 
                hover:-translate-y-0.5
              "
            >
              Subscribe
            </button>
          </div>

          <p class="mt-2 text-xs ${colors.neutral.medium}">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </div>

    </div>

    <!-- Bottom -->
    <div 
      class="
        mt-16 border-t ${colors.neutral.border} 
        pt-6 text-center 
        ${colors.neutral.medium} text-sm space-y-1
      "
    >
      <p>© ${new Date().getFullYear()} Darul Uloom Bilaliya. All rights reserved.</p>
      <p class="tracking-wide">Made for the Ummah</p>
    </div>
  </div>
</footer>
`;
};

