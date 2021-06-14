import React from 'react'

function TextArea({id, qid, question, onUpdate, active, answer}){

	return(
		<div id={id}>
			<h1 className={"my-5 text-xl w-full font-display" + (active ? ' text-primary' : ' text-question')}>{question}</h1>
			<textarea value={answer || ''} onChange={(event) => onUpdate(event.target.value, question, id, qid)} className="form-textarea w-full py-1 border-b-2 border-primary h-10 focus:outline-none focus:border-tertiary"></textarea>
		</div>	
		);
}

export default TextArea;