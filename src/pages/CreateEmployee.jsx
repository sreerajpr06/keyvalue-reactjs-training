import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import Header from "../components/Header";
import { labels, options } from "../utils/Constants";
import "../styles/CreateEmployee.css"
import SideNav from "../components/SideNav";

const CreateEmployee = () => {
    const navigate = useNavigate();

    const [ employee, setEmployee ] = useState({});

    const onChange = (key, value) => {
        console.log(key, value)
        setEmployee({
            ...employee,
            [key]: value
        })
    }

    const onSubmit = () => {
        navigate('/')
    }
    const onCancel = () => {

    }

    useEffect(() => {
        setEmployee({
            name: '',
            id: '',
            joinDate: '',
            role: '',
            status: '',
            experience: '',
            address: '',
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