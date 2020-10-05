import React, { useEffect, useState } from 'react';
import fakeData from '../FakeData/fakeData';
import Button from 'react-bootstrap/Button'
import { Table } from 'react-bootstrap';

const Admin = () => {
    const [users, setUser]=useState();

    useEffect(()=>{
        fetch('https://arcane-stream-85423.herokuapp.com/showUser')
        .then(res=>res.json())
        .then(data=> setUser(data))

    },[])
    const handelAddVolunteering=()=>{
        fetch('https://arcane-stream-85423.herokuapp.com/addVolunteering',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(fakeData)
        })
        .then(res=>res.json())
        .then(data=>{
            data?console.log("data submit"): console.log("database not cunnected")
        })
    }
    const handelDeleteEvent=(e, id)=>{
        
        const node=e.target.parentNode.parentNode.parentNode;
        console.log(node);
        fetch(`https://arcane-stream-85423.herokuapp.com/deleteEvent/${id}`,{ 
        method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data && node)
          {
              node.style.display='none';
          }
          else{
            console.log("data not found");
          }
            
            
        })
        console.log("delete");
    }
    return (
        <div>
            
            <Button variant="primary" onClick={handelAddVolunteering}>Add event</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    
                    <th>Full Name</th>
                    <th>Email </th>
                    <th>Registration Date</th>
                    <th> Volunteer list</th>
                    <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map(user=>
                        <tr>
                        <td>{user.fullName}</td>
                        <td>{user.email}</td>
                        <td>{user.organization}</td>
                        <td>{user.ReactDatepicker}</td>
                        <td><Button variant="danger" onClick={(e)=>{handelDeleteEvent(e,user._id)}}>
                        <img src="https://i.ibb.co/5KLVv2g/trash-2-9.png"style={{height:'30px'}} alt="trash-2-9" border="0"/>
                        
                        </Button></td>
                        
                        </tr>

                        )
                    }
                   
                  
                    
                </tbody>
            </Table>
            
        </div>
    );
};

export default Admin;