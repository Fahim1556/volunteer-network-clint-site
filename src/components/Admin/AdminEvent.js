import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

const AdminEvent = () => {

    const addEvent = ()=>{
        const name = document.getElementById('name').value

        const data = {task:name,image:'https://i.ibb.co/6t19x95/download-1.jpg'}

        fetch("https://blooming-earth-11428.herokuapp.com/addEvent",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        
    }

    return (
        <div>
                <div className='container'>
                     <div className="row py-4">
                        <div className="col-md-3">
                            <img height='50' src="https://i.ibb.co/GQYn4Tp/logo.png" alt="" />
                        </div>

                        <div className="col-md-9">
                            <h4 className='font-weight-bolder mt-4'>Add Event</h4>
                        </div>
                     </div>
               </div>

               <div className='container-fluid'>
               <div className="row">
                   <div className="col-md-3 pt-4  height-part">

                       <ul className="nav flex-column">
                           <li className="nav-item mb-3">
                               <Link className="nav-link font-weight-bold btn btn-outline-primary " to="/admin">
                                   <span><img height='30' src="https://i.ibb.co/Jc6ZbLQ/users.png" alt="" /></span>  Volunteer Resister List</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link font-weight-bold btn btn-outline-primary active" to="/adminEvent">
                                   <span><img height='30' src="https://i.ibb.co/fYcgC8L/add.png" alt="" /></span>  Add Event</Link>
                           </li>
                       </ul>

                   </div>
                   <div className="col-md-9 height-part bg-part py-5">
                       <div className="card shadow h-110  p-5">
                           <div className="row">

                               <div className="col-md-6">
                                   <div className="form-group">
                                       <label htmlFor="">Event Name</label>
                                       <input id='name' className='form-control' placeholder='Event Name' type="text"/>
                                   </div>
                                   <div className="form-group">
                                       <label htmlFor="">Event Description</label>
                                       <textarea className='form-control' placeholder='Event Name'></textarea>
                                   </div>
                               </div>
                               <div className="col-md-6">
                                   <div className="form-group">
                                       <label htmlFor="">Event Date</label>
                                       <input className='form-control' type="date"/>
                                   </div>
                                   <div className="form-group">
                                       <label htmlFor="">Event Image</label>
                                       <input className='form-control' type="file"/>
                                   </div>
                               </div>
                                   <button onClick={addEvent} className='btn btn-primary ml-4'>Add Event</button>
                           </div>                     
                       </div>
                   </div>
               </div>
           </div>

            
        </div>
    );
};

export default AdminEvent;