import React, { Component } from 'react';
import {circleDown} from 'react-icons-kit/icomoon/circleDown'
// import {circleDown} from 'react-icons-kit/icomoon/circleDown'
import Icon from "react-icons-kit"
import {search} from 'react-icons-kit/fa/search'

import {Link} from "react-router-dom";
import { pink } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';

function Header() {
    const nav=[
        {id:1,label:"cars"},
        {id:2,label:"automobiles"},   {id:3,label:"BIkes"},   {id:4,label:"cycle"},
    ]
 
          
        return (  
            <React.Fragment>
            <div className="Header fixed flex aic" >
                
            <div className="logo">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-gztonagxy-qbbFqWc6zFaLjFZJR74-V8Ug&usqp=CAU"}></img>
           </div>
               
<div className ="location rel flex aic" 
  >                   <Icon
 icon={search}  className= "s24" style={{padding:"10px"}} />
    
    <input className="label" placeholder="your location" value ="india" style={{  background: "#fff",
 border: "2px 333solid",
 borderradius: "5px",flex:1,padding:"10px",}}></input>
    <Icon icon={circleDown} className="arrow s24" style={{flex:1,padding:"10px",background:"fff",size:"30px"}}/>
        
</div>
<div className="search flex alc" >
    <input type ="text" placeholder ="find cars, Bikes, and more.."  style={{  background: "#fff",  border: "2px 333solid",
 borderradius: "5px",flex:1,padding:"10px",}}className="query font s15"/>
    <Icon icon ={search} className="go s24 "/>
</div>
<div className="actions flex alc">
    <Link to ="/account signin" className ="fontb s15" >signin</Link>

</div>
<Button className="sell" ></Button>
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
