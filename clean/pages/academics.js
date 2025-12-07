"use strict";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { safeInject } from "../utils.js";

const pageHeader= () => {
        return `
      <section class="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-arabic font-bold mb-4">Academic Programs</h1>
          <p class="text-xl opacity-90">Comprehensive Islamic Education Following Dars-e-Nizami Curriculum</p>
        </div>
      </section>
    `;
}

const  programsIntro = () => {
       return `
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
  }


const  hafizProgram = () => {
       return `
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
  }

const  alimCourses= () => {
       return `
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
  }



 
const  admissions= () => {
       return `
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

  }

const  academicCal = () =>  {
       return `
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
  }

export const academics = () => {
    const root = document.getElementById("root");
    root.innerHTML = ''; 

    safeInject(header(), root);
    safeInject(pageHeader(), root);
    safeInject(programsIntro(), root);
    safeInject(hafizProgram(), root);
    safeInject(alimCourses(), root);
    safeInject(admissions(), root);
    safeInject(academicCal(), root);
    safeInject(footer(), root);

    // Toggle mobile menu
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });

}


