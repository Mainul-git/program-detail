import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MentorDialog from '../MentorDialog/MentorDialog';

const Mentor = ({data,index }) => {
  const value=index+1
  const history=useHistory()
    const [modalIsOpen,setIsOpen] = useState(false);
    const [number,setNumber] = useState();
    
    function openModal(e) {
      
      setNumber(value)

      setIsOpen(true);
    }
   

   
    function closeModal(){
      setIsOpen(false);
    }
    
    
    return (
        <div className="col-md-3">
           <h5 >{data.firstName} {data.lastName}</h5>
           <img src={data.profilePic} style={{height:"300px"}}/>
           <p>{
           data.specializations.map(data=><span>{data}<br/></span>)
           }</p>
        
        <button onClick={openModal} className="btn  btn-primary">View Details</button>
<MentorDialog modalIsOpen={modalIsOpen}  number={number} value={value}closeModal={closeModal}></MentorDialog>
        </div>
    );
};

export default Mentor;