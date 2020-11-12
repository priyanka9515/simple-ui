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
        {id:1,label:"Cars"},
        {id:2,label:"Automobiles"},   {id:3,label:"Bikes"},   {id:4,label:"Scooter"},{id:5,label:"ElectronicVechicles"},
    ]
 
          
        return (  
            <React.Fragment>
            <div className="Header fixed flex aic"  >
                
           <h1 style={{color:"red"}}>Nayagaadi</h1>
               
<div className ="location rel flex aic" 
  >                   <Icon
 icon={search}  className= "s24" style={{padding:"0px",marginLeft:"30px"}} />
    
    <input className="label" placeholder="your location" value ="india" style={{  background: "#fff",
 border: "2px 333solid",
 borderradius: "5px",flex:1,padding:"10px"}}></input>
    <Icon icon={circleDown} className="arrow s24" style={{flex:1,padding:"-10px",background:"fff",size:"40px",}}/>
        
</div>
<div className="search flex alc" >
    <input type ="text" placeholder ="find cars, Bikes, and more.."  style={{  background: "#fff",  border: "2px 333solid",
 borderradius: "5px",flex:1,padding:"10px",marginLeft:"50Px",width:"500px"}}className="query font s15"/>
    <Icon icon ={search} className="go s24 "/>
</div>
<div className="actions flex alc">
    <Button className ="fontb s15" style={{marginLeft:'50px',background:"red",position:"relative"}} >Cart</Button>

</div>
<div className="actions flex alc">
    <Link to ="/account signin" className ="fontb s15" style={{marginLeft:'50px'}} >signin</Link>

</div>
{/* <Button className="sell" ></Button> */}



            </div>
            <div className="hnav fixed flex alc" >
    <button className="view-cates flex alc"style={{marginLeft:"-220px"}} >
        
    <h2 style={{fontSize:"20px",width:"150px",}}>All categories</h2>
    <Icon icon={circleDown} style={{ size:"24px", padding:"10px",background:"#fff",border:"0px",flex:"2",marginleft:"40px"}}/>
    </button>
    {
    nav.map(item => {
        return(
            <Link to={item.id} style={{marginTop:"10px",marginRight:"30px"}}>{item.label}</Link>
        )

    })
}
</div>
            </React.Fragment>
        );
    }

 
export default Header;
