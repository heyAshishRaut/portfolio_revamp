import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument-serif",
    weight: ["400"]
})

export const metadata: Metadata = {
    title: "Ashish Raut",
    description: "Full-stack developer specializing in Next.js, React, Node.js, and GenAI. Building scalable web applications, real-time systems, and AI-powered products.",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}>
        <div style={{overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none"}}>
            {children}
        </div>
        </body>
        </html>
    )
}
