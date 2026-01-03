import { blogs } from "@/lib/blogs"

const Blog = () => {
    return (
        <div>
            {
                blogs.map((e, i) => (
                    <div key={i} className={`w-full flex flex-col gap-y-4 border border-neutral-400/50 p-2`}>
                        <div className={`text-xl`}>{i + 1}. {e.title}</div>
                        <div className={`text-justify text-neutral-400`}>{e.summary}</div>
                        <div className={`self-end flex gap-x-2`}>
                            <a href={e.link} target={"_blank"} className={`bg-white text-black h-[30px] px-5 flex items-center justify-center`}>
                                View
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Blog