"use client"

import { GitHubCalendar } from "react-github-calendar"

const GithubCalendar = () => {
    return (
        <div className="p-4">
            <GitHubCalendar
                username="heyAshishRaut"
                year={2026}
                blockSize={14}
                blockMargin={5}
                fontSize={14}
                colorScheme="dark"
            />
        </div>
    )
}

export default GithubCalendar
