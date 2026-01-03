"use client"
import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

const CalComButton = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <button data-cal-namespace="30min"
                data-cal-link="heyashish/30min"
                data-cal-config='{"layout":"month_view"}'
                className="cursor-pointer py-2 md:py-3 px-4 md:px-6 border border-neutral-600/50 bg-white text-black">
            Book a Call
        </button>
    )
}

export default CalComButton