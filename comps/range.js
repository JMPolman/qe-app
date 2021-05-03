import React from 'react'

function RangeType(props){

	const rangeSteps = props.labels;

	const stepDistance = (props.max - props.min) / (rangeSteps.length-1);

	var i = rangeSteps.length;

	// console.log(i);

	var stepsList = rangeSteps.map((label) => 

			<option value={Math.round(((stepDistance * i++)-stepDistance) - (props.max))} label={label} className="flex"> </option>
		);

	return(
		<div id={props.id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{props.question}</h1>
			<input type="range" min={props.min} max={props.max} step={Math.round(stepDistance)} list={props.id} className="w-full"></input>

			<datalist id={props.id} className="flex justify-between w-100"> 
				{stepsList}
			</datalist>
		</div>	
		);
}

export default RangeType;