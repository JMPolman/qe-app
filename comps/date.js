import React from 'react'

function DateType({id, question, onUpdate}){
	const today = new Date()
	const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

	console.log(date);
	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>
			<input type="date" max={date} onChange={(event) => onUpdate(event.target.value, question, id)}></input>
		</div>	
		);
}

export default DateType;