import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

const Admin = () => {
    const[allUser, setAllUser] = useState ([])
    useEffect(() => {
        fetch('https://floating-earth-62949.herokuapp.com/allUser')
        .then(res=>res.json())
        .then(data=> setAllUser(data))
    },[])

    const deleteTask =(id)=>{
        const deletedId = id
        fetch(`https://floating-earth-62949.herokuapp.com/deleteTask/${id}`,{method:'DELETE'})
        .then(res=> res.json())
        .then(data=> {
            const existTask = allUser.filter(user =>user._id != deletedId)
            setAllUser(existTask)
        })
    }

    return (
        <div>
              
        <div className='container'>
        <div className="row py-4">
            <div className="col-md-3">
                <img height='50' src="https://i.ibb.co/GQYn4Tp/logo.png" alt="" />
            </div>
            <div className="col-md-9">
                <h5 className='font-weight-bolder mt-4'>Volunteer register list</h5>
            </div>
        </div>
    </div>

    <div className='container-fluid'>
        <div className="row">

            <div className="col-md-3 pt-4 height-part">

                <ul className="nav flex-column">
                    <li className="nav-item mb-2">

                        <Link className="nav-link font-weight-bolder btn btn-outline-primary active" to="/admin">
                            <span><img height='25' src="https://i.ibb.co/Jc6ZbLQ/users.png" alt="" /></span>  Volunteer Resister List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link font-weight-bolder btn btn-outline-primary" to="/adminAddEvent">
                            <span><img height='30' src="https://i.ibb.co/fYcgC8L/add.png" alt="" /></span>  Add Event</Link>
                    </li>
                </ul>

            </div>
            <div className="col-md-9 height-part  bg-part py-5">
                <div className="card  h-90 shadow ">

                    <table class="table table-part px-5">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Registration</th>
                                <th scope="col">Volunteer Taks</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {allUser.map(user=>
                            <tr key={user._id} >
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.date}</td>
                                <td>{user.task}</td>
                                <td><button onClick={()=>deleteTask(user._id)} class='btn btn-danger'><img height='20' src="https://i.ibb.co/MR2ZvS3/trash.png" alt=""/></button></td>                                        
                            </tr>
                            )}

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Admin;