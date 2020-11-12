import React, { useEffect,useState} from 'react';
import Additem from "./Additem"


function HomePage(){
    

    const [list,setList] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        if(loading){
            let _list =[];
            for(let i=0;i<8;i++){
                _list.push(<Additem  placeholder={true}/>);
      
            }
            setList(_list);
        }

    },list)
 
        return (  
            <div className="home-page" style={{padding:"0px 18%"}}>

<list></list>
            </div>
        );
    
}
 
export default HomePage;