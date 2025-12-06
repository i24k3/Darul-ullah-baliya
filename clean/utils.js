"use strict";

export const safeInject = (htmlString, parentEl, selector = null) => {
    if (typeof htmlString !== 'string' || !parentEl?.appendChild) {
        console.warn('safeInject: invalid arguments');
        return null;
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    let elementToInject = selector ? doc.querySelector(selector) : null;
    if (!elementToInject) elementToInject = doc.body.firstElementChild;
    if (!elementToInject) {
        console.warn('safeInject: No element found in provided HTML string');
        return null;
    }
    parentEl.appendChild(elementToInject);
    return elementToInject;
};

export const safeInjectAll = (htmlString, parentEl) => {
    if (typeof htmlString !== 'string' || !parentEl?.appendChild) {
        console.warn('safeInjectAll: invalid arguments');
        return [];
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const elements = Array.from(doc.body.children);
    if (elements.length === 0) return [];
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

export const goTo = (path = '/', searchString = '') => {
    let pageName = path.replace(/^\/|\/$/g, '') || 'home';
    const root = document.getElementById('root');
    if (!root) return console.error('#root not found');

    const renderFn = pages[pageName] || pages['home'] || pages['/'];
    if (!renderFn) return;

    root.innerHTML = '';
    renderFn(); // This will now read the REAL current window.location.search

    const newUrl = searchString ? `${path}?${searchString}` : path || '/';

    // Only push state if URL actually changed
    if (window.location.pathname + window.location.search !== newUrl) {
        history.pushState({ page: pageName }, '', newUrl);
    }

    window.scrollTo(0, 0);
};

/*
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="/"]');
    if (!link) return;
    if (link.target || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

    e.preventDefault();

    const url = new URL(link.href);
    const newUrl = url.pathname + url.search;

    if (window.location.pathname + window.location.search !== newUrl) {
        history.pushState(null, '', url.href);  // This updates window.location instantly
        const pageName = url.pathname.replace(/^\/|\/$/g, '') || 'home';
        const renderFn = pages[pageName] || pages['home'];
        if (renderFn) {
            document.getElementById('root').innerHTML = '';
            renderFn();
            window.scrollTo(0, 0);
        }
    }
});
*/

document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    // Skip external links, target=_blank, modifier keys, mailto/tel, etc.
    if (
        link.target ||
        e.ctrlKey || e.metaKey || e.shiftKey || e.altKey ||
        link.href.includes('://') && !link.href.startsWith(window.location.origin) ||
        link.href.startsWith('mailto:') ||
        link.href.startsWith('tel:') ||
        link.href.startsWith('#')
    ) return;

    const href = link.getAttribute('href');

    // Only handle internal absolute or root-relative links
    if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();

        // Properly resolve the full URL (handles "/about", "/", "/anounce?id=5", etc.)
        const url = new URL(link.href, window.location.origin);
        const fullPath = url.pathname + url.search;  // ← THIS KEEPS ?id=100 etc.

        // Avoid duplicate history entries
        if (window.location.pathname + window.location.search !== fullPath) {
            history.pushState({ path: fullPath }, '', url.href);
        }

        // Extract page name ("/" → "home", "/about" → "about")
        let pageName = url.pathname.replace(/^\/|\/$/g, '').trim();
        if (pageName === '') pageName = 'home';

        const renderFn = pages[pageName] || pages['home'] || pages['/'];
        if (renderFn) {
            const root = document.getElementById('root');
            if (root) {
                root.innerHTML = '';
                renderFn();                 // ← Your page reads location.search here if needed
                window.scrollTo(0, 0);
            }
        }
    }
});



export const initRouter = () => {
    window.addEventListener('popstate', () => {
        const search = window.location.search.substring(1);
        goTo(window.location.pathname, search);
    });

    const initialSearch = window.location.search.substring(1);
    goTo(window.location.pathname, initialSearch);
};
