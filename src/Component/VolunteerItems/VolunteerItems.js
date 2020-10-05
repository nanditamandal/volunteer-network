import React from 'react';
import { useHistory } from 'react-router-dom';


const VolunteerItems = (props) => {
    const history =useHistory();
    const {_id, picture, name}=props.vt;
    return (
        
            <>
                <div style={{margin:'5px'}} onClick={()=>history.push('/register/'+_id)}>
                     <img src={picture} className="card-img-top" alt="..." style={{width:'250px'}}/>
                     <p>{name}</p>
                </div>
              
                
                
              
                   
            
            </>
            
       
    );
};

export default VolunteerItems;