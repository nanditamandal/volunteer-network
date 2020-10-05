import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';


const Event = () => {
    const history=useHistory();
 
   const [logInUser, setLogInUser]= useContext(UserContext);
   const [volunteerEvent, setVolunteerEvent] = useState();

   useEffect(()=>{
    fetch('http://localhost:5000/volunteerEvent?email='+logInUser.email,{
        method: 'GET',
        headers: {
            "Content-type": 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    })
    .then(res=>res.json())
    .then(data=>setVolunteerEvent(data))

}, [])
console.log(volunteerEvent);
const handelDeleteEvent=(e, id)=>
{
    let node= e.target.parentNode.parentNode.parentNode.parentNode;
    console.log(node);
   
    fetch(`http://localhost:5000/deleteEvent/${id}`,{ 
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
}
 
  
    return (
        <div  style={{minHeight: '100vh',background: '#E5E5E5'}}>
            <Header></Header>
            <div className="container">
                {
                    volunteerEvent && volunteerEvent.map(ve=>   
                    

                    <Card  style={{ width: '25rem' }}>
                        <Row>
                            <Col>
                                 <Card.Img variant="top" src={ve.picture} />
                            </Col>
                            <Col>
                                    <Card.Body>
                                        <Card.Title>{ve.organization}</Card.Title>
                                        <Card.Text>{ve.ReactDatepicker} </Card.Text>
                                        <Button onClick={(e)=>{handelDeleteEvent(e,`${ve._id}`)}} variant="primary">Cancel</Button>
                                    </Card.Body>
                            </Col>
                        </Row>
                       
                        
                    </Card>
                    )
                }
                </div>
                 
                
            

            
        </div>
    );
};

export default Event;