import React from 'react'

function CheckBox({options, id, question, onUpdate}){

	const answerOptions = options;

	var optionsList = answerOptions.map((option, i) =>
			<div key={i}>
				<input type="checkbox" id={option.title} name={option.title} value={option.title} onChange={(event) => onUpdate(event.target.value, question)} className="form-checkbox text-UMOblue rounded-sm border border-solid mb-3 mt-1"></input>
				<label htmlFor={option.title} className="ml-5"> {option.title}</label>
			</div>
		);

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>
			{optionsList}
		</div>	
		);
}

export default CheckBox;