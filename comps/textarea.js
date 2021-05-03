import React from 'react'

function TextArea(props){

	return(
		<div id={props.id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{props.question}</h1>
			<textarea className="w-full py-1 border-b-2 border-blue  focus:outline-none"></textarea>
		</div>	
		);
}

export default TextArea;