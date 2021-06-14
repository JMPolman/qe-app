import React from 'react'

function RangeType({labels, id, qid, question, max, min, onUpdate, answer}){

	const rangeSteps = labels;

	const stepDistance = (max - min) / (rangeSteps.length-1);

	var i = rangeSteps.length;

	// console.log(i);

	const stepsList = rangeSteps.map((label, i) => {
		const val = Math.round(stepDistance * i + min)
	
		return <option key={i} value={val} label={label} className="lg:text-sm text-xs text-center whitespace-normal"></option>
	});

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>
			<input type="range" value={answer || ''} min={min} max={max} step={Math.round(stepDistance)} list={id} onChange={(event) => onUpdate(event.target.value, question, id, qid)}  className="w-full focus:outline-none focus:border-tertiary"></input>

			<datalist id={id} className={"grid grid-cols-"+(i) + " w-full"}> 
				{stepsList}
			</datalist>
		</div>	
		);
}

export default RangeType;