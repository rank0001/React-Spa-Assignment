import React from "react";
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Info(props) {
	const { name, details, picture, price } = props.name;
	return (
		<div className=" infos mt-5 ">
			<Card className="card"> 
			<Card.Body>
			<div className="row">
			<div className="col-lg-3 ">
					<img className="images img-fluid" src={picture} alt="course pictures"/>
				</div>
				<div className="col-lg-9 mt-3 text-center  ">
					<h3>{name}</h3>
					<h5 className="lead">{details}</h5>
					<h5 className="lead">{price}৳</h5>
				</div>	
			</div>

			<Button  variant="success mt-3 ml-2 " 
				onClick={() => {
					props.event1(props.name);
				}}
			>
				Enroll now
			</Button>
			</Card.Body>
			</Card>
		</div> 
		
	);
}
