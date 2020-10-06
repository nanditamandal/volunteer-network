import React from 'react';
import { useHistory } from 'react-router-dom';


const VolunteerItems = (props) => {
    const history =useHistory();
    const {_id, picture, name}=props.vt;
    const color =["red","blue ", "orange", "Tomato", "Violet", "SlateBlue"];
    var number = color[Math.floor(Math.random() * color.length)];
    console.log(number);

    const style={
        backgroundColor: number
    }
    return (
        
            <>
                <div style={{margin:'5px'}} onClick={()=>history.push('/register/'+_id)}>
                     <img src={picture} className="card-img-top" alt="..." style={{width:'250px'}}/>
                     <div style={style}>{name}</div>
                </div>
              
                
                
              
                   
            
            </>
            
       
    );
};

export default VolunteerItems;