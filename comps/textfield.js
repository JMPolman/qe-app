import React from 'react'

function TextField(props){

	return(
		<div>
			<h1 className="my-5 text-xl w-full font-display text-question">{props.question}</h1>
			<input type="text" className="w-6/12 py-1 border-b-2 border-blue focus:outline-none" />
		</div>	
		);
}

export default TextField;