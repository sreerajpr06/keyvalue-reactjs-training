import "./Input.css"

const InputSelect = ({field, label, options, className, onChange}) => {
    console.log(field)
    return(
        <>
            <div className={className}>
                <p>{label}</p>
                <select 
                    onChange={(event) => onChange(field, event.target.value)}
                >
                    {
                        options.map((option) => {
                            return(
                                <option
                                    value={option.value}
                                >
                                    {option.field}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default InputSelect