"use strict";

import { safeInject, navigateTo} from './utils.js';

class AcademicsPage {
  constructor() {
    this.rootElement = document.getElementById('root');
    this.init();
  }

  init() {
    this.renderLayout();
    this.attachEventListeners();
  }

  renderLayout() {
    this.renderHeader();
    this.renderPageHeader();
    this.renderProgramsIntro();
    this.renderHifzProgram();
    this.renderAalimCourse();
    this.renderAdmissions();
    this.renderAcademicCalendar();
    this.renderFooter();
  }

renderHeader() {
    // renderSharedHeader(this.rootElement, 'academics');
}


  renderPageHeader() {
    const pageHeaderHTML = `
      <section class="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-arabic font-bold mb-4">Academic Programs</h1>
          <p class="text-xl opacity-90">Comprehensive Islamic Education Following Dars-e-Nizami Curriculum</p>
        </div>
      </section>
    `;

    safeInject(pageHeaderHTML, this.rootElement);
  }

  renderProgramsIntro() {
    const introHTML = `
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-arabic text-green-700 mb-6">Our Educational Programs</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Darul Uloom Bilaliya offers structured Islamic education programs designed to nurture scholars who are well-grounded in traditional Islamic sciences while being aware of contemporary challenges.
            </p>
          </div>
        </div>
      </section>
    `;

    safeInject(introHTML, this.rootElement);
  }

  renderHifzProgram() {
    const hifzHTML = `
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h2 class="text-3xl md:text-4xl font-arabic text-green-700 mb-4">Hifz-ul-Quran Program</h2>
              <p class="text-lg text-gray-700">
                Our comprehensive Quran memorization program enables students to memorize the entire Holy Quran with proper Tajweed and understanding.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                  </span>
                  Complete memorization of 30 Juz of Quran
                </li>
                <li class="flex items-center">
                  <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                  </span>
                  Tajweed and proper pronunciation
                </li>
                <li class="flex items-center">
                  <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                  </span>
                  Revision schedules to ensure retention
                </li>
              </ul>
              <div class="grid grid-cols-3 gap-4 pt-4">
                <div class="bg-green-50 p-4 rounded-lg text-center">
                  <div class="text-green-700 font-bold text-lg">2-3 Years</div>
                  <div class="text-gray-600 text-sm">Duration</div>
                </div>
                <div class="bg-green-50 p-4 rounded-lg text-center">
                  <div class="text-green-700 font-bold text-lg">8-16 Years</div>
                  <div class="text-gray-600 text-sm">Age Group</div>
                </div>
                <div class="bg-green-50 p-4 rounded-lg text-center">
                  <div class="text-green-700 font-bold text-lg">Annual</div>
                  <div class="text-gray-600 text-sm">Admissions</div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img src="imagesgallery/foryou2.webp" alt="Hifz Class" class="rounded-2xl shadow-2xl w-full h-96 object-cover">
            </div>
          </div>
        </div>
      </section>
    `;

    safeInject(hifzHTML, this.rootElement);
  }

  renderAalimCourse() {
    const aalimHTML = `
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative order-2 lg:order-1">
              <img src="imagesgallery/foryou3.webp" alt="Aalim Course Classroom" class="rounded-2xl shadow-2xl w-full h-96 object-cover">
            </div>
            <div class="space-y-6 order-1 lg:order-2">
              <h2 class="text-3xl md:text-4xl font-arabic text-green-700 mb-4">Aalim Course (Dars-e-Nizami)</h2>
              <p class="text-lg text-gray-700">
                The comprehensive 6-year Aalim course follows the renowned Dars-e-Nizami curriculum, producing scholars well-versed in Islamic sciences.
              </p>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-arabic text-green-700 mb-2">Quranic Sciences</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Tajweed</li>
                    <li>• Tafsir</li>
                    <li>• Qirat</li>
                  </ul>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-arabic text-green-700 mb-2">Hadith Sciences</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Sahih al-Bukhari</li>
                    <li>• Sahih Muslim</li>
                    <li>• Sunan Abu Dawud</li>
                  </ul>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 pt-4">
                <div class="bg-green-50 p-4 rounded-lg text-center">
                  <div class="text-green-700 font-bold text-lg">6 Years</div>
                  <div class="text-gray-600 text-sm">Duration</div>
                </div>
                <div class="bg-green-50 p-4 rounded-lg text-center">
                  <div class="text-green-700 font-bold text-lg">Aalimiyat</div>
                  <div class="text-gray-600 text-sm">Certification</div>
                </div>
                <div class="bg-green-50 p-4 rounded-lg text-center">
                  <div class="text-green-700 font-bold text-lg">Hifz/Equivalent</div>
                  <div class="text-gray-600 text-sm">Eligibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    safeInject(aalimHTML, this.rootElement);
  }

  renderAdmissions() {
    const admissionsHTML = `
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-arabic text-green-700 text-center mb-12">Admission Process</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div class="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
              <h3 class="text-lg font-arabic text-green-700 mb-3">Application</h3>
              <p class="text-gray-600 text-sm">Submit completed application form with required documents</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
              <h3 class="text-lg font-arabic text-green-700 mb-3">Assessment</h3>
              <p class="text-gray-600 text-sm">Basic assessment of current knowledge and memorization</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
              <h3 class="text-lg font-arabic text-green-700 mb-3">Interview</h3>
              <p class="text-gray-600 text-sm">Personal interview with faculty members</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
              <h3 class="text-lg font-arabic text-green-700 mb-3">Admission</h3>
              <p class="text-gray-600 text-sm">Final selection and admission confirmation</p>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-2xl shadow-lg text-center max-w-2xl mx-auto">
            <h3 class="text-2xl font-arabic text-green-700 mb-4">Ready to Begin Your Journey?</h3>
            <p class="text-gray-600 mb-6">Download the admission form or contact our admissions office for more information.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium">
                Download Form
              </button>
              <button class="border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white transition-colors font-medium">
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </section>
    `;

    safeInject(admissionsHTML, this.rootElement);
  }

  renderAcademicCalendar() {
    const calendarHTML = `
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-arabic text-green-700 text-center mb-12">Academic Calendar 2024</h2>
          <div class="max-w-2xl mx-auto space-y-4">
            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600 flex items-center space-x-6">
              <div class="bg-green-100 text-green-700 p-4 rounded-lg text-center min-w-20">
                <div class="font-bold text-lg">15</div>
                <div class="text-sm">March</div>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800 mb-1">New Academic Session Begins</h4>
                <p class="text-gray-600 text-sm">Start of 1446 Hijri academic year</p>
              </div>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600 flex items-center space-x-6">
              <div class="bg-green-100 text-green-700 p-4 rounded-lg text-center min-w-20">
                <div class="font-bold text-lg">01</div>
                <div class="text-sm">April</div>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800 mb-1">Ramadan Break</h4>
                <p class="text-gray-600 text-sm">Special Ramadan schedule begins</p>
              </div>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600 flex items-center space-x-6">
              <div class="bg-green-100 text-green-700 p-4 rounded-lg text-center min-w-20">
                <div class="font-bold text-lg">15</div>
                <div class="text-sm">June</div>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800 mb-1">Annual Examinations</h4>
                <p class="text-gray-600 text-sm">End of year examinations for all classes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    safeInject(calendarHTML, this.rootElement);
  }

  renderFooter() {
    const footerHTML = `
      <footer class="bg-gray-800 text-white pt-16 pb-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 class="text-2xl font-arabic text-green-400 mb-4">Darul Uloom Bilaliya</h3>
              <p class="text-gray-300">Ahmada Kadal, Lal Bazar<br>Srinagar, Jammu & Kashmir</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="#about" class="nav-link text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#academics" class="nav-link text-gray-300 hover:text-white transition-colors">Academics</a></li>
                <li><a href="#admissions" class="nav-link text-gray-300 hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#contact" class="nav-link text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Connect</h4>
              <ul class="space-y-2">
                <li><a href="#lectures" class="nav-link text-gray-300 hover:text-white transition-colors">Audio Lectures</a></li>
                <li><a href="#gallery" class="nav-link text-gray-300 hover:text-white transition-colors">Photo Gallery</a></li>
                <li><a href="#resources" class="nav-link text-gray-300 hover:text-white transition-colors">Resources</a></li>
                <li><a href="#support" class="nav-link text-gray-300 hover:text-white transition-colors">Support Us</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
              <p class="text-gray-300 mb-4">Phone: +91 99999 99999<br>Email: info@darululoombilaliya.org</p>
              <div class="flex">
                <input type="email" placeholder="Your email address" class="flex-1 px-3 py-2 rounded-l text-gray-800 text-sm">
                <button class="bg-green-700 text-white px-4 rounded-r hover:bg-green-800 transition-colors text-sm">Subscribe</button>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Darul Uloom Bilaliya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;

    safeInject(footerHTML, this.rootElement);
  }

  attachEventListeners() {
    setTimeout(() => {
      // Mobile menu
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      const mainNav = document.querySelector('.main-nav');
      
      if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
          mainNav.classList.toggle('hidden');
        });
      }

      // Navigation
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = link.getAttribute('href').replace('#', '');
          navigateTo(page);
        });
      });

      // Language toggle
      const langButtons = document.querySelectorAll('.lang-btn');
      langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          langButtons.forEach(b => {
            b.classList.remove('bg-green-600', 'text-white');
            b.classList.add('text-gray-300');
          });
          btn.classList.add('bg-green-600', 'text-white');
          btn.classList.remove('text-gray-300');
        });
      });
    }, 100);
  }
}

export { AcademicsPage };
