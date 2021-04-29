import React from 'react'

function TextArea(props){

	return(
		<div>
			<h1 className="my-5 text-xl w-full">{props.question}</h1>
			<textarea className="w-full shadow-center"></textarea>
		</div>	
		);
}

export default TextArea;