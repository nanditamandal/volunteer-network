import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Admin from '../Admin/Admin';
import AddVolunteerItem from '../AddVolunteerItem/AddVolunteerItem';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    const [page, setPage]= useState(true);
    return (
        <div className="container">
            <Row> 
                <Col  sm={4}>
                <div className="container d-flex flex-column">
                <div>
                <img src="https://i.ibb.co/nspf4Kr/Group-1329.png" style={{heigh: '100px', width:'200px'}} alt="Group-1329" border="0"></img>
                 </div>
                 <br/>
                 <div>
             
                 <Link  onClick={()=>setPage(true)}><img style={{heigh: '20px', width:'20px'}}src="https://i.ibb.co/0F8D6fK/plus-1.png" alt="plus-1" border="0"/>Volunteer register list</Link>
                 
                 {/* <Link to="/admin"></Link> */}
                 </div>
                 <br/>
                 <div>
                 <Link onClick={()=>setPage(false)}><img style={{heigh: '20px', width:'20px'}}src="https://i.ibb.co/0F8D6fK/plus-1.png" alt="plus-1" border="0"/>Add Event</Link>
                 </div>  
                </div>
          
                </Col>
                <Col  sm={8}>
                    {
                        page ? <Admin></Admin> : <AddVolunteerItem></AddVolunteerItem>
                    }
                    
                </Col>
            </Row>
            
            
        </div>
    );
};

export default AdminHome;