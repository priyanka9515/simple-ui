import React, { Component } from 'react';

function Additem(props){

   if ("placeholder" in props){
    
        return ( 
            <div className="ad-item" >
                <div className= "poster placeholder" style={{height:"70px",width:"40px",background:"black"}}></div>
                <div className= "title placeholder"></div>
                <div className= "tagline placeholder"></div>
                <div className= "ftr  flex">
                <div className= "location placeholder"></div>
                </div>

            </div>
         );
        }
}
 
export default Additem;