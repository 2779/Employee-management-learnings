import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {
   const navigate=useNavigate();

  const { id } = useParams();
  const [employee,setEmployee] = useState(
    {
      id: id,
      firstName: "",
      lastName: "",
      emailId: "",

    }
  );

  const handleChange = (e)=>{
    const value = e.target.value;
    setEmployee({...employee,[e.target.name]: value});

    
}
useEffect(() => {
  const fetchData = async()=> {
    try{
      const response=await EmployeeService.getEmployeeById(id);
      setEmployee(response.data);

    }catch(error){
      console.log(error);
    }
  }
fetchData();
}, []);


  const UpdateEmployee=(e)=>{
    e.preventDefault();
    EmployeeService.UpdateEmployee(employee,id)
    .then((response)=>{
        navigate("/employeeList");
    }).catch((error)=>{
        console.log(error);
    });
  }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>updateEmployee</h1>
            </div>
            <div className="my-4 items-center justify-center h-14 w-full">
                    <label className="block text-gray-600 text-sm font-normal" >First Name</label>
                    <input type="text"
                    name="firstName"
                    value={employee.firstName}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="my-4 items-center justify-center h-14 w-full">
                    <label className="block text-gray-600 text-sm font-normal" >Last Name</label>
                    <input type="text" 
                    name="lastName"
                    value={employee.lastName}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="my-4 items-center justify-center h-14 w-full">
                    <label className="block text-gray-600 text-sm font-normal">Email Name</label>
                   
                     
                    <input type="email" className="h-10 w-96 border mt-2 px-2 py-2"
                    name="emailId"
                    value={employee.emailId}
                    onChange={(e) => handleChange(e)}
                    ></input>
            </div>
            <div className="my-4 items-center justify-center h-14 w-full space-x-4 pt-4">
                    <button className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700 px-6   "
                    onClick={UpdateEmployee}>Update</button>
                    <button 
                    onClick={()=> navigate("/employeeList")}
                    className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700 px-6 py-2">Cancel</button>
                   
                    </div>

        </div>
    </div>
  )
}

export default UpdateEmployee