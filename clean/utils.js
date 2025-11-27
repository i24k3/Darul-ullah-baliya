"use strict";


/**
 * Safely injects an HTML string into a parent element by parsing it with DOMParser.
 * This avoids using innerHTML directly and reduces XSS risks.
 *
 * @param {string} htmlString - A string containing valid HTML (can be a single element or fragment).
 * @param {Element} parentEl - The real DOM element that will receive the new content.
 * @param {string} [selector=null] - Optional CSS selector to pick a specific element from the parsed HTML. If omitted, the first element child in <body> is used.
 *
 * @returns {Element|null} The injected element, or null if nothing was found/injected.
 *
 * @example
 * safeInject('<div class="card">Hello</div>', document.body);
 * safeInject('<ul><li>Item 1</li><li>Item 2</li></ul>', container, 'ul');
 *
 */
export const safeInject = (htmlString, parentEl, selector = null) => {
    if (typeof htmlString !== 'string' || !parentEl?.appendChild) {
        console.warn('safeInject: invalid arguments');
        return null;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // If a selector is provided, try to find that exact element
    let elementToInject = selector ? doc.querySelector(selector) : null;

    // Fallback: if no selector or not found, take the first element in <body>
    if (!elementToInject) {
        elementToInject = doc.body.firstElementChild; 
    }

    if (!elementToInject) {
        console.warn('safeInject: No element found in provided HTML string');
        return null;
    }

    // Actually move the element into the real DOM
    parentEl.appendChild(elementToInject);
    return elementToInject;
};

/**
 * Injects ALL top-level elements from an HTML string (useful for fragments).
 *
 * @param {string} htmlString
 * @param {Element} parentEl
 * @returns {Element[]} Array of injected elements
 *
 * @example
 * safeInjectAll('<h1>Title</h1><p>Paragraph 1</p><p>Paragraph 2</p>', section);
 */
export const safeInjectAll = (htmlString, parentEl) => {
    if (typeof htmlString !== 'string' || !parentEl?.appendChild) {
        console.warn('safeInjectAll: invalid arguments');
        return [];
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const elements = Array.from(doc.body.children); 

    if (elements.length === 0) {
        console.warn('safeInjectAll: No elements found in HTML string');
        return [];
    }

    const injected = [];
    for (const el of elements) {
        parentEl.appendChild(el);
        injected.push(el);
    }

    return injected;
};


const pages = {};

export const addPage = (name, renderFn) => {
    pages[name] = renderFn;
};

export const goTo = (path = '/') => {
    let pageName = path.replace(/^\/|\/$/g, '');  // "/about" → "about", "/" → ""

    if (pageName === '/' || pageName === '') pageName = 'home';

    const root = document.getElementById('root');
    if (!root) return console.error('#root not found');

    root.innerHTML = '';

    const pageFn = pages[pageName] || pages['/']; 
    pageFn();

    history.pushState({ page: pageName }, '', path || '/');
};

document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="/"]');
    if (link && !link.target && !e.ctrlKey && !e.metaKey) {
        const path = new URL(link.href).pathname;
        if (path !== window.location.pathname) {
            e.preventDefault();
            goTo(path);
        }
    }
});

export const initRouter = () => {
    goTo(window.location.pathname); // initial page
};
