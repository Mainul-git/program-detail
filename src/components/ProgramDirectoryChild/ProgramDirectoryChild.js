import React from 'react';
import { Link } from 'react-router-dom';

const ProgramDirectoryChild = ({data}) => {
   
    return (<>
    <div className="row container offset-md-1 d-flex justify-content-around mt-3">
        {
           
               
                data.map( data=> 
                <div className="col-md-4 mb-2 ">
                    <Link className="justify-content-center" style={{textDecoration:"none",color:"inherit", textAlign:'center'}} to={`programDetail/${data.id}`}>
                       
                        <div className="card " style={{background:"rgb(205, 132, 129)"}}>
         <h4 className="text-white">{data.name}</h4>
            <p className="text-dark">{data.category}<br/>
                                  {data.shortDescription}<br/>
                                  {data.phase}<br/>
                                  {data.startDate}<br/>
                                  {data.duration}</p>
         </div>

         </Link> 
            
     </div>)
        }
    </div>
       
        </>
    );
};

export default ProgramDirectoryChild;