import React from 'react'

function DateType({id, question, onUpdate}){

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>
			<input type="date" onChange={(event) => onUpdate(event.target.value, question)}></input>
		</div>	
		);
}

export default DateType;