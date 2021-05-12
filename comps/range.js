import React from 'react'

function RangeType({labels, id, question, max, min, onUpdate}){

	const rangeSteps = labels;

	const stepDistance = (max - min) / (rangeSteps.length-1);

	var i = rangeSteps.length;

	// console.log(i);

	const stepsList = rangeSteps.map((label, i) => {
		const val = Math.round(stepDistance * i + min)

		return <option key={i} value={val} label={label} className="flex"></option>
	});

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>
			<input type="range" min={min} max={max} step={Math.round(stepDistance)} list={id} onChange={(event) => onUpdate(event.target.value, question)}  className="w-full focus:outline-none"></input>

			<datalist id={id} className="flex justify-between w-100"> 
				{stepsList}
			</datalist>
		</div>	
		);
}

export default RangeType;