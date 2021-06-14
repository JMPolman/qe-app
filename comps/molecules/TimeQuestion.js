import React from 'react'

function TimeType({id, qid, onUpdate, question, answer }){

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>
			<input type="time" value={answer || ''} onChange={(event) => onUpdate(event.target.value, question, id, qid)}></input>
		</div>	
		);
}

export default TimeType;