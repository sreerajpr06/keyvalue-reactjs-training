import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdOutlineEdit } from "react-icons/md"

import { useGetEmployeeByIdQuery } from '../../services/employee'
import { labels } from '../../utils/constants';
import SideNav from "../../components/side-nav/SideNav"
import Header from '../../components/header/Header';
import DetailsCard from '../../components/details-card/DetailsCard';

export default function EmployeeDetails() {
	const { id: empId } = useParams();
	const { data: empData, error: empError, isLoading: empIsLoading } = useGetEmployeeByIdQuery(empId);
  const [ employee, setEmployee ] = useState({});
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate(`/edit/${empId}`)
  }

  useEffect(() => {
    if(empData){
      setEmployee({
        ...empData.data,
        ...empData.data.address
      })
    }
  }, [empData])

  return (
    <>
      <div className='page'>
        <SideNav />
        
        <main>
          <Header 
            heading="Employee Details"
            button={{
              icon: <MdOutlineEdit />,
              className: "btn-header-edit",
              handleClick: handleHeaderClick
            }}
          />
          <div className='container'>
            {empError ? (
              <>Oh no, there was an error</>
            ) : empIsLoading ? (
              <>Loading...</>
            ) : empData ? (
              <>
                {
										<DetailsCard 
											data={employee}
											fields={labels}
											className="emp-details-card"
										/>
                }
              </>
            ) : null}
          </div>
        </main>
      </div>
    </>
  )
}