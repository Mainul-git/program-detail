import React from 'react';
import { Link } from 'react-router-dom';

const ProgramDirectoryChild = ({data}) => {
   
    return (<>
    <div className="row">
        {
            data.map(data=>
                <div className="col-md-4">
                    <Link className="justify-content-center" style={{textDecoration:"none",color:"inherit"}} to={`programDetail/${data.id}`}>
                        <div>
         <h4>{data.name}</h4>
            <p>{data.category}<br/>
         {data.shortDescription}<br/>
         {data.phase}<br/>
         {data.startDate}<br/>
         {data.duration}</p>
         </div>
         </Link> 
            
     </div>)
        }
    </div>
        {/* // <div className="col-md-4">
        //     <h4>{data.name}</h4>
        //     <p>{data.category}<br/>
        //     {data.shortDescription}<br/>
        //     {data.phase}<br/>
        //     {data.startDate}<br/>
        //     {data.duration}</p> 
            
        // </div> */}

        </>
    );
};

export default ProgramDirectoryChild;