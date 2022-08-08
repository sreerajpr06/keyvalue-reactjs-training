import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeDetails from './pages/EmployeeDetails';
import EditEmployee from './pages/EditEmployee'
import Login from './pages/Login';

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
