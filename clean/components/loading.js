
"use strict";
/**
 * Full-page loader – Minimal, Elegant, Professional
 * Beautiful animated Bismillah with subtle geometric harmony
 */
export const showPageLoader = () => {
    if (document.getElementById('page-loader')) return;

    const loaderHTML = `
        <div id="page-loader" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            <!-- Deep dark gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-zinc-950"></div>
            
            <!-- Very subtle Islamic geometric pattern in dark emerald -->
            <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M60 15 L73 45 L60 75 L47 45 Z M40 50 L50 75 L70 75 L60 100 L50 75 Z\" fill=\"none\" stroke=\"%23184336\" stroke-width=\"2\"/%3E%3C/svg%3E')] bg-repeat"></div>

            <div class="relative z-10 text-center px-8">
                <!-- Bismillah in luxurious gold → emerald gradient text -->
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-wide mb-8 
                           text-white
                           drop-shadow-2xl">
                    Bismillah...
                </h1>

                <!-- Premium dual-ring spinner (gold + emerald) -->
                <div class="relative w-24 h-24 mx-auto mb-12">
                    <!-- Outer faint ring -->
                    <div class="absolute inset-0 rounded-full border-4 border-emerald-900/40"></div>
                    
                    <!-- Inner spinning ring - emerald -->
                    <div class="absolute inset-2 rounded-full border-4 border-t-emerald-500 border-r-emerald-400 border-b-transparent border-l-transparent animate-spin"></div>
                    
                    <!-- Outer spinning ring - gold (reverse direction) -->
                    <div class="absolute inset-0 rounded-full border-4 border-t-amber-400 border-l-amber-300 border-b-transparent border-r-transparent animate-spin-reverse"></div>
                </div>

                <!-- Subtle loading text -->
                <p class="text-white font-medium text-lg tracking-widest animate-pulse">
                    Loading Darul Uloom Bilaliya...
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

    const minDelay = 1400;
    const startTime = Date.now();

    const hide = () => {
        const elapsed = Date.now() - startTime;
        const remaining = minDelay - elapsed;

        setTimeout(() => {
            const loader = document.getElementById('page-loader');
            if (loader) {
                loader.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
                setTimeout(() => loader.remove(), 1000);
            }
        }, remaining > 0 ? remaining : 0);
    };

    window.hidePageLoader = hide;
};

/*
export const showPageLoader = () => {
    if (document.getElementById('page-loader')) return;

    const loaderHTML = `
        <div id="page-loader" class="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <!-- Subtle Islamic geometric overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50"></div>
            <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M50 10 L60 30L50 50L40 30Z M30 40L40 60L60 60L50 80L40 60Z\" fill=\"none\" stroke=\"%2309762f\" stroke-width=\"1\"/%3E%3C/svg%3E')]"></div>

            <div class="relative z-10 text-center px-8">
                <!-- Bismillah Calligraphy -->
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-emerald-800 leading-tight tracking-wide mb-8" >
                    Bismillah...
                </h1>

                <!-- Elegant Rotating Ring with Star -->
<!-- Dual Arc Spinner -->
<div class="relative w-20 h-20 mx-auto mb-10">
    <div class="absolute inset-0 rounded-full border-2 border-emerald-300/30"></div>
    <div class="absolute inset-0 rounded-full border-2 
                border-t-emerald-600 border-b-emerald-600 
                border-l-transparent border-r-transparent
                animate-spin"></div>
</div>
                <p class="text-emerald-700 font-medium text-lg tracking-wider animate-pulse">
                    Loading Darul Uloom Bilaliya...
                </p>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', loaderHTML);

    const minDelay = 1200;
    const startTime = Date.now();

    const hide = () => {
        const elapsed = Date.now() - startTime;
        const remaining = minDelay - elapsed;

        setTimeout(() => {
            const loader = document.getElementById('page-loader');
            if (loader) {
                loader.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
                setTimeout(() => loader.remove(), 1000);
            }
        }, remaining > 0 ? remaining : 0);
    };

    window.hidePageLoader = hide;
};
*/

/**
 * Inline loader – Clean, respectful, and professional
 * Perfect for buttons and forms
 */
export const showInlineLoader = (element, text = "سُبْحَانَ ٱللَّٰهِ") => {
    if (!element) return;

    const originalHTML = element.innerHTML;
    const originalDisabled = element.disabled;

    element.disabled = true;
    element.innerHTML = `
        <span class="flex items-center gap-3 py-1">
            <!-- Minimal elegant spinner -->
            <svg class="w-5 h-5 text-emerald-600 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" class="opacity-20"/>
                <path d="M12 2 A10 10 0 0 1 22 12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <span class="font-medium text-emerald-700 font-arabic text-base tracking-wide">${text}</span>
        </span>
    `;

    return () => {
        element.innerHTML = originalHTML;
        element.disabled = originalDisabled;
    };
};

/*
"use strict";
export const showpageloader = () => {
    // prevent multiple injections
    if (document.getelementbyid('page-loader')) return;

    const loaderhtml = `
        <div id="page-loader" class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
            <!-- animated islamic geometric background pattern -->
            <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600"></div>
                <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg width="60" height="60" viewbox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3e%3cg fill="none" fill-rule="evenodd"%3e%3cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-6-14v4h-2v-4h-4v-2h4v-4h2v4h4v2h-4z" fill="%231e40af"/%3e%3c/g%3e%3c/svg%3e')]"></div>
            </div>

            <div class="relative z-10 text-center">
                <!-- bismillah in beautiful arabic calligraphy -->
                <div class="mb-12 animate-pulse">
                    <h1 class="text-6xl md:text-8xl font-arabic text-green-800 mb-12 leading-none tracking-wide"
                        style="font-family: 'amiri', 'scheherazade new', serif; text-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                        بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </h1>
                    <p class="text-2xl md:text-3xl text-green-700 mt-10 opacity-90 font-medium">
                        in the name of allah, the most gracious, the most merciful
                    </p>
                </div>

                <!-- elegant spinner with islamic star pattern -->
                <div class="relative w-24 h-24 mx-auto">
                    <div class="absolute inset-0 rounded-full border-8 border-transparent border-green-200"></div>
                    <div class="absolute inset-0 rounded-full border-8 border-t-green-600 border-r-emerald-500 border-b-teal-500 border-l-transparent animate-spin"></div>
                    <div class="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                        <span class="text-3xl">⭐</span>
                    </div>
                </div>

                <p class="mt-10 text-lg text-green-700 font-medium animate-fade-in">
                    loading darul uloom bilaliya...
                </p>
            </div>
        </div>
    `;

    document.body.insertadjacenthtml('afterbegin', loaderhtml);

    // auto-hide after minimum 1.2 seconds (feels natural)
    const mindelay = 1200;
    const starttime = date.now();

    const hide = () => {
        const elapsed = date.now() - starttime;
        const remaining = mindelay - elapsed;

        settimeout(() => {
            const loader = document.getelementbyid('page-loader');
            if (loader) {
                loader.classlist.add('opacity-0', 'transition-opacity', 'duration-700');
                settimeout(() => loader.remove(), 700);
            }
        }, remaining > 0 ? remaining : 0);
    };

    // expose hide function globally for app.js to call when ready
    window.hidepageloader = hide;
};
export const showinlineloader = (element, text = "سُبْحَانَ ٱللَّٰهِ") => {
    if (!element) return;

    const originalhtml = element.innerhtml;
    const originaldisabled = element.disabled;

    // disable button and show loader
    element.disabled = true;
    element.innerhtml = `
        <span class="flex items-center justify-center gap-3">
            <svg class="animate-spin h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentcolor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentcolor" d="m4 12a8 8 0 018-8v0c5.373 0 0 5.373 0 12h4zm2 5.291a7.962 7.962 0 014 12h0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-arabic text-lg animate-pulse">${text}</span>
        </span>
    `;

    // return a function to restore original state
    return () => {
        element.innerhtml = originalhtml;
        element.disabled = originaldisabled;
    };
};
*/
