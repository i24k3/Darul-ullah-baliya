"use strict";
export const safeInject = (htmlString, container, selector = null) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const element = selector ? doc.querySelector(selector) : doc.body.firstChild;

    if (element) {
        container.appendChild(element);
        return element;
    }
    console.warn("failed to parse element");
    return null;
}

export const safeInjectAll = (htmlString, container) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const elements = Array.from(doc.body.children);
    elements.forEach(el => container.appendChild(el));

    return elements;
}

// Page registry
const pages = {};

// Register page classes
export const registerPage = (name, pageClass) => {
    pages[name] = pageClass;
}

// Navigation function
export const navigateTo = (page) => {
    const root = document.getElementById('root');
    if (!root) return;
    
    root.innerHTML = '';
    
    if (pages[page]) {
        new pages[page]();
    } else {
        console.warn(`Page ${page} not found`);
        new pages['home'](); // Fallback to home
    }
    
    window.history.pushState({}, '', `#${page}`);
}


export const initNavigation = () => {
    window.addEventListener('popstate', () => {
        const page = window.location.hash.replace('#', '') || 'home';
        navigateTo(page);
    });
    
    const initialPage = window.location.hash.replace('#', '') || 'home';
    navigateTo(initialPage);
}


