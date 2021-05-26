import React from 'react'

function TextField({id, active, question, onUpdate, ref}){

	const isActive = active;

	return(

		<div id={id}>
			<h1 ref={ref} className={" my-5 text-xl w-full font-display" + (active ? ' text-primary' : ' text-question')}>{question}</h1>
			<input type="text" className="lg:w-6/12 form-input py-1 border-b-2 border-UMOblue focus:outline-none" onChange={(event) => onUpdate(event.target.value, question, id)}/>
		</div>	

		);
}

export default TextField;