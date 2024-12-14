import { useEffect, useState } from "react"

export const BlurLayer = ({setIsSwitching}) => {
    const [showBlur, setShowBlur] = useState(false)
    useEffect( () => {
        setShowBlur(true)
        setTimeout( () => setShowBlur(false), 600)
        setTimeout( () => setIsSwitching(false), 1000   )
    }, [])
    return (
        <div className={`${ showBlur ? 'backdrop-blur-lg' : '' } w-full h-[85%] rounded-2xl absolute top-0 left-0 transition-all duration-400 ease-linear`}></div>
    )
}