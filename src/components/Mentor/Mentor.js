import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MentorDialog from '../MentorDialog/MentorDialog';
import './Mentor.css'
const Mentor = ({data,index }) => {
  const value=index+1
  const history=useHistory()
    const [modalIsOpen,setIsOpen] = useState(false);

    
    function openModal(e) {
      
    

      setIsOpen(true);
    }
   

   
    function closeModal(){
      setIsOpen(false);
    }
    
    
    return (
        <div className="col-md-5 col-5 card container mb-2 pb-2"style={{background:'rgb(205, 132, 129)'}}>
          <div className="row ml-1 mb-1 ">
            <div className="col-md-5 d-flex justify-content-center ">
            <img className="image-profilePic"src={data.profilePic} style={{}}/>
            </div>
            <div className="col-md-6">
            <h4 className="text-center text-white">{data.firstName} {data.lastName}</h4>
            <p> <b>Email:</b> {data.email}</p>

            <p>
              <span ><b>Specialized category:</b></span><br/>{
           data.specializations.map((data,index)=><span>{index+1}. {data}<br/></span>)
           }</p>
           <button onClick={openModal} className="btn  btn-primary">View Details</button>
            </div>
          </div>
          
     
         
     
<MentorDialog modalIsOpen={modalIsOpen}  value={value}closeModal={closeModal}></MentorDialog>
        </div>
    );
};

export default Mentor;