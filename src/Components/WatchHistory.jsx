import { useEffect, useRef, useState } from "react"
import { LeftArrow } from "../Icons/LeftArrow"
import { BlurLayer } from "./BlurLayer"

export const WatchHistory = ({ data }) => {

    const [slicedDataIndex, setSlicedDataIndex] = useState(null)
    const [slicedData, setSlicedData] = useState(null)
    const [isSwitching, setIsSwitching] = useState(false)

    useEffect(() => {

        const sampleData = Object.keys(data);
        const mainData = [];

        while (sampleData.length > 0) {
            let object = {};
            for (let i = 0; i < 8; i++) {
                if (sampleData.length === 0) break;
                const key = sampleData.shift();
                object[key] = data[key];
            }
            Object.keys(object)
            .map(title => {
                if ((object[title] / 60) < 1) {
                    object[title] = object[title] % 60 + ' min'
                }
                else {
                    object[title] = `${Math.floor(object[title] / 60)} hr ${object[title] % 60} min`
                }
            })
            object = Object.keys(object)
            .reduce((acc, title) => {
                acc[
                    title.slice(0, 25) + ( title.length >= 25 ? '...' : '')
                ] = object[title]
                return acc
            }, {})
            mainData.push(object);
                    
        }
        setSlicedData(mainData)
        setSlicedDataIndex(0)

    }, [data]);


    return (
        <div className="bg-[#52545f2d] rounded-2xl h-full flex-grow">
            <header className="text-white text-3xl font-medium mx-6 pt-6 pb-2 border-b-[1px] border-slate-500/40 flex justify-between">
                <p>Your <span className="text-[#e50914] font-semibold">Watch</span> History</p>
                <div className="flex items-center gap-1">
                    <div
                        className={`px-1 py-1 hover:bg-[#4e5d6d23] rounded-full hover:cursor-pointer  transition-all duration-250 ease-linear`}
                        onClick={ () => {
                            slicedDataIndex > 0 && setIsSwitching(true)
                            slicedDataIndex > 0 && (
                                setTimeout( () => setSlicedDataIndex(slicedDataIndex - 1), 500)
                            ) 
                        
                        }}
                    >
                        <LeftArrow isDisabled={ slicedDataIndex == 0}/>
                    </div>
                    <div
                        className={`-scale-[1] px-1 py-1 hover:bg-[#4e5d6d23] rounded-full hover:cursor-pointer transition-all duration-250 ease-linear`}
                        onClick={ () => {
                            slicedDataIndex < slicedData.length - 1 && setIsSwitching(true)
                            slicedDataIndex < slicedData.length - 1 && (
                                setTimeout( () => setSlicedDataIndex(slicedDataIndex + 1), 500)
                            )
                        }}
                    >
                        <LeftArrow isDisabled={ slicedDataIndex == slicedData?.length - 1}/>
                    </div>
                </div>
            </header>
            <div className="relative w-full h-full">
                <ul className="px-6 flex flex-col">
                    {
                        (slicedData) && (
                            Object.keys(slicedData[slicedDataIndex]).map(title => (
                                <li className="text-white w-full flex justify-between px-2 items-center py-2 hover:cursor-pointer transition-all duaration-700 ease-linear gap-10">
                                    <p className="text-2xl text-slate-400/70 hover:cursor-pointer hover:text-slate-400/100">{title}</p>
                                    <p className="text-lg text-blue-600 pt-1">{slicedData[slicedDataIndex][title]}</p>
                                </li>
                            ))
                        )
                    }
                </ul>
                {
                    (isSwitching) && <BlurLayer setIsSwitching={setIsSwitching}/>
                }
            </div>
        </div>
    )
}