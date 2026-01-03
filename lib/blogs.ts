interface Blogs {
    title: string
    summary: string
    link: string
}

const blogs: Blogs[] = [
    {
        title: `Zero Hassle Auth: Clerk + Next.js`,
        summary: `Built a modern authentication system in Next.js using Clerk, eliminating complex setup and boilerplate. Implemented secure user sign-up, sign-in, and profile management using pre-built, customizable components. This approach significantly reduced development time and allowed focus on core application features. Perfect example of zero-hassle, production-ready authentication.`,
        link: `https://iar.hashnode.dev/clerk-nextjs`
    },
    {
        title: `AI Explained for Beginners: How ChatGPT Understands and Talks`,
        summary: `A beginner-friendly deep dive into how ChatGPT works behind the scenes. This article explains core concepts like NLP, Transformers, and Large Language Models, breaking down how AI understands text, maintains context, and generates human-like responses. Perfect for developers curious about modern AI systems without heavy math or jargon.`,
        link: `https://iar.hashnode.dev/ai-explained-for-beginners`
    },
    {
        title: `Building AI Agents That Think and Act: A Step-by-Step Guide`,
        summary: `This article breaks down how ChatGPT works behind the scenes in a beginner-friendly way. It explains core concepts like NLP, Transformers, and Large Language Models, showing how AI understands context and generates human-like responses. The blog demystifies AI by connecting theory with real-world behavior, making complex ideas easy to grasp.`,
        link: `https://iar.hashnode.dev/building-ai-agents-that-think-and-act-a-step-by-step-guide`
    }
]

export { blogs }