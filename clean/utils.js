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

/*
export const goTo = (path = '/', search = '') => {
    let pageName = path.replace(/^\/|\/$/g, '') || 'home';

    const root = document.getElementById('root');
    if (!root) return console.error('#root not found');

    const renderFn = pages[pageName] || pages['home'] || pages['/'];
    if (!renderFn) return;

    root.innerHTML = '';
    renderFn();                                    // ← this reads window.location.search

    const finalUrl = search ? `${path}?${search}` : path || '/';

    if (window.location.pathname + window.location.search !== finalUrl) {
        history.pushState({ page: pageName }, '', finalUrl);
    }
    window.scrollTo(0, 0);
};
*/
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

    const url = new URL(link.href);
    const path = url.pathname;
    const search = url.search.substring(1);   

    e.preventDefault();                       

    // Only navigate if URL actually changed (prevents double-click bug)
    if (window.location.pathname !== path || window.location.search.substring(1) !== search) {
        goTo(path, search);
    }
});
*/
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

export const initRouter = () => {
    window.addEventListener('popstate', () => {
        const search = window.location.search.substring(1);
        goTo(window.location.pathname, search);
    });

    const initialSearch = window.location.search.substring(1);
    goTo(window.location.pathname, initialSearch);
};
