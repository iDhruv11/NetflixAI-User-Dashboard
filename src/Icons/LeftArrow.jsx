export const LeftArrow = ({isDisabled}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill={isDisabled ? 'grey' : 'white'} fill-rule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z" /></svg>
    )
}