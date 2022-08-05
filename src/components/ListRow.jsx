const ListRow = ({employee}) => {
    return(
        <>
            <div>
                <p>{employee.name}</p>
                <p>{employee.id}</p>
                <p>{employee.joinDate}</p>
                <p>{employee.role}</p>
                <p>{employee.status}</p>
                <p>{employee.experience}</p>
            </div>
        </>
    )
}

export default ListRow;