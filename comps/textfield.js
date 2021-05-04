import React from 'react'

function TextField(props){

	const active = props.active;

	return(

		<div id={props.id}>
			<h1 className={" my-5 text-xl w-full font-display text-question" + (active ? 'text-primary' : 'text-secondary')}>{props.question}</h1>
			<input type="text" className="w-6/12 form-input py-1 border-b-2 border-UMOblue focus:outline-none"/>
		</div>	

		);
}

export default TextField;