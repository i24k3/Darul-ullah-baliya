"use strict";
import { safeInject } from "./utils.js";

const html = `
  <section class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
    <!-- Hero Section -->
    <div class="container mx-auto px-6 py-24 md:py-32 text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">
        Welcome to My Site
      </h1>
      
      <p class="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
        This is a <span class="font-bold text-cyan-400">super-fast</span> vanilla JS single-page app.
      </p>

      <!-- Navigation -->
      <nav class="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
        <a href="/about" class="px-8 py-4 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105">
          About
        </a>
        <a href="/projects" class="px-8 py-4 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105">
          Projects
        </a>
        <a href="/contact" class="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
          Contact
        </a>
      </nav>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-24 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
        Why this site <span class="text-purple-600">rocks</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center text-3xl">No</div>
          <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">No framework bloat</h3>
          <p class="text-gray-600 dark:text-gray-400">Pure vanilla JS. Less than 5KB.</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center text-3xl">Zero</div>
          <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">Zero build step</h3>
          <p class="text-gray-600 dark:text-gray-400">Just open index.html and go.</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center text-3xl">Check</div>
          <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">Clean URLs (no #)</h3>
          <p class="text-gray-600 dark:text-gray-400">Modern routing with History API.</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 flex items-center justify-center text-3xl">Lightning</div>
          <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">Feels instant</h3>
          <p class="text-gray-600 dark:text-gray-400">No jank. No waiting. Pure speed.</p>
        </div>
      </div>
    </div>
  </section>
`;

export const HomePage = () => {
    const root = document.getElementById("root");
    safeInject(html, root);
};

