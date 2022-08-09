import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/input/InputField";
import InputSelect from "../../components/input/InputSelect";
import Header from "../../components/header/Header";

import { labels, options } from "../../utils/constants";
import SideNav from "../../components/side-nav/SideNav";
import { useGetEmployeeByIdQuery, useUpdateEmployeeMutation } from "../../services/employee";

const EditEmployee = () => {
  const navigate = useNavigate();
  const { id: empId } = useParams();
  const {
    data: empData,
    error: empError,
    isLoading: empIsLoading,
  } = useGetEmployeeByIdQuery(empId);
  const [ updateEmployee, {isLoading: updateLoading}] = useUpdateEmployeeMutation();

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    if(empData){
      setEmployee(() => {
        const { address, 
          name,  
          departmentId,
          username,
          joinDate,
          role,
          status, 
          experience,
        } = empData.data;
        const {
          line1,
          line2,
          city,
          state,
          country,
          pin,
        } = address;

        return({
          name,
          departmentId,
          username,
          password: '',
          joinDate,
          role,
          status,
          experience,
          line1,
          line2,
          city,
          state,
          country,
          pin
        })
      })
    }
  }, [empData])

  const onChange = (key, value) => {
    console.log(key, value);
    setEmployee({
      ...employee,
      [key]: value,
    });
  };

  const onSubmit = async () => {
    const newEmp = {
      id: empData.data.id,
      name: employee.name,
      departmentId: employee.departmentId,
      username: employee.username,
      password: employee.password,
      joinDate: employee.joinDate,
      role: employee.role,
      status: employee.status,
      experience: Number(employee.experience),
      addressId: empData.data.addressId,
      address: {
          line1: employee.line1,
          line2: employee.line2,
          city: employee.city,
          state: employee.state,
          country: employee.country,
          pin: employee.pin,
      }
    }
    
    console.log(newEmp)
    await updateEmployee({id: empData.data.id, data: newEmp})
    navigate("/list");
  };
  const onCancel = () => {};

  return (
    <>
      <div className="page">
        <SideNav />

        <main>
          <Header heading="Edit Employee" />

          <section>
            {empError ? (
              <>Oh no, there was an error</>
            ) : empIsLoading ? (
              <>Loading...</>
            ) : empData ? (
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
                    <Button label="Update" className="btn-submit" handleClick={onSubmit}/>
                    <Button label="Cancel" className="btn-cancel" handleClick={onCancel}/>
                </div>

            </form>
            ) : null}
          </section>
        </main>
      </div>
    </>
  );
};

export default EditEmployee;
