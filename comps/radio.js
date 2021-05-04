import React from 'react'

function Radio(props){

	const answerOptions = props.options;

	var nextQuestion = props.id + 1;

	var optionsList = answerOptions.map((option, i) =>
			<div key={i}>
				<input type="radio" id={option.title} name={props.id} value={option.title} className="mb-3 text-secondary select:outline-none "></input>
				<label htmlFor={option.title} className="ml-5">{option.title} </label>
			</div>
		);

	return(
		<div id={props.id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{props.question}</h1>
			{optionsList}
		</div>	
		);
}

export default Radio;