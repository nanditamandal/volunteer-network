import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { Controller, useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

const AddVolunteerItem = () => {
    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => {
  
     
    fetch('https://arcane-stream-85423.herokuapp.com/addVolunteering',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
       
        console.log(data)
    })
   
  }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="ventTitle">Event Title</label>
                    <input
                
                    id="eventTitle"
                    name="eventTitle"
                    ref={register({ required: true })}
                    /><br/>

                    <label htmlFor="description">Description</label>
                    <input
                  
                    id="description"
                    name="description"
                    ref={register({ required: true })}
                 
                    />
                    <br/>
                 
                    <br/>
                    <label htmlFor="ReactDatepicker">Event date</label>
                    <Controller
                        control={control}
                        name="ReactDatepicker"
                     
                        render={({ onChange, onBlur, value}) => (
                      
                        <ReactDatePicker
                            dateFormat="dd/MMM/yyyy"
                            onChange={onChange}
                            onBlur={onBlur}
                            
                            selected ={value}
                            
                        />
                        )}
                    />
                    <br/>
                 

                  
                    <label htmlFor="file">Banner</label>
                    <input
                    type="file"
                    id="file"
                    name="file"
                    ref={register({ required: true })}
                 
                    />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            {/* <Form onSubmit={}>
            <Form.Group controlId="EventTitle">
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="text" placeholder="Event Title" />
                
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
            </Form.Group>

            
            <Form.Group controlId="EventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="date"  />
            </Form.Group>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Example file input" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form> */}
        </div>
    );
};

export default AddVolunteerItem;