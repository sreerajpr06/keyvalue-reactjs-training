import * as React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { MdOutlineEdit } from "react-icons/md"
import { useNavigate } from 'react-router-dom';

import ListRow from '../components/ListRow';
import { useGetEmployeesQuery, useDeleteEmployeeMutation } from '../services/employee'
import { empListFields, labels } from '../utils/constants';
import SideNav from "../components/SideNav"
import Header from '../components/Header';

export default function EmployeeList() {
  const navigate = useNavigate();
  const { data: empData, error: empError, isLoading: empIsLoading } = useGetEmployeesQuery();
  const [ deleteEmployee, {isLoading: deleteLoading} ] = useDeleteEmployeeMutation();

  const handleView = (empId) => {
    navigate(`/view/${empId}`)
  }

  const handleEdit = (empId) => {
    navigate(`/edit/${empId}`)
  }

  const handleDelete = (empId) => {
    deleteEmployee(empId)
  }

  // const handleClick = (action, empId) => {
  //   console.log(action, empId)
  //   if(action === 'view'){
  //     navigate(`/view/${empId}`)
  //   }
  //   else if(action === 'edit'){
  //     navigate(`/edit/${empId}`)
  //   }
  //   else if(action === 'delete'){
  //     deleteEmployee(empId);
  //   }
  // }

  return (
    <>
      <div className='page'>
        <SideNav />
        
        <main>
          <Header 
            heading="Employee List"
          />
          <div className='container'>
            {empError ? (
              <>Oh no, there was an error</>
            ) : empIsLoading ? (
              <>Loading...</>
            ) : empData ? (
              <>
                <ListRow 
                  fields={empListFields}
                  data={labels}
                  className="emp-list-row-header"
                />
                {
                  empData.data.map((emp) => (
                    <ListRow 
                        fields={empListFields}
                        data={emp}
                        className="emp-list-row"
                        // handleClick={handleClick}
                        handleView={handleView}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                  ))
                }
              </>
            ) : null}
          </div>
        </main>
      </div>
    </>
  )
}