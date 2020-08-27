import React from "react";
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Info(props) {
	const { name, details, picture, price,creator } = props.name;
	return (
		<div className="  mt-5 ">
			<Card className="card"> 
			<Card.Body>
			<div className="row">
			<div className="col-lg-3 col-md-6">
					<img className="images img-fluid" src={picture} alt="course pictures"/>
				</div>
				<div className="col-lg-9 col-md-6 mt-3 text-center infos text-wrap">
					<h3>{name}</h3>
					<h4>Created By {creator}</h4>
					<h5 className="lead">{details}</h5>
					<h5 className="lead">৳{price}</h5>
				</div>	
			</div>

			<Button  variant="success mt-3 ml-2" size="lg" 
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
