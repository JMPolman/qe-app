import React from 'react'

function DateType({id, qid, question, onUpdate, answer}){
	const today = new Date()
	const day = today.getDate()
	const month = today.getMonth()+1
	const dd = day < 10 ? '0' + day : day
	const mm = month <10 ? '0' + month : month
	const yyyy = today.getFullYear();
	const date = yyyy+'-'+mm+'-'+dd

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>
			<input type="date" max={date} value={answer || ''} onChange={(event) => onUpdate(event.target.value, question, id, qid)}></input>
		</div>	
		);
}

export default DateType;