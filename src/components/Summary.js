import React from "react";
import { Button } from "react-bootstrap";

export default function Summary(props) {
	let courseCost = props.cost;
	let total = courseCost.reduce((total, current) => total + current, 0);
	let refreshPage = () => {
		window.location.reload(false);
	};
	return (
		<div>
			<h4>Courses Selected:{courseCost.length}</h4>
			<h4 className="cost">Total:৳{total}</h4>
			<Button onClick={refreshPage} type="submit" variant="danger ml-5">
				Checkout
			</Button>
		</div>
	);
}
