import React from 'react'

function TextField(props){

	return(
		<div>
			<h1 className="my-5 text-xl w-full font-display text-question">{props.question}</h1>
			<input type="text" className="w-6/12 p-3 rounded-md shadow-center focus:outline-none" />
		</div>	
		);
}

export default TextField;