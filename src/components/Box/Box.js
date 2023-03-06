import React from "react";
import "./Box.css";
import box1 from "../../assests/box1.png";
import box2 from "../../assests/box2.png";
import box3 from "../../assests/box3.png";
const Box = () => {
	return (
		<>
			<div className="box box1">
				<img alt="nothing" src={box3}></img>
			</div>
			<div className="box box2">
				<img alt="nothing" src={box2}></img>
			</div>
			<div className="box box3">
				<img alt="nothing" src={box1}></img>
			</div>
		</>
	);
};

export default Box;
