import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Mentor from '../Mentor/Mentor';

const ProgramDetail = () => {
    const {programId}=useParams()
    const [detail,setDetail]=useState({})
    const[mentor,setMentor]=useState([])
    
    useEffect(()=>{
        
        fetch(`https://cors-anywhere.herokuapp.com/http://test.catalysed.org/programs/${programId}`)
        .then(res=>res.json())
        .then(json=>{
            setDetail(json)
            setMentor(json.mentors)
        })
            .catch(() => console.log("Can’t access " + " response. Blocked by browser?"))
    },[])

console.log(mentor)
    return (
        <div>
           <h1>{detail.name}</h1> 
           <div className="row">
               {
                   mentor.map((data,index)=><Mentor  data={data} index={index} ></Mentor>)
               }
           </div>
        </div>
    );
};

export default ProgramDetail;