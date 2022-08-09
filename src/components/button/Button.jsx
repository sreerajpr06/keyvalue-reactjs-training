import "./Button.css"

const Button = (props) => {
    const { label, icon, className, handleClick } = props;

    return (
        <button className={className} onClick={(event) => { event.stopPropagation(); handleClick()}}>{icon}{label}</button>
    )
}

export default Button