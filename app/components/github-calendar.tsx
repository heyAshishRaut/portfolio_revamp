"use client"

import { GitHubCalendar } from "react-github-calendar"

const GithubCalendar = () => {
    return (
        <div className="bg-none p-4">
            <GitHubCalendar
                username="heyAshishRaut"
                year={2026}
                blockSize={14}
                blockMargin={5}
                colorScheme="dark"
                fontSize={14}
            />
        </div>
    );
};

export default GithubCalendar
