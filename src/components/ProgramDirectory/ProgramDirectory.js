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
    const[phase4,setPhase4]=useState("")
    const[phase2,setPhase2]=useState("")
    const[phase3,setPhase3]=useState("")
    const[data,setData]=useState([])
    const[q,setQ]=useState("")
 
    useEffect(()=>{
        fetch('https://api.allorigins.win/raw?url=https://catalysed-iteration1.el.r.appspot.com/programs')
        .then(res=>res.json())
        .then(json=>setData(json)
            )
            .catch(() => console.log("Can’t access response. Blocked by browser?"))
    },[])
const phases=data.map(r=>r.phase)

const check=(e)=>{
 
  
    if(!checked){
      
       
       
        setPhase(e.target.value)
        
     
    }
    if(checked){
        setPhase("")
    }
}
const check2=(e)=>{
    if(!checked2){
      
        setPhase2(e.target.value)
        
    }
     if(checked2){
        setPhase2("")
    }
}
const check3=(e)=>{
    if(!checked3){
        
        setPhase3(e.target.value)
        
       
    }
     if(checked3){
        setPhase3("")
    }
    
}
const check4=(e)=>{
    if(!checked4){
      
        setPhase4(e.target.value)
    
    }
     if(checked4){
        setPhase4("")
    }
}


    const  search =(r)=>{
         
          
         
      if(q.length===0){
        if(phase && phase2 && phase3 && phase4){
            return(r.filter(r=>
                r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase2)>-1 ||
                 r.phase.indexOf(phase3)>-1 ||
                 r.phase.indexOf(phase4)>-1
               
               ))  
        
         }
        if(phase && phase2 && phase3 ){
            return(r.filter(r=>
                r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase2)>-1 ||
                 r.phase.indexOf(phase3)>-1 
               
               ))  
        
         }
         if(phase && phase2 && phase4){
            return(r.filter(r=>
                r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase2)>-1 ||
                 r.phase.indexOf(phase4)>-1 
               
               ))  
        
         }
         if(phase && phase3 && phase4){
            return(r.filter(r=>
                r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase3)>-1 ||
                 r.phase.indexOf(phase4)>-1 
               
               ))  
        
         }
         if(phase2 && phase3 && phase4){
            return(r.filter(r=>
                r.phase.indexOf(phase2)>-1 ||
                r.phase.indexOf(phase3)>-1 ||
                 r.phase.indexOf(phase4)>-1 
               
               ))  
        
         }
     
        if(phase && phase2){
            return(r.filter(r=>
                r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase2)>-1
               
               ))  
        
         }
         if(phase && phase3){
            return(r.filter(r=>
                r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase3)>-1
                
               ))  
        
         }
         if(phase && phase4){
            return(r.filter(r=>
                r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase4)>-1
               
               ))  
        
         }
         if(phase2 && phase3){
            return(r.filter(r=>
                r.phase.indexOf(phase2)>-1 ||
                r.phase.indexOf(phase3)>-1
               
               ))  
        
         }
         if(phase2 && phase4){
            return(r.filter(r=>
                r.phase.indexOf(phase2)>-1 ||
                r.phase.indexOf(phase4)>-1
               
               ))  
        
         }
         if(phase3 && phase4){
            return(r.filter(r=>
                r.phase.indexOf(phase3)>-1 ||
                r.phase.indexOf(phase4)>-1
                
               ))  
        
         }
         if(phase) {
            return(r.filter(r=>
                r.phase.indexOf(phase)>-1 
               
               ))  
        }
        if(phase2){
            return(r.filter(r=>
                r.phase.indexOf(phase2)>-1 
                
               ))  
        }
        if(phase3){
            return(r.filter(r=>
                r.phase.indexOf(phase3)>-1 
               
               ))  
        }
        if(phase4){
            return(r.filter(r=>
                r.phase.indexOf(phase4)>-1 
              
               ))  
        }
        
        }

        // after typing  search


        if(phase && phase2 && phase3 && phase4){


            return(r.filter(r=>
                (r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase2)>-1 ||
                r.phase.indexOf(phase3)>-1 ||
                r.phase.indexOf(phase4)>-1) &&
                ( r.name.indexOf(phase)>-1 ||
                r.name.toLowerCase().indexOf(q)>-1 ||
               
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }

        if(phase && phase2 && phase3){

            return(r.filter(r=>
                (r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase2)>-1 ||
                r.phase.indexOf(phase3)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase && phase2 && phase4){

            return(r.filter(r=>
                (r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase2)>-1 ||
                r.phase.indexOf(phase4)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase2 && phase3 && phase4){

            return(r.filter(r=>
                (r.phase.indexOf(phase2)>-1 ||
                r.phase.indexOf(phase3)>-1 ||
                r.phase.indexOf(phase4)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase && phase2){

            return(r.filter(r=>
                (r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase2)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase && phase3){

            return(r.filter(r=>
                (r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase3)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase && phase4){

            return(r.filter(r=>
                (r.phase.indexOf(phase)>-1 ||
                r.phase.indexOf(phase4)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase2 && phase3){

            return(r.filter(r=>
                (r.phase.indexOf(phase2)>-1 ||
                r.phase.indexOf(phase3)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase2 && phase4){

            return(r.filter(r=>
                (r.phase.indexOf(phase2)>-1 ||
                r.phase.indexOf(phase4)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase3 && phase4){

            return(r.filter(r=>
                (r.phase.indexOf(phase3)>-1 ||
                r.phase.indexOf(phase4)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
       
        if(phase){

            return(r.filter(r=>
                (r.phase.indexOf(phase)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase2){

            return(r.filter(r=>
                (r.phase.indexOf(phase2)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase2)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase3){

            return(r.filter(r=>
                (r.phase.indexOf(phase3)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase3)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
                ))
            
                
            
        }
        if(phase4){

            return(r.filter(r=>
                (r.phase.indexOf(phase4)>-1) &&
                (r.name.toLowerCase().indexOf(q)>-1 ||
                r.name.indexOf(phase3)>-1 ||
                 r.category.indexOf(q)>-1   ||
                 r.category.toLowerCase().indexOf(q)>-1  ||
                 r.shortDescription.indexOf(q)>-1 ||
                 r.shortDescription.toLowerCase().indexOf(q)>-1||
                 r.phase.toLowerCase().indexOf(q)>-1||
                 r.phase.indexOf(q)>-1 )
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