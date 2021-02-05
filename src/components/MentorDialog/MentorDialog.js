import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import './MentorDialog.css'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'rgb(205, 132, 129)',
    height                : '300px',
    width                  :'400px'
  }
};
Modal.setAppElement('#root')
const MentorDialog = ({modalIsOpen, closeModal,value}) => {
  const mentorId=value
  
  
  
    const[mentorDetail,setMentorDetail]=useState({})
    
  
    

    useEffect(()=>{
        fetch(`https://cors-anywhere.herokuapp.com/https://catalysed-iteration1.el.r.appspot.com/mentors/${mentorId}`)
        .then(res=>res.json())
        .then(json=>setMentorDetail(json)
            )
            .catch(() => console.log("Can’t access  response. Blocked by browser?"))
    },[])
   
    
    return (
        <div >
          
        <Modal
          isOpen={modalIsOpen}
        
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          
       
          <div className="row">
            <div className="col-md-3">
            <img  style={{height:"70px"}}src={mentorDetail.profilePic}/>
            </div>
            <div className="col-md-9 ">
         <h1 className="text-white d-flex ml-3">{mentorDetail.firstName}  {mentorDetail.lastName}</h1>

            <p><b> Gender :</b>{mentorDetail.gender}<br/>
            <b>Email :</b>{mentorDetail.email}<br/>
            
       
       {/* He/She returns along with the gender conditioning  */}
       <b>Address :</b> 
            {
              mentorDetail.gender=="Male"?`He lives in ${mentorDetail.location}`:`She lives in ${mentorDetail.location}`
            }

            </p>
            </div>
          </div>
          
            
         
          
            
          
            <button class="btn btn-warning m-auto d-flex " onClick={closeModal}>close </button>
        </Modal>
        </div>
    );
};

export default MentorDialog;