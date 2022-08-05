import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/list' element={<EmployeeList />} />
          <Route path='/create' element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
