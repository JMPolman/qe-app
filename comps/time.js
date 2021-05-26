import React from 'react'

function TimeType({id, onUpdate, question }){

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>
			<input type="time" onChange={(event) => onUpdate(event.target.value, question, id)}></input>
		</div>	
		);
}

export default TimeType;