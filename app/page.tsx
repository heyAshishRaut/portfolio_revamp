import { cn } from "@/lib/utils"
import user from "@/public/user.webp"
import CalComButton from "@/app/components/calcom"
import Image from "next/image"
import GithubCalendar from "@/app/components/github-calendar"
import Projects from "@/app/components/projects"
import TechStack from "@/app/components/tech-stack";

const Home = () => {
    return (
        <div className={cn(`min-h-screen w-screen bg-black font-mono text-white text-[13px] flex justify-center`)}>
            <div className={cn(`h-full w-full md:h-full md:w-[600px] px-[10px]`)}>
                <div className={cn(`h-full w-full my-[10px] border-l border-r border-neutral-400/50`)}>
                    {/* Hero Section */}
                    <div className={cn(`w-full border-b border-t border-neutral-400/50 p-3 flex flex-col gap-y-6`)}>
                        <div className={`p-1 border border-neutral-400/50 h-[70px] w-[70px]`}>
                            <Image src={user} alt={`user profile`} height={70} width={70} className={`rounded-full`}/>
                        </div>

                        <div className={`font-instrument text-4xl mt-2`}>Ashish Raut</div>

                        <div className={`w-full flex flex-col gap-y-2`}>
                            <div className={`flex items-center gap-x-3`}>
                                <div>
                                    <svg className="h-[14px] w-[14px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#f35b04"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                                </div>
                                <div>From ideas to code.</div>
                            </div>
                            <div className={`flex items-center gap-x-3`}>
                                <div>
                                    <svg className="h-[14px] w-[14px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#f35b04"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                                </div>
                                <div>Where design meets development.</div>
                            </div>
                        </div>

                        <div className={`text-[#0088FF] flex items-center justify-between px-3`}>
                            <a className={`underline underline-offset-4`}>Mail</a>
                            <a className={`underline underline-offset-4`}>LinkedIn</a>
                            <a className={`underline underline-offset-4`}>Twitter</a>
                            <a className={`underline underline-offset-4`}>GitHub</a>
                        </div>

                        <div className="flex items-center justify-between md:justify-start md:gap-x-10">
                            <div>Available for Work</div>
                            <CalComButton/>
                        </div>

                        <GithubCalendar/>
                    </div>

                    {/* Experience */}
                    <div className={cn(`w-full border-b border-neutral-400/50 p-3 flex flex-col gap-y-6`)}>
                        <div className=" text-xl font-semibold">
                            <span className="text-[#f35b04] pr-1">//</span>
                            Projects
                        </div>

                        <div className={cn(`w-full`)}>
                            <Projects/>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className={cn(`w-full border-b border-neutral-400/50 p-3 flex flex-col gap-y-6`)}>
                        <div className=" text-xl font-semibold">
                            <span className="text-[#f35b04] pr-1">//</span>
                            Tech Stack
                        </div>

                        <div className={cn(`w-full`)}>
                            <TechStack/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home