import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import ListRow from "../components/ListRow";

const EmployeeList = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create')    
    }

    const employees = [
        {
            name: "abcd",
            id: "abcd",
            joinDate: "01/01/2020",
            role: "developer",
            status: "active",
            experience: "2",
        },
        {
            name: "xyz",
            id: "xyz",
            joinDate: "01/01/2020",
            role: "developer",
            status: "active",
            experience: "2",
        },
        {
            name: "qwer",
            id: "qwer",
            joinDate: "01/01/2020",
            role: "developer",
            status: "active",
            experience: "2",
        },
        {
            name: "asdf",
            id: "asdf",
            joinDate: "01/01/2020",
            role: "developer",
            status: "active",
            experience: "2",
        },
    ]

    return(
        <>
            <Button
                label="Create Employee" 
                handleClick={handleClick}
            />
            {
                employees.map((emp) => {
                    return(
                        <ListRow 
                            employee={emp}
                        />
                    )
                })
            }
        </>
    )
}

export default EmployeeList;