import React from 'react'

export default function Cost(props) {

let courseCost = props.cost; 
let total = 0;
    for(let i =0;i<courseCost.length;i++){
        //console.log(courseCost);
        total+= courseCost[i] ;
    } 

    return (
        <div>
           
				<h4>Courses Selected:{courseCost.length}</h4> 
				<h4>Total payment:{total}৳</h4>  
        </div>
    )
}
