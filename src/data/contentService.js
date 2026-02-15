import { blogs as staticBlogs } from './blogs';
import { articles as staticArticles } from './articles';
import { research as staticResearch } from './research';

export const contentService = {
    getAll: (type) => {
        const storageKey = `portfolio_${type}`;
        const stored = localStorage.getItem(storageKey);

        // If nothing in storage, fall back to static data
        if (!stored) {
            if (type === 'blogs') return staticBlogs;
            if (type === 'articles') return staticArticles || [];
            if (type === 'research') return staticResearch || [];
            return [];
        }

        return JSON.parse(stored);
    },

    getById: (type, id) => {
        const allItems = contentService.getAll(type);
        return allItems.find(item => item.id === Number(id));
    },

    save: (type, item) => {
        const storageKey = `portfolio_${type}`;
        let allItems = contentService.getAll(type);

        if (item.id) {
            // Edit
            allItems = allItems.map(i => i.id === item.id ? { ...i, ...item } : i);
        } else {
            // Create
            const newId = allItems.length > 0 ? Math.max(...allItems.map(i => i.id)) + 1 : 1;
            const newItem = {
                ...item,
                id: newId,
                date: new Date().toISOString().split('T')[0], // Default date
                keywords: item.keywords || []
            };
            allItems = [newItem, ...allItems];
        }

        localStorage.setItem(storageKey, JSON.stringify(allItems));
        return item.id ? item : allItems[0];
    },

    delete: (type, id) => {
        const storageKey = `portfolio_${type}`;
        let allItems = contentService.getAll(type);
        allItems = allItems.filter(i => i.id !== Number(id));
        localStorage.setItem(storageKey, JSON.stringify(allItems));
    },

    initialize: (type) => {
        const storageKey = `portfolio_${type}`;
        if (!localStorage.getItem(storageKey)) {
            let initialData = [];
            if (type === 'blogs') initialData = staticBlogs;
            if (type === 'articles') initialData = staticArticles || [];
            if (type === 'research') initialData = staticResearch || [];

            localStorage.setItem(storageKey, JSON.stringify(initialData));
        }
    }
};
