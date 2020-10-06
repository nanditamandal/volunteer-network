import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


import "react-datepicker/dist/react-datepicker.css";

const AddVolunteerItem = () => {
    const [error, setError]=useState({
        fieldName:'',
        errorMessage:'',
        status: false
      
      });
    const [value, setValue] = useState({
            name: '', 
          description: '',
          date:''
    });

    const handelBlur=(e)=>{
        let isFormValid;
        if(e.target.name === 'name' || e.target.name === 'description')
    {
       
      const nameLength= e.target.value.length>2;
      const re =/^[a-z A-Z]+$/;
      const nameType= re.test(e.target.value);
      isFormValid= nameLength && nameType;

      if(!isFormValid){
        checkError(e.target.name,' length at least 3 and all characters');
      }
       
      
    }
    if(e.target.name === 'date'){
        isFormValid =true;
    }
   
    if(isFormValid)
    {
      let newUser= {...value};
      newUser[e.target.name]=e.target.value;
      const errorStatus={
        fieldName:'',
        errorMessage: '',
        status: false
      }
      setError(errorStatus);
      setValue(newUser);
    } 


    }
    const  checkError=(fieldName, message)=>{
        const errorStatus={
          fieldName:fieldName,
          errorMessage: message,
          status: true
        }
        setError(errorStatus);
        
      }

console.log(value)
const handelPost=()=>{
   alert("soory can not cunnect")
}

    return (
        <div className="container d-flex flex-column">
          
            <Form.Group controlId="EventTitle">
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="text"name="name" placeholder="Event Title" onBlur={handelBlur}  required />
                
            </Form.Group>
            <br/>
            {error.status && (error.fieldName==='name') && <span className="errorMessage">{error.fieldName+" "+error.errorMessage}</span>}
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" as="textarea" rows="2" onBlur={handelBlur}  required/>
            </Form.Group>
            {error.status && (error.fieldName==='description') && <span className="errorMessage">{error.fieldName+" "+error.errorMessage}</span>}
            
            <Form.Group controlId="EventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="date"  name="date" onBlur={handelBlur}  required/>
            </Form.Group>
            <Form.Group>
                <Form.File  label="Example file input" />
            </Form.Group>
            
            <Button onClick={handelPost} variant="primary" type="submit">
                Submit
            </Button>
      
           
        </div>
    );
};

export default AddVolunteerItem;