import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import './MentorDialog.css'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'rgb(205, 132, 129)'
  }
};
Modal.setAppElement('#root')
const MentorDialog = ({modalIsOpen, closeModal,value}) => {
  console.log(value)
    const[mentorDetail,setMentorDetail]=useState({})
    
  
    

    useEffect(()=>{
        fetch(`https://cors-anywhere.herokuapp.com/http://test.catalysed.org/mentors/${value}`)
        .then(res=>res.json())
        .then(json=>setMentorDetail(json)
            )
            .catch(() => console.log("Can’t access " + " response. Blocked by browser?"))
    },[])
   
    
    return (
        <div >
          
        <Modal
          isOpen={modalIsOpen}
        
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 >Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            
         
            <h1>{mentorDetail.firstName}{mentorDetail.lastName}</h1>
            <p>{mentorDetail.id}</p>
            <img  style={{height:"40px"}}src={mentorDetail.profilePic}/>
          </form>
        </Modal>
        </div>
    );
};

export default MentorDialog;