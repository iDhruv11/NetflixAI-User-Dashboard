export const Hr = ({ title }) => {
    return (
        <div className="w-full flex items-center gap-2">
            <hr className="flex-grow border-neutral-700" />
            <p className="text-center text-neutral-400 font-normal text-sm tracking-widest">{title}</p>
            <hr className="flex-grow border-neutral-700" />
        </div>

    )
}