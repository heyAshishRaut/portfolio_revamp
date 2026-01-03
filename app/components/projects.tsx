"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { featuredProjects } from "@/lib/featured-project"
import { allProjects } from "@/lib/all-projects"
import Image from "next/image"


const Projects = () => {
    const [isFeatured, setIsFeatured] = useState(true)

    return (
        <div className={`w-full flex flex-col gap-y-8`}>
            <div className={cn(`relative flex cursor-default`)}>
                <div className={cn(`w-[100px] h-[32px] absolute bg-white transition-all duration-400 ease-in-out`, isFeatured ? "left-0" : "left-[100px]")}></div>
                <div onClick={() => setIsFeatured(true)} className={cn(`z-10 w-[100px] h-[32px] border border-neutral-400/50 flex items-center justify-center`, isFeatured && "text-black")}>Featured</div>
                <div onClick={() => setIsFeatured(false)} className={cn(`z-10 w-[100px] h-[32px] border border-neutral-400/50 flex items-center justify-center`, !isFeatured && "text-black")}>All</div>
            </div>
            {
                isFeatured ? (
                    <div className={`w-full flex flex-col gap-y-3`}>
                        {
                            featuredProjects.map((e, i) => (
                                <div key={i} className={`w-full flex flex-col gap-y-2 border border-neutral-400/50 p-2`}>
                                    <div className={`relative w-full h-[210px] md:h-[300px]`}>
                                        <Image src={e.coverImage.src} fill alt={'Project Image'} className={`object-contain`} />
                                    </div>
                                    <div className={`text-xl`}>{e.name}</div>
                                    <div className={`text-justify text-neutral-400`}>{e.summary}</div>
                                    <div className={`self-end flex gap-x-2`}>
                                        <div className={`border border-neutral-400/50 h-[30px] px-5 flex items-center justify-center`}>
                                            Code
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div className={`w-full flex flex-col gap-y-3`}>
                        {
                            allProjects.map((e, i) => (
                                <div key={i} className={`w-full flex flex-col gap-y-4 border border-neutral-400/50 p-2`}>
                                    <div className={`text-xl`}>{i + 1}. {e.name}</div>
                                    <div className={`text-justify text-neutral-400`}>{e.summary}</div>
                                    <div className={`self-end flex gap-x-2`}>
                                        <div className={`border border-neutral-400/50 h-[30px] px-5 flex items-center justify-center`}>
                                            Code
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Projects