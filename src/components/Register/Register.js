import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {loginContexApi} from '../Main';


const Register = () => {
    const history = useHistory()
    const [loginUser,setLoginUser] = useContext(loginContexApi) 
    const [selectedTask,setSelectedTask] = useState({})
    const {key} =useParams()

    useEffect(() =>{
        fetch(`https://blooming-earth-11428.herokuapp.com/singleTask?id=${key}`)
        .then(res=>res.json())
        .then(data=> setSelectedTask(data))
    },[])


    const eventHandle = (event)=>{

        event.preventDefault()
        const date = document.getElementById('date').value
        const description = document.getElementById('description').value
        const userData = {...loginUser,...selectedTask,description:description, date:date}


        fetch("https://blooming-earth-11428.herokuapp.com/userTask",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        .then(res=>res.json())
        .then(data=> history.push('/tasks'))
        
                
        

    }


    return (
        <div className="container full">

        <div className='container'>
        <div className="row mt-5 d-flex">
            <img className='d-block mx-auto' src="https://i.ibb.co/GQYn4Tp/logo.png" height='50' alt=""/>
            <div className="col-md-5 mx-auto mt-4 py-6">
                <div className="card">
                
                    <div className="card-body text-center py-5">
                        <h2 className='text-secondary'>Register as a Volunteer</h2>

                        <form>
                            <input className='form-control mb-3' value={loginUser.name} type="text" placeholder='Full Name ' disabled/>
                            <input className='form-control mb-3' value={loginUser.email} type="text" placeholder='Username or Email' disabled/>
                            
                            <input className='form-control mb-3' id="date" type="date" placeholder='Date' required/>
                            <textarea  className='form-control mb-3' id="description" placeholder='Description' required></textarea>
                            <input className='form-control mb-3' value={selectedTask.task} type="text" placeholder='Organize books at the library'/>
                            <input onClick={eventHandle} className='btn btn-block btn-outline-primary' type="submit" value='Register'/>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

            
        </div>
    );
};

export default Register;