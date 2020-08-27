import React, { useState } from "react";
import Data from "../Infos.json";
import CourseDetails from "./CourseDetails";
import Summary from "./Summary";

export default function Course() {
	const [courseCost, setCost] = useState([]);
	let handleEvent = (courses) => {
		const cost = [...courseCost, courses.price];
		setCost(cost);
	};

	return (
		<div className="row ">
			<div className="result col-lg-3 text-left mt-5 ml-5 ">
				<h3>Courses: {Data.length}</h3>
				<Summary cost={courseCost} />
			</div>
			<div className="col-md-12 col-lg-8">
				{Data.map((datas) => {
					return (
						<div key={Math.random()}>
							<CourseDetails name={datas} event1={handleEvent} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
