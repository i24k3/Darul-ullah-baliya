"use strict";

export const showPageLoader = (heading = null, subHeading = null, visibleTime = 1500, loaderRemoveDelay = 1000) => {
    if (document.getElementById('page-loader')) return;

    const loaderHTML = `
        <div id="page-loader" class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-sm">
            
            <!-- Soft gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>

            <!-- Ambient soft glows -->
            <div class="absolute top-[-20%] left-[-10%] w-96 h-96 bg-indigo-200/20 rounded-full blur-[130px]"></div>
            <div class="absolute bottom-[-15%] right-[-5%] w-80 h-80 bg-indigo-300/15 rounded-full blur-[120px]"></div>

            <div class="relative z-10 text-center px-6 sm:px-12">
                <!-- Clean title text -->
                <h1 class="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-gray-900">
                    ${heading || "Loading..."}
                </h1>

<!-- Minimal single-ring spinner -->
<div class="relative w-16 h-16 mx-auto mb-6">
    <div class="absolute inset-0 rounded-full border-4 border-gray-300/30"></div>
    <div class="absolute inset-0 rounded-full border-4 border-t-indigo-500 border-b-transparent animate-spin"></div>
</div>
                <!-- Loading subtext -->
                <p class="text-gray-500 text-sm uppercase tracking-wider animate-pulse">
                ${subHeading || "Please wait..."}
                </p>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', loaderHTML);

    // Add reverse animation once
    if (!document.getElementById('spin-reverse-style')) {
        const style = document.createElement('style');
        style.id = 'spin-reverse-style';
        style.textContent = `
            @keyframes spin-reverse {
                from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
            }
            .animate-spin-reverse { animation: spin-reverse 2.5s linear infinite; }
        `;
        document.head.appendChild(style);
    }

    const startTime = Date.now();

    const hide = () => {
        const elapsed = Date.now() - startTime;
        const remaining = visibleTime- elapsed;

        setTimeout(() => {
            const loader = document.getElementById('page-loader');
            if (loader) {
                loader.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
                setTimeout(() => loader.remove(), loaderRemoveDelay);
            }
        }, remaining > 0 ? remaining : 0);
    };

    window.hidePageLoader = hide;
};



