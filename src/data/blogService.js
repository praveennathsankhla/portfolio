import { blogs as staticBlogs } from './blogs';

const STORAGE_KEY = 'portfolio_blogs';

// Initialize data if not present
const getStoredBlogs = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        return [];
    }
    return JSON.parse(stored);
};

export const blogService = {
    getAll: () => {
        const stored = getStoredBlogs();
        // Combine static and stored blogs. 
        // Stored blogs might be edits of static ones or completely new ones.
        // For simplicity in this "mock" backend:
        // 1. We'll verify if a static blog has been "edited" (exists in storage with same ID).
        // 2. We'll return all stored blogs + any static blogs that aren't in storage (by ID).

        // Actually, a simpler approach for this demo:
        // Let's just treat them as one merged list where localStorage takes precedence if IDs collide,
        // but since we want to "add" to the static list, we might want to just initialize localStorage with static data
        // on first load?
        //
        // Better approach: 
        // Return [...staticBlogs, ...storedNewBlogs]
        // But editing static blogs is tricky without a real DB.
        //
        // Let's go with: 
        // - Read everything from localStorage.
        // - If localStorage is empty, return staticBlogs.
        // - If we want to persist "edits" to static blogs, we need to copy static to local on first run?

        // Strategy:
        // On getAll(), if localStorage is empty, return staticBlogs.
        // If localStorage has data, return that data. 
        // This implies we must copy staticBlogs to localStorage on first write/edit/delete or explicit initialization.

        const storedBlogs = localStorage.getItem(STORAGE_KEY);
        if (!storedBlogs) {
            return staticBlogs;
        }
        return JSON.parse(storedBlogs);
    },

    getById: (id) => {
        const allBlogs = blogService.getAll();
        return allBlogs.find(b => b.id === Number(id));
    },

    save: (blog) => {
        let allBlogs = blogService.getAll();

        if (blog.id) {
            // Edit
            allBlogs = allBlogs.map(b => b.id === blog.id ? { ...b, ...blog } : b);
        } else {
            // Create
            const newId = Math.max(...allBlogs.map(b => b.id), 0) + 1;
            const newBlog = {
                ...blog,
                id: newId,
                date: new Date().toISOString().split('T')[0], // Default date
                keywords: blog.keywords || []
            };
            allBlogs = [newBlog, ...allBlogs];
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(allBlogs));
        return blog.id ? blog : allBlogs[0];
    },

    delete: (id) => {
        let allBlogs = blogService.getAll();
        allBlogs = allBlogs.filter(b => b.id !== Number(id));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allBlogs));
    },

    // Helper to ensure static data is in local storage (useful for initialization)
    initialize: () => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(staticBlogs));
        }
    }
};
