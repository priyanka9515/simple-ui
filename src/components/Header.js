import React, { Component } from 'react';
import {circleDown} from 'react-icons-kit/icomoon/circleDown'
// import {circleDown} from 'react-icons-kit/icomoon/circleDown'
import Icon from "react-icons-kit"
import {search} from 'react-icons-kit/fa/search'

import {Link} from "react-router-dom";
import { pink } from '@material-ui/core/colors';

function Header() {
    const nav=[
        {id:1,label:"cars"},
        {id:2,label:"automobiles"},   {id:3,label:"BIkes"},   {id:4,label:"cycle"},
    ]
 
          
        return (  
            <React.Fragment>
            <div className="Header fixed flex alc" style={{background:"gray",height:"50px"}}>
                
        <h3 >  Nayagaadi</h3>
<div className ="location rel flex alc" style={{background:"white",border:"2px solid black",borderRadius:"5px",marginLeft:"100px"}}
>                   <Icon
 icon={search} style={{ size:"24px", padding:"10px",background:"#fff",border:"0px",flex:"1"}} />
    
    <input className="label" placeholder="your location" value ="india" style={{fontSize:"16px",outline:"none"}}></input>
    <Icon icon={circleDown} style={{ size:"24px", padding:"10px",background:"#fff",border:"0px",flex:"1"}}/>
        
</div>
<div className="search flex alc"  style={{marginLeft:"100px"}}>
    <input type ="text" placeholder ="find cars, Bikes, and more.."  style={{background:"white",border:"2px solid black",borderRadius:"5px",marginLeft:"100px",fontSize:"20px",flex:"2",margin:"0px 20px"}}className="query"/>
    <Icon icon ={search} style={{padding:"-30px",fontWeight:"20px"}}/>
</div>
<div className="actions flex alc">
    <Link to ="/account signin" className ="font" style={{marginLeft:"50px",fontSize:"24px"}}>signin</Link>

</div>
<div className="hnav fixed flex alc">
    <button className="view-cates flex alc">
        
    <h2 style={{fontSize:"20px"}}>All categories</h2>
    <Icon icon={circleDown} style={{ size:"24px", padding:"10px",background:"#fff",border:"0px",flex:"2",marginTop:"100px"}}/>
    </button>
    {
    nav.map(item => {
        return(
            <Link to ={"/browser" +item.id} className={item.label}/>
        )

    })
}
</div>


            </div>
            </React.Fragment>
        );
    }

 
export default Header;
// import React, { Component } from 'react';
// import Icon from 'react-icons-kit';
// import {search} from 'react-icons-kit/fa/search'
//  import {circleDown} from 'react-icons-kit/icomoon/circleDown'


// function Header() {
  
//         return (
//             <div className="Header fixed flex ">
//                 <div className="logo">
//                 <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-gztonagxy-qbbFqWc6zFaLjFZJR74-V8Ug&usqp=CAU"}></img>
           
//                 </div>
//                 <div className ="location rel">
//                     <div 
// icon={search} />
// <input className="label" placeholder="your location">india</input>
//   <Icon icon={circleDown} style={{ size:"24px", padding:"10px",background:"#fff",border:"0px",flex:"1"}}/>

//                     </div>
//                      </div>
//           );
    
// }
 
// export default Header;