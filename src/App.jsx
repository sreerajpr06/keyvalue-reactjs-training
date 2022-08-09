import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './pages/employee-list/EmployeeList';
import CreateEmployee from './pages/create-employee/CreateEmployee';
import EmployeeDetails from './pages/employee-details/EmployeeDetails';
import EditEmployee from './pages/edit-employee/EditEmployee'
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/list' element={<EmployeeList />} />
          <Route path='/create' element={<CreateEmployee />} />
          <Route path='/view/:id' element={<EmployeeDetails />} />
          <Route path='/edit/:id' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>  
    </div>
    // <Counter />
  );
}

export default App;
