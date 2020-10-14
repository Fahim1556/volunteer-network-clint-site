import React, { useContext, useEffect, useState } from 'react';
import {loginContexApi} from '../Main';
import Navbar from '../Navbar/Navbar';
import './EvenTask.css'

const EvenTask = () => {

    const [userTask, setUserTask] = useState([])
    const [loginUser,setLoginUser] =useContext (loginContexApi)
    useEffect(() =>{
        fetch(`https://blooming-earth-11428.herokuapp.com/getUserTask?email=${loginUser.email}`)
        .then(res=>res.json())
        .then(data=> setUserTask(data))
    },[])


    const deleteTask =(id)=>{
        const deletedId = id
        fetch(`https://blooming-earth-11428.herokuapp.com/deleteTask/${id}`,{method:'DELETE'})
        .then(res=> res.json())
        .then(data=> {
            const existTask = userTask.filter(user =>user._id != deletedId)
            setUserTask(existTask)
        })
    }


    return (
        <div>
         <Navbar></Navbar>

         <div className="container marginTop-part">

            <div className="row">

        {userTask.map(task=>
                <div key ={task._id} className="col-md-6 py-4">
                    <div className="card">

                            <div className="row">

                                <div className="col-md-5">
                                    <img height='190' width='190' src={task.image} alt=""/>
                                </div>
                                <div className="col-md-7 px-5 py-2">
                                            <h4>{task.task}</h4>
                                            <h5>{task.date}</h5>
                                            <p className='lead'>{task.description}</p>
                                            
                                            <div className="d-flex flex-row justify-content-end mt-6">
                                                <button onClick={()=>deleteTask(task._id)} className='btn btn-danger'>Cancel</button>
                                            </div>
                                </div>
                            </div>
                    </div>
                </div>
            )}
               
                
                
            </div>
        </div> 
        </div>
    );
};

export default EvenTask;