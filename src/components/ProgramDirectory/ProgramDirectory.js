import React, { useEffect, useState } from 'react';
import ProgramDirectoryChild from '../ProgramDirectoryChild/ProgramDirectoryChild';
import './ProgramDirectory.css'
require('es6-promise').polyfill()
require('isomorphic-fetch')
const ProgramDirectory = () => {
  
    const[data,setData]=useState([])
    const[q,setQ]=useState("")
    
    useEffect(()=>{
        fetch('https://cors-anywhere.herokuapp.com/http://test.catalysed.org/programs/')
        .then(res=>res.json())
        .then(json=>setData(json)
            )
            .catch(() => console.log("Can’t access response. Blocked by browser?"))
    },[])



    // filter according to name, category, shortDescription ,phase
    

    const  search =(r)=>{
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
    
    return (<>
    <h1 className="text-center"><u>Program Page </u></h1>
    <div className="d-flex search-input justify-content-center">
        
    <input type="text" className="w-50 search" style={{position:'relative'}} placeholder="Search for program you want...." value={q} onChange={(e)=>setQ(e.target.value)}/>
  
    </div>
  
        <div className=" pt-3">
            
                <ProgramDirectoryChild  data={search(data)}></ProgramDirectoryChild>
            
           
        </div>
        </>
    );
};

export default ProgramDirectory;