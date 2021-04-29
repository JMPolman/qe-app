import React from 'react'

function TextField(props){

	return(
		<div>
			<h1 className="my-5 text-xl w-full">{props.question}</h1>
			<input type="text" className="w-full shadow-center mt-3" />
		</div>	
		);
}

export default TextField;