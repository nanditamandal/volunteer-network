import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const[logInUser, setLogInUser]= useContext(UserContext);
    
    const handelLogOut=()=>{
        setLogInUser({
          
        })
    }
    return (
       <>
            <container>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"><img src="https://i.ibb.co/nspf4Kr/Group-1329.png" alt="Group-1329" border="0" style={{height:'80px', width:'300px'}}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'300px'}}>
                    {
                         logInUser.name ? <h5>{logInUser.name}</h5> : <h5>{logInUser.email}</h5>
                        }
                        <Nav className="mr-auto">
                         
                        <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                  
                        <Nav.Link ><Link to="/events">Events</Link></Nav.Link>
                        <Nav.Link ><Link to="/login">Log In</Link></Nav.Link>
                        </Nav>
                       
                        <Button variant="outline-success">Register</Button>
                        <Button variant="outline-success"><Link to="/adminHome">Admin</Link></Button>
                        <Button className='btn' variant="outline-success" onClick={handelLogOut}>Sign Out</Button>
                       
                       
                        
                    </Navbar.Collapse>
                    </Navbar>
                    
            </container>
       </>
      
    );
};

export default Header;