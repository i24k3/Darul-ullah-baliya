"use strict";

export const hero = () => {
    const heroData = {
        backgroundImage: "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg",
        imageAlt: "Darul Uloom Bilaliya Masjid",
        quote: "Seeking knowledge is an obligation upon every Muslim",
        author: "Prophet Muhammad (Peace and Blessings Be Upon Him)",
        buttons: [
            {
                href: "/admissions",
                text: "Explore Admissions",
                variant: "solid",           // solid = filled green button
            },
            {
                href: "/support",
                text: "Support the Uloom",
                variant: "outline",         // outline = transparent with border
            }
        ]
    };

    const buttonClass = (variant) => {
        const base = "flex-1 sm:flex-initial px-10 py-5 text-lg font-bold rounded-xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center";
        if (variant === "solid") {
            return `${base} bg-green-600 hover:bg-green-700 text-white hover:shadow-green-600/50`;
        }
        return `${base} bg-transparent hover:bg-white hover:text-gray-900 text-white border-2 border-white hover:shadow-white/50`;
    };

    const renderButtons = () => heroData.buttons
        .map(btn => `
            <a href="${btn.href}"
               class="${buttonClass(btn.variant)}">
                ${btn.text}
            </a>
        `)
        .join('');

return `
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 -z-10">
        <img src="${heroData.backgroundImage}"
             alt="${heroData.imageAlt}"
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50"></div>
    </div>

    <!-- ADD z-10 HERE - THIS IS WHAT WAS MISSING -->
    <div class="relative z-10 w-full text-center text-white">
        <div class="container mx-auto px-6 sm:px-8 lg:px-12">
            <div class="max-w-5xl mx-auto">
                <blockquote class="mb-16 animate-fade-in">
                    <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide drop-shadow-2xl">
                        "${heroData.quote}"
                    </h2>
                    <cite class="block mt-10 text-xl sm:text-2xl md:text-3xl font-medium italic opacity-90">
                        — ${heroData.author}
                    </cite>
                </blockquote>
                <div class="flex flex-col sm:flex-row gap-6 justify-center">
                    ${renderButtons()}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in { animation: fade-in 1.4s ease-out forwards; }
</style>
    `;

};


