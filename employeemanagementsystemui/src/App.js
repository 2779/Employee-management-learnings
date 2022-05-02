
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './component/AddEmployee';
import EmployeeList from './component/EmployeeList';
import NavBar from './component/NavBar';
import UpdateEmployee from './component/UpdateEmployee';


function App() {
  return ( <>
  <BrowserRouter>
  <NavBar />
  <Routes>
  <Route index element={<EmployeeList/>}/>
    <Route path="/" element={<EmployeeList/>}></Route>
    <Route path="/employeeList" element={<EmployeeList/>}/>
    <Route path="/addEmployee" element={<AddEmployee/>}/>
    <Route path="/editEmployee/:id" element={<UpdateEmployee/>} />
  </Routes>
  </BrowserRouter>
  </>
   
  );
};
// jsx
export default App;
