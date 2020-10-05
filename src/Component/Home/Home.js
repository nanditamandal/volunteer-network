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
                {
                   volunteer &&
                   volunteer.map(
                       vt=> <VolunteerItems key ={vt.id} vt={vt}></VolunteerItems>
                        )
                }
            </div>
        </Container>
              {/* <div className="d-flex flex-column">
             
        
                    { volunteer &&
                    volunteer.map(
                        vt=> <div  onClick={()=> history.push('/login')} >
                        <img src={vt.picture} className="card-img-top" alt="..."/>
                        
                        </div>
                        )
                }
       
                </div>  */}
        </>




     
   
        
            
             
            

       
    );
};

export default Home;