import "./DetailsCard.css"

const DetailsCard = ({ data, fields, className }) => {

    return (
        <>
            <div className={className}>
                {
                    Object.keys(fields).map((field) => {
                        if(typeof(data[field]) === 'string' || typeof(data[field]) === 'number')
                            return(
                                <div className="details-field">
                                    <p className="details-field-title">{field}</p>
                                    <p className="details-field-content">{data[field]}</p>
                                </div>
                            )
                        else if(typeof(data[field]) === 'object'){
                            return(
                                Object.keys(fields[field]).map(subField => {
                                    return(
                                        <div className="details-field">
                                            <p className="details-field-title">{subField}</p>
                                            <p className="details-field-content">{data[field][subField]}</p>
                                        </div>
                                    )
                                })
                            )
                        }
                            
                    })
                }
            </div>
        </>
    )
}

export default DetailsCard;