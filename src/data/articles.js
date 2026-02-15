export const articles = [
    {
        id: 1,
        title: "The Future of Web Assembly",
        description: "WebAssembly (Wasm) is poised to revolutionize web performance. This article explores its potential and current state.",
        content: `
            <h1>The Future of Web Assembly</h1>
            <p>WebAssembly is bringing near-native performance to the browser, enabling applications that were previously impossible to run on the web, like video editors and heavy games.</p>
            <h2>Beyond JavaScript</h2>
            <p>Wasm isn't a replacement for JavaScript; it's a complement. It allows languages like C++, Rust, and Go to run on the web.</p>
            <h2>Use Cases</h2>
            <p>From AutoCAD to Figma, major applications are already using Wasm to deliver desktop-class performance in the browser.</p>
        `,
        category: "Technology",
        date: "2024-09-01",
        author: "Praveen",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        keywords: ["wasm", "webassembly", "performance"]
    },
    {
        id: 2,
        title: "React Server Components: A Paradigm Shift",
        description: "Understanding the move towards server-first rendering in the React ecosystem.",
        content: `
            <h1>React Server Components</h1>
            <p>React Server Components (RSC) represent the biggest shift in React's history. By moving the component logic to the server, we can reduce bundle sizes and improve data fetching.</p>
            <h2>Zero-Bundle-Size Components</h2>
            <p>Components that don't need interactivity can remain on the server, meaning their code is never sent to the client.</p>
        `,
        category: "Development",
        date: "2024-09-05",
        author: "Praveen",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        keywords: ["react", "nextjs", "rsc"]
    },
    {
        id: 3,
        title: "The Rise of Edge Computing",
        description: "Moving computation closer to the user for lower latency and better performance.",
        content: `
            <h1>The Rise of Edge Computing</h1>
            <p>Edge computing processes data near the source of data generation, rather than in a centralized cloud. This reduces latency and bandwidth use.</p>
            <h2>Jamstack and the Edge</h2>
            <p>Modern frameworks are deploying logic to the edge, allowing for personalized, static-like performance globally.</p>
        `,
        category: "Technology",
        date: "2024-09-10",
        author: "Praveen",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        keywords: ["edge", "cloud", "infrastructure"]
    },
    {
        id: 4,
        title: "Designing for Accessibility (A11y)",
        description: "Why accessibility is a legal and moral imperative, and how to implement it correctly.",
        content: `
            <h1>Designing for Accessibility</h1>
            <p>The web must be accessible to everyone, regardless of disability. A11y is not an afterthought; it's a requirement.</p>
            <h2>Semantic HTML</h2>
            <p>Using the correct HTML tags (buttons for actions, links for navigation) is 90% of the battle.</p>
            <h2>Contrast and Color</h2>
            <p>Ensuring text is readable for those with visual impairments is crucial.</p>
        `,
        category: "Design",
        date: "2024-09-15",
        author: "Praveen",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        keywords: ["a11y", "accessibility", "design"]
    },
    {
        id: 5,
        title: "The State of CSS in 2024",
        description: "From :has() to container queries, CSS is more powerful than ever.",
        content: `
            <h1>The State of CSS in 2024</h1>
            <p>CSS has evolved rapidly. New features are landing in browsers that make preprocessors almost obsolete.</p>
            <h2>Container Queries</h2>
            <p>We can finally style components based on the size of their container, not just the viewport.</p>
        `,
        category: "Development",
        date: "2024-09-20",
        author: "Praveen",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        keywords: ["css", "frontend", "web"]
    },
    {
        id: 6,
        title: "Mental Health for Developers",
        description: "Addressing burnout and impostor syndrome in the tech industry.",
        content: `
            <h1>Mental Health for Developers</h1>
            <p>The tech industry moves fast, and the pressure to keep up can be overwhelming. Burnout is a real danger.</p>
            <h2>Impostor Syndrome</h2>
            <p>Feeling like a fraud is common. Recognizing it is the first step to overcoming it.</p>
        `,
        category: "Lifestyle",
        date: "2024-09-25",
        author: "Praveen",
        image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        keywords: ["mental health", "career", "burnout"]
    }
];
