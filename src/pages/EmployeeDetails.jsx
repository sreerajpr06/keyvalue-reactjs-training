import { useEffect, useState } from 'react';

import { useGetEmployeeByIdQuery } from '../services/employee'
import { empListFields, labels } from '../utils/constants';
import SideNav from "../components/SideNav"
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';

export default function EmployeeDetails() {
	const { id: empId } = useParams();
	const { data: empData, error: empError, isLoading: empIsLoading } = useGetEmployeeByIdQuery(empId);
  const [ employee, setEmployee ] = useState({});

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
											data={empData.data}
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