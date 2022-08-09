import "./Input.css"

const InputField = ({field, label, value, placeHolder, className, onChange}) => {
    return (
        <div className={className}>
            <p>{label}</p>
            <input type="text" value={value} placeHolder={placeHolder} onChange={(event) => onChange(field, event.target.value)} />
        </div>
    )
}

export default InputField