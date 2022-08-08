import "../styles/ListRow.css"
import Button from "./Button"

const ListRow = ({data, handleClick, fields, className}) => {
    // console.log(data)
    // console.log(fields)
    return(
        <>
            <div className={className} onClick={(event => handleClick('view', data.id))}>
                {
                    fields.map((key) => {
                        {/* console.log(data[key]) */}
                        return(
                            <>
                                {
                                    typeof(data[key]) === 'string' || typeof(data[key]) === 'number' ?
                                        <p>
                                            {data[key]}
                                        </p>
                                    :
                                        <div>
                                            {
                                                Object.keys(data[key]).map((subKey) => {
                                                    return (
                                                        <Button 
                                                            icon={data[key][subKey]}
                                                            className={`emp-list-row-option-${subKey}`}
                                                            handleClick={() => handleClick(subKey, data.id)}
                                                        />
                                                    )          
                                                })
                                            }
                                        </div>
                                }
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ListRow;