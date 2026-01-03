import { StaticImageData } from "next/image"

import space from "@/public/coverImages/SPACE_COVER.jpg"
import stack from "@/public/coverImages/STACK_COVER.jpg"
import listly from "@/public/coverImages/LISTLY_COVER.jpg"
import titleAI from "@/public/coverImages/TITLE_AI_COVER.jpg"

interface Images {
    src: StaticImageData
}

interface FeaturedProject {
    name: string
    coverImage: StaticImageData
    summary: string
    description: string
    code: string
    link?: string
}

const featuredProjects: FeaturedProject[] = [
    {
        name: `Space`,
        coverImage: space,
        summary: `A real-time chat app built for focused, distraction-free conversations. Create or join spaces with up to 10 participants, share files, and react to messages live. Each space auto-deletes after 1 hour, keeping conversations clean and temporary.`,
        description: `
        Space is a real-time chat application designed for short-lived, intentional conversations without unnecessary noise. Users can create or join a space with up to 10 participants, exchange live messages, share files, and react to messages in real time. Every space automatically deletes after one hour, ensuring conversations remain temporary, focused, and clutter-free.
        The project is built using Next.js, Node.js, and Supabase Realtime, with a strong emphasis on simplicity, performance, and real-time collaboration. While the application was deployed on free-tier hosting, shared resources caused noticeable performance issues despite correct functionality. To preserve the intended experience, the complete project has been shared via GitHub, allowing anyone to run it locally and explore its full real-time capabilities.
        `,
        code: ``
    },
    {
        name: `Stack`,
        coverImage: stack,
        summary: `A smart link manager to save, organize, and preview important links effortlessly. It auto-categorizes links by source like YouTube, music, and social media. Share your dashboard securely with a unique, 1-hour valid link.`,
        description: `
        Stack is an intelligent application designed to help you store and manage important links in one clean, organized dashboard. Each link can be saved with a title, custom tags, and a description, making it easy to find later. The app automatically categorizes links based on their source, such as YouTube, music platforms, and social media sites like Facebook, Twitter, LinkedIn, and Instagram.
        Stack provides dedicated sections for different platforms, along with a tag-based view for flexible organization. Every link includes a preview, so you can quickly understand its content without opening it. You can also share your entire dashboard with others using a secure, unique URL that expires after one hour, ensuring privacy and controlled access. Perfect for creators, developers, and anyone who wants their links sorted beautifully.
        `,
        code: ``
    },
    {
        name: `AI-Powered YouTube Title Improver`,
        coverImage: titleAI,
        summary: `A fun AI-powered YouTube Title Improver using Motia. It analyzes your latest videos and generates better, SEO-friendly titles with clear reasons. The full report is automatically emailed to you for easy access.`,
        description: `
        This project is an AI-powered YouTube Title Improver built using Motia, a modern backend framework designed for structured, step-based workflows. Users simply enter their email address and YouTube channel name, and the application fetches the latest 5 videos from their channel using the YouTube Data API.
        For each video, the app generates improved, SEO-friendly titles along with explanations on why each title performs better in terms of clarity, urgency, and engagement. Once the analysis is complete, a detailed report is automatically sent to the user via email using the Resend API. Built with TypeScript, Motia, and AI-driven logic, this project demonstrates how easily Motia can be used to create clean, scalable AI workflows that connect external APIs and deliver real value end-to-end.
        `,
        code: ``
    },
    {
        name: `Listly`,
        coverImage: listly,
        summary: `A modern todo application built for clarity and focus. It features a beautiful UI with dark–light mode and a live clock. Todos can be created with deadlines and priority levels (high, medium, low).`,
        description: `
        Listly is a thoughtfully crafted todo application that combines productivity with a calm, elegant interface. Users can create and manage tasks with ease, assigning each todo a deadline and a priority level—high, medium, or low—to stay organized and focused on what matters most.
        The application supports both dark and light modes, adapting smoothly to different environments and user preferences. A built-in live clock is integrated into the UI, helping users stay time-aware while planning and executing tasks. With its clean design, priority-based task management, and deadline tracking, Listly makes daily planning simple, visual, and effective.
        `,
        code: ``
    }
]

export { featuredProjects }