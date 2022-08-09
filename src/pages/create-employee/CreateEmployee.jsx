import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/input/InputField";
import InputSelect from "../../components/input/InputSelect";
import Header from "../../components/header/Header";
import { labels, options } from "../../utils/constants";
import "./CreateEmployee.css"
import SideNav from "../../components/side-nav/SideNav";
import { useCreateEmployeeMutation } from "../../services/employee";

const CreateEmployee = () => {
    const navigate = useNavigate();
    const [ createEmployee, {isLoading: createLoading} ] = useCreateEmployeeMutation();
    const [ employee, setEmployee ] = useState({});

    const onChange = (key, value) => {
        console.log(key, value)
        setEmployee({
            ...employee,
            [key]: value
        })
    }

    const onSubmit = async () => {
        const newEmp = {
            name: employee.name,
            departmentId: employee.departmentId,
            username: employee.username,
            password: employee.password,
            joinDate: employee.joinDate,
            role: employee.role,
            status: employee.status,
            experience: Number(employee.experience),
            address: {
                line1: employee.line1,
                line2: employee.line2,
                city: employee.city,
                state: employee.state,
                country: employee.country,
                pin: employee.pin,
            }
        }
        console.log(newEmp);
        await createEmployee(newEmp)
        navigate('/')
    }
    const onCancel = () => {

    }

    useEffect(() => {
        setEmployee({
            name: '',
            departmentId: '2bd76305-1962-4e66-b09a-fc4d014b544c',
            username: '',
            password: '',
            joinDate: '',
            role: '',
            status: '',
            experience: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            country: '',
            pin: '',
        })
    }, [])

    return (
        <>
            <div className="page">
                <SideNav />
                
                <main>
                    <Header 
                        heading="Create Employee"
                    />
                    
                    <section>
                        <form action="" method="" className="form-container">
                            
                            <div className="form-inputs">
                                {
                                    Object.keys(employee).map((field) => {
                                        return (
                                            <>
                                                {
                                                    (field !== 'role' && field !== 'status') ?
                                                    <InputField 
                                                        field={field}
                                                        label={labels[field]}
                                                        value={employee[field]}
                                                        placeHolder={labels[field]}
                                                        className="form-element"
                                                        onChange={onChange}
                                                    /> :
                                                    <InputSelect 
                                                        field={field}
                                                        label={labels[field]}
                                                        options={options[field]}
                                                        className="form-element"
                                                        onChange={onChange}
                                                    />
                                                }
                                                
                                            </>
                                        )
                                    })
                                }
                            </div>

                            <div className="form-btn-section">
                                <Button label="Create" className="btn-submit" handleClick={onSubmit}/>
                                <Button label="Cancel" className="btn-cancel" handleClick={onCancel}/>
                            </div>

                        </form>
                    </section>
                </main>
            </div>
        </>
    )
}

export default CreateEmployee;