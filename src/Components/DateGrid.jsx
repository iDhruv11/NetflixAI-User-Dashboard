import { parseDate } from "@internationalized/date"
import { Calendar } from "@nextui-org/calendar"
import { useEffect } from "react"

export const DateGrid = ({ unavailableDateStrings }) => {

    const unavailableDateObjects = unavailableDateStrings.map(unavailableDateString => parseDate(unavailableDateString))

    const isDateUnavailable = (date) => {
        return unavailableDateObjects.some(unavailableDateObject => unavailableDateObject.compare(date) == 0)
    }

    return (
        <div className="flex-grow bg-[#52545f2d] rounded-2xl flex items-center px-8">

            <h1 className=" text-white text-3xl font-medium inline-block w-[40%] self-start mt-7">You visited us <p className="text-[#e50914] font-semibold text-7xl">{30 - unavailableDateStrings.length}</p> times this month </h1>

            <Calendar
                isDateUnavailable={isDateUnavailable}
                style={{
                    backgroundColor: '#52545f47',
                }}
            />
        </div>
    )
}