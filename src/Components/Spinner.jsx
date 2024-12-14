import { SpinnerIcon } from "../Icons/SpinnerIcon"

export const Spinner = () => {
    return (
        <div className='w-screen h-screen bg-black/60 absolute top-0 left-0 z-50 flex justify-center items-center'>
            <p className='-mt-20 animate-spin'><SpinnerIcon /></p>
        </div>
    )
}