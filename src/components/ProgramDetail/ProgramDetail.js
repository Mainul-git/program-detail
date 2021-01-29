import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Mentor from '../Mentor/Mentor';

const ProgramDetail = () => {
    const {programId}=useParams()
    const [detail,setDetail]=useState({})
    const[mentor,setMentor]=useState([])
    
    useEffect(()=>{
        
        fetch(`https://cors-anywhere.herokuapp.com/https://glassy-totality-302717.el.r.appspot.com/programs/${programId}`)
        .then(res=>res.json())
        .then(json=>{
            setDetail(json)

            setMentor(json.mentors)
        })
            .catch(() => console.log("Can’t access  response. Blocked by browser?"))
    },[])

    return (
        <div className="text-center ">
            <h1><u>Program Detail Page</u></h1>

<h3><u>{detail.name}</u></h3>
{/* dynamic data of API is inside bold tag */}
         <i> <p>You want to join<b> {detail.name}</b>  program.<br/>Hope,you will enjoy this program safely.<br/>
           The program is now under <b>{detail.category}</b>  category
           <span className=""> This is a very crucial program. <br/>You will have great mentors whose names are shown below</span>
          </p></i>   
          
          
           <div className="row ml-1 justify-content-around pr-3">


               {/* passing index as second argument to match with the mentorId  */}



               <h1>Mentors of the program : </h1>
               {
               mentor.length===0?<img style={{height:'300px',width:'300px'}} src="https://i.ibb.co/44tH15m/Spinner-1s-200px.gif" /> :    mentor.map((data,index)=><Mentor  data={data} index={index} ></Mentor>)
               }
           </div>
        </div>
    );
};

export default ProgramDetail;