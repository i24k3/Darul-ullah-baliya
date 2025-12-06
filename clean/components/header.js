"use strict";
import { colors } from "../colors.js";

export const header = () => {
      const headerData = {
    logo: {
      path: "/",
      src: "https://cdn-icons-png.flaticon.com/128/17517/17517807.png", // Replace with real logo later
      alt: "Darul Uloom Bilaliya",
      arabicName: "دار العلوم بلالية",
      englishName: "Darul Uloom Bilaliya"
    },
    navLinks: [
      { href: "/about", text: "About" },
      { href: "/academics", text: "Academics" },
      { href: "/admissions", text: "Admissions" },
      { href: "/anounce", text: "Announcements" },
      { href: "/contact", text: "Contact" }
    ],
    ctaButton: {
      href: "/support",
      text: "Support Us"
    }
  };

    const renderNavItems = (size = "desktop") => {
        const textSize = size === "mobile" ? "text-lg" : "text-base font-medium";
        return headerData.navLinks
            .map(link => `
                <li>
                    <a href="${link.href}"
                       class="${size === 'mobile' ? 'block' : ''} ${textSize} ${colors.neutral.dark} hover:${colors.black.base} transition-colors duration-300">
                        ${link.text}
                    </a>
                </li>
            `)
            .join('');
    };

    const renderCTAButton = (size = "desktop") => {
        const baseClasses = `transition transform font-semibold rounded-lg shadow-sm hover:shadow-md duration-300`;

        const desktopClasses = `${colors.primary.bg} hover:${colors.primary.hover} ${colors.white.base} px-6 py-3 hover:-translate-y-0.5`;
        const mobileClasses = `block w-full ${colors.primary.bg} hover:${colors.primary.hover} ${colors.white.base} py-4 text-lg rounded-lg`;

        return `
            <li ${size === "mobile" ? 'class="pt-4"' : ''}>
                <a href="${headerData.ctaButton.href}"
                   class="${baseClasses} ${size === 'mobile' ? mobileClasses : desktopClasses}">
                    ${headerData.ctaButton.text}
                </a>
            </li>
        `;
    };

    return `
<header class="fixed top-0 left-0 right-0 z-50 ${colors.white.bg}/80 backdrop-blur-md border-b ${colors.neutral.border} shadow-sm">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-center justify-between h-20">
            <!-- Logo Section -->
            <a href="${headerData.logo.path}" class="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                <img
                    src="${headerData.logo.src}"
                    alt="${headerData.logo.alt}"
                    class="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-lg shadow-sm"
                >
                <div class="text-left leading-tight">
                    <h1 class="text-lg sm:text-xl md:text-2xl font-bold ${colors.black.base} tracking-wide leading-none">
                        ${headerData.logo.arabicName}
                    </h1>
                    <p class="text-xs sm:text-sm md:text-base ${colors.neutral.medium} font-medium leading-none mt-1">
                        ${headerData.logo.englishName}
                    </p>
                </div>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:block">
                <ul class="flex items-center gap-8 xl:gap-10">
                    ${renderNavItems("desktop")}
                    ${renderCTAButton("desktop")}
                </ul>
            </nav>

            <!-- Mobile Menu Button -->
            <button
                class="mobile-menu-btn lg:hidden ${colors.black.base} p-2 -mr-2"
                aria-label="Open menu"
            >
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu hidden lg:hidden ${colors.white.bg}/95 backdrop-blur-md border-t ${colors.neutral.border} shadow-md">
        <div class="px-6 py-8">
            <ul class="space-y-6 text-center">
                ${renderNavItems("mobile")}
                ${renderCTAButton("mobile")}
            </ul>
        </div>
    </div>
</header>

<script>
    // Mobile menu toggle
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.mobile-menu-btn');
        if (btn) {
            document.querySelector('.mobile-menu').classList.toggle('hidden');
        }
    });
</script>
    `;
};



