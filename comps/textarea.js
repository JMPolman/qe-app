import React from 'react'

function TextArea({id, question, onUpdate, active}){

	return(
		<div id={id}>
			<h1 className={"my-5 text-xl w-full font-display" + (active ? ' text-primary' : ' text-question')}>{question}</h1>
			<textarea onChange={(event) => onUpdate(event.target.value, question, id)} className="form-textarea w-full py-1 border-b-2 border-UMOblue h-10 focus:outline-none"></textarea>
		</div>	
		);
}

export default TextArea;