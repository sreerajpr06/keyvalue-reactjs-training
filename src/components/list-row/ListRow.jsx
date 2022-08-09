import "./ListRow.css"
import Button from "../button/Button"
import { RiDeleteBin6Line } from "react-icons/ri"
import { MdOutlineEdit } from "react-icons/md"

const ListRow = ({data, handleView, handleEdit, handleDelete, fields, className}) => {
    return(
        <>
            <div className={className} onClick={(event => handleView(data.id))}>
                {
                    fields.map((key) => {
                        return(
                            <>
                                {
                                    typeof(data[key]) === 'string' || typeof(data[key]) === 'number' ?
                                        <p>
                                            {data[key]}
                                        </p>
                                    :
                                        <div>
                                            <Button 
                                                icon={<RiDeleteBin6Line/>}
                                                className={`emp-list-row-option-delete`}
                                                handleClick={() => handleDelete(data.id)}
                                            />
                                            <Button 
                                                icon={<MdOutlineEdit />}
                                                className={`emp-list-row-option-edit`}
                                                handleClick={() => handleEdit(data.id)}
                                            />
                                        
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