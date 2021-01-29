import React, { useEffect, useState } from 'react';
import ProgramDirectoryChild from '../ProgramDirectoryChild/ProgramDirectoryChild';
import './ProgramDirectory.css'
require('es6-promise').polyfill()
require('isomorphic-fetch')

const ProgramDirectory = () => {
     const[state,setState]=useState(true)
    const[checked,setChecked]=useState(false)
    const[checked2,setChecked2]=useState(false)
    const[checked3,setChecked3]=useState(false)
    const[checked4,setChecked4]=useState(false)
    const[phase,setPhase]=useState("")
    const[data,setData]=useState([])
    const[q,setQ]=useState("")
 
    useEffect(()=>{
        fetch('https://api.allorigins.win/raw?url=https://glassy-totality-302717.el.r.appspot.com/programs')
        .then(res=>res.json())
        .then(json=>setData(json)
            )
            .catch(() => console.log("Can’t access response. Blocked by browser?"))
    },[])
const phases=data.map(r=>r.phase)

const check=(e)=>{
 
  
    if(!checked){
      
       
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked(false)
        setPhase(e.target.value)
        
     
    }
    if(checked){
        setPhase("")
    }
}
const check2=(e)=>{
    if(!checked2){
        setChecked(false)
        setChecked3(false)
        setChecked4(false)
        setChecked2(false)
        setPhase(e.target.value)
        
    }
     if(checked2){
        setPhase("")
    }
}
const check3=(e)=>{
    if(!checked3){
        setChecked(false)
        setChecked2(false)
        setChecked4(false)
        setChecked3(false)
        setPhase(e.target.value)
        
       
    }
     if(checked3){
        setPhase("")
    }
    
}
const check4=(e)=>{
    if(!checked4){
        setChecked(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setPhase(e.target.value)
    
    }
     if(checked4){
        setPhase("")
    }
}


    const  search =(r)=>{
         
          
         
      if(q.length===0){
        return(r.filter(r=>
                    r.phase.indexOf(phase)>-1
                   ))
      }
       
        if(phase){

            return(r.filter(r=>
                r.phase.indexOf(phase)>-1 ||
                r.name.toLowerCase().indexOf(q)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 
                ))
                
            
        }
   
            else{
             
                return  (r.filter(r=>r.name.indexOf(q)>-1||
             
                r.name.toLowerCase().indexOf(q)>-1 ||
                    r.category.indexOf(q)>-1   ||
                    r.category.toLowerCase().indexOf(q)>-1  ||
                    r.shortDescription.indexOf(q)>-1 ||
                    r.shortDescription.toLowerCase().indexOf(q)>-1||
                    r.phase.toLowerCase().indexOf(q)>-1||
                    r.phase.indexOf(q)>-1 
                   
                    
                   
                   )
               
                    
                )
            }
              
              
            }
         
        
           
   return (
   <>

   
 
  

 
    <h1 className="text-center"><u>Program Page </u></h1>
       
   
    <div className="d-flex  justify-content-center  ">
    <div className=" search-container container w-50 h-auto">
        <div className="m-auto d-flex justify-content-center">
       <input type="text" className="w-75 mt-4  search h-auto "  placeholder="Search for program you want...." value={q} onChange={(e)=>setQ(e.target.value)}/>
       </div>
       <div style={{display:'inline'}} className="  row  d-flex">
  
<div  className="col-md-3 ">
<label >
   <input type="checkbox"onClick={check}  checked={checked}  onChange={()=>(setChecked(!checked))} value={phases[0]}/>
   <b>Open Application</b> 
   </label>
   </div>
   <div className="col-md-3 ">

<label >
   <input type="checkbox" onClick={check2} checked={checked2}  onChange={()=>(setChecked2(!checked2))} value={phases[1]}/>
   <b>Application in Review</b>
   </label>
</div>
<div className="col-md-3 ">
         <label>
   <input type="checkbox" onClick={check3} checked={checked3}   onChange={()=>(setChecked3(!checked3))} value={phases[3]}/>
   <b>In Progress</b> 
   </label>
   </div>
   <div className="col-md-3">

         <label>
   <input type="checkbox" onClick={check4} checked={checked4}  onChange={()=>(setChecked4(!checked4))} value={phases[6]}/>
   <b>Completed</b>
   </label>
</div>
     </div>
       </div>
   
    </div>
  
        <div className=" pt-3">
            
           
            <ProgramDirectoryChild  data={search(data)}></ProgramDirectoryChild>
           
        </div>
        </>
    );
};

export default ProgramDirectory;