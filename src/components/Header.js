import React, { Component } from 'react';
import {circleDown} from 'react-icons-kit/icomoon/circleDown'
// import {circleDown} from 'react-icons-kit/icomoon/circleDown'
import Icon from "react-icons-kit"
import {search} from 'react-icons-kit/fa/search'
import {Link} from "react-router-dom";
import { pink } from '@material-ui/core/colors';

class Header extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Header fixed flex alc" style={{background:"gray",height:"50px"}}>
                
        <h3 >  Nayagaadi</h3>
<div className ="location rel flex alc" style={{background:"white",border:"2px solid black",borderRadius:"5px",marginLeft:"100px"}}
>
<Icon icon={search} style={{padding:"10px"}}/>
    
    <input className="label" placeholder="your location" value ="india" style={{fontSize:"16px",outline:"none"}}></input>
    <Icon icon={circleDown} style={{ size:"24px", padding:"10px",background:"#fff",border:"0px",flex:"1"}}/>
        
</div>
<div className="search flex alc"  style={{marginLeft:"100px"}}>
    <input type ="text" placeholder ="find cars, Bikes, and more.."  style={{background:"white",border:"2px solid black",borderRadius:"5px",marginLeft:"100px",fontSize:"20px",flex:"2",margin:"0px 20px"}}className="query"/>
    <Icon icon ={search} style={{padding:"10px",fontWeight:"20px"}}/>
</div>
<div className="actions flex alc">
    <Link to ="/account signin" className ="font">signin</Link>

</div>

            </div>
        );
    }
}
 
export default Header;