import React from 'react'

function CheckBox(props){

	const answerOptions = props.options;

	var optionsList = answerOptions.map((option, i) =>
			<div key={i}>
				<input type="checkbox" id={option.title} name={option.title} value={option.title} className="mb-3"></input>
				<label htmlFor={option.title} className="ml-5"> {option.title}</label>
			</div>
		);

	return(
		<div id={props.id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{props.question}</h1>
			{optionsList}
		</div>	
		);
}

export default CheckBox;