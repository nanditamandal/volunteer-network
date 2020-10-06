import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import VolunteerItems from '../VolunteerItems/VolunteerItems';
import './Home.css'

const Home = () => {
    const [volunteer, setVolunteer] = useState();
 

    useEffect(()=>{
        fetch('https://arcane-stream-85423.herokuapp.com/allVolunteerItem')
        .then(res=>res.json())
        .then(data=>{
            setVolunteer(data);
            console.log(data)
        })

    }, [])
   
    return (
        <>
        <Container >
            
            <div className= "container">
            <Header></Header>
            <div style={{textAlign:"center", width:"100%"}}><h1 >I GROW BY HELPING PEOPLE NEED</h1></div>
                {
                   volunteer &&
                   volunteer.map(
                       vt=> <VolunteerItems key ={vt.id} vt={vt}></VolunteerItems>
                        )
                }
            </div>
        </Container>
             
        </>

       
    );
};

export default Home;