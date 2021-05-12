import React from 'react'

function TextField({id, active, question, onUpdate}){

	// const active = props.active;
	// const answer = this.value;

	// function updateAnswer(value){
	// 	const answer = value
	// 	alert(answer);
	// 	onUpdate.setAnswers(value);

	// }

	return(

		<div id={id}>
			<h1 className={" my-5 text-xl w-full font-display text-question" + (active ? 'text-primary' : 'text-secondary')}>{question}</h1>
			<input type="text" className="w-6/12 form-input py-1 border-b-2 border-UMOblue focus:outline-none" onChange={(event) => onUpdate(event.target.value, question)}/>
		</div>	

		);
}

export default TextField;