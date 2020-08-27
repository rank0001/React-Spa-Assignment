import React,{useState} from 'react'
import Info from './Info';
import Data from './Infos.json'
import Cost from './Cost'

export default function Dogs() {
     const [courseCost,setCost] =  useState([]);    
     
    let handleEvent = (courses)=>{
        
        const cost = [...courseCost,courses.price];
        setCost(cost);

    }  

    return(
          
        <div className="row ">
        
        <div className="result col-lg-3 text-left mt-5 ml-5 ">
        <h3>Courses: {Data.length}</h3> 
        <Cost cost = {courseCost}></Cost>   
			</div> 
            <div className="col-md-12 col-lg-8">
            {Data.map(datas=>{
            return(
                <div key= {Math.random()}> 
                <Info name = {datas} event1={handleEvent}/>
                </div>    
        )})}
            </div>
        
        </div>
    )
}
