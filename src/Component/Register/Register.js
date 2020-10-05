import React,{useContext, useEffect, useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import { Controller, useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {
    const {id} =useParams();
    const [events , setEvent] =useState([]);
    const [logInUser, setLogInUser]= useContext(UserContext);
    const history =useHistory();
    useEffect(()=>{
        fetch('http://localhost:5000/findEven/'+id)
        .then(res=>res.json())
        .then(data=>{
            setEvent(data);

        })
    }, [id])
    console.log(events);
  

    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => {
    const eventDetails ={picture : events.picture, ...data} ;
  
     
    fetch('http://localhost:5000/addEvent',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(eventDetails)
    })
    .then(res=>res.json())
    .then(data=>{
       
        console.log(data)
    })
    history.push('/events');
  }
    return (
        <div className="container d-flex flex-column justify-content-center" style={{minHeight: '100vh',background: '#E5E5E5'}}>
            <div className="header">
                <img src="https://i.ibb.co/nspf4Kr/Group-1329.png" alt="Group-1329" border="0"></img>
            </div>
            <div className="login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="inputName">Full Name</label>
                    <input
                    value={logInUser.name}
                    id="inputName"
                    name="fullName"
                    ref={register({ required: true })}
                    /><br/>

                    <label htmlFor="email">Email</label>
                    <input
                    value={logInUser.email}
                    id="email"
                    name="email"
                    ref={register({ required: true })}
                 
                    />
                    <br/>
                 
                    <br/>
                    <label htmlFor="ReactDatepicker">date</label>
                    <Controller
                        control={control}
                        name="ReactDatepicker"
                     
                        render={({ onChange, onBlur, value}) => (
                      
                        <ReactDatePicker
                            
                            onChange={onChange}
                            onBlur={onBlur}
                            //selected={value}
                            selected ={value}
                        />
                        )}
                    />
                    <br/>
                 

                    <label htmlFor="description">Description</label>
                    <input id="Description" name="Description" ref={register({ required: true })} />     
                       
                    
                    <br/>

                    <label htmlFor="organization">Organization</label>
                    <input value={events.name} id="organization" name="organization"   ref={register({ required: true })} />
                    <br/>
                
               
                 
                  
                    

                    <button type="submit">Submit</button>
                </form>
             </div>
           
            
         
    

        </div>
    );
};

export default Register;