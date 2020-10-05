import React from 'react';
import { Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
 

            <div className="container d-flex flex-column">
                <div>
                <img src="https://i.ibb.co/nspf4Kr/Group-1329.png" style={{heigh: '100px', width:'200px'}} alt="Group-1329" border="0"></img>
                 </div>
                 <br/>
                 <div>
                 <Link to="/admin"><img style={{heigh: '10px', width:'20px'}} src="https://i.ibb.co/rsxVYBr/users-alt-1.png" alt="users-alt-1" border="0"/>Volunteer register list</Link>
                 </div>
                 <br/>
                 <div>
                 <Link to="/addEvent"><img style={{heigh: '20px', width:'20px'}}src="https://i.ibb.co/0F8D6fK/plus-1.png" alt="plus-1" border="0"/>Add Event</Link>
                 </div>
                 <br/>
                 
               

           
               
                
            </div>
          
            
     
    );
};

export default AdminHeader;