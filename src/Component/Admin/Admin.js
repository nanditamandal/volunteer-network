import React from 'react';
import fakeData from '../FakeData/fakeData';
import Button from 'react-bootstrap/Button'

const Admin = () => {
    const handelAddVolunteering=()=>{
        fetch('http://localhost:5000/addVolunteering',{
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
    return (
        <div>
            <h2>im admin</h2>
            <Button variant="primary" onClick={handelAddVolunteering}>Add event</Button>
            
        </div>
    );
};

export default Admin;