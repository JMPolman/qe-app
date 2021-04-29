import React from 'react'

function TextArea(props){

	return(
		<div>
			<h1 className="my-5 text-xl w-full font-display text-question">{props.question}</h1>
			<textarea className="w-full shadow-center rounded-md p-3 focus:outline-none"></textarea>
		</div>	
		);
}

export default TextArea;