interface AllProjects {
    name: string
    summary: string
    code: string
    live?: string
}

const allProjects: AllProjects[] = [
    {
        name: `Space`,
        summary: `A real-time chat app built for focused, distraction-free conversations. Create or join spaces with up to 10 participants, share files, and react to messages live. Each space auto-deletes after 1 hour, keeping conversations clean and temporary.`,
        code: ``,
    },
    {
        name: `Stack`,
        summary: `A smart link manager to save, organize, and preview important links effortlessly. It auto-categorizes links by source like YouTube, music, and social media. Share your dashboard securely with a unique, 1-hour valid link.`,
        code: ``,
    },
    {
        name: `AI-Powered YouTube Title Improver`,
        summary: `A fun AI-powered YouTube Title Improver using Motia. It analyzes your latest videos and generates better, SEO-friendly titles with clear reasons. The full report is automatically emailed to you for easy access.`,
        code: ``,
    },
    {
        name: `Listly`,
        summary: `A modern todo application built for clarity and focus. It features a beautiful UI with dark–light mode and a live clock. Todos can be created with deadlines and priority levels (high, medium, low).`,
        code: ``
    },
    {
        name: `Horizon`,
        summary: `A real-time chat application built on WebSockets for ultra-low latency messaging. Supports up to 25 participants per room with live participant count. Includes a global news panel to keep users informed while chatting.`,
        code: ``
    },
    {
        name: `Terminal-Based AI Agent`,
        summary: `This project demonstrates a tool-using AI agent built with Python and the OpenAI Chat Completion API, designed to operate entirely from the terminal. The agent follows a strict START → PLAN → ACTION → OBSERVE → OUTPUT loop, ensuring clear reasoning and controlled execution at every step.`,
        code: ``
    },
    {
        name: `Token Visualizer`,
        summary: `Parse is a developer-focused tool that allows users to convert input text into tokens for a wide range of OpenAI models. With support for both Light and Dark Mode, Parse ensures a smooth and distraction-free experience while working with large language model token limits.`,
        code: ``
    },
    {
        name: `Persona Based AI Chatbot`,
        summary: `This project features persona-based AI chatbots that emulate the speaking style and personality of two popular tech influencers — Hitesh Choudhary and Piyush Garg. Built using React and powered by Google's Gemini API, these chatbots offer interactive conversations in a Hinglish (Hindi + English) tone, mimicking each creator’s unique communication style.`,
        code: ``
    },
    {
        name: `Pokémon Cards Generator`,
        summary: `A fun web app that generates random Pokémon cards using the PokéAPI. Enter the number of cards, and get a visually styled grid of Pokémon with their names and attack stats.`,
        code: ``
    },
    {
        name: `Password Generator`,
        summary: `A modern and customizable Password Generator built using HTML, CSS, and JavaScript. It allows users to generate secure passwords with various customization options.`,
        code: ``
    },
    {
        name: `Photo Gallery`,
        summary: `A modern, responsive image gallery built with HTML, CSS, and JavaScript. The gallery features a clean and minimalist UI with smooth animations.`,
        code: ``
    },
    {
        name: `Full Stack Todo App`,
        summary: `A full-stack To-Do application built with Node.js, Express.js, and MongoDB for seamless task management. Users can securely sign up and sign in, then organize tasks across multiple workflow stages using drag-and-drop. JWT authentication and encrypted passwords ensure a safe and smooth user experience.`,
        code: ``
    },
    {
        name: `Allen Website Clone`,
        summary: `This project is a fully functional frontend clone of the Allen Institute website, created using React. It replicates the real site’s structure, navigation, responsive behavior, and overall visual aesthetics.`,
        code: ``
    },
    {
        name: `VS Code Website Clone`,
        summary: `This is a clone of the official Visual Studio Code website built using HTML, and CSS. It mimics the layout, navigation bar, hero section, and responsive design of the original site. Perfect for practicing real-world website cloning and responsive frontend development.`,
        code: ``
    },
    {
        name: `Zerodha Website Clone`,
        summary: `A responsive clone of the Zerodha landing page built using HTML, CSS, and JavaScript. It replicates the homepage layout, navbar, hero section, and clean design style. Great for improving frontend skills and practicing pixel-perfect website cloning.`,
        code: ``
    }
]

export { allProjects }