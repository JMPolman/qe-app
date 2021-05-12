import React from 'react'

function Dropdown({options, id, question, onUpdate}){

	const answerOptions = options;

	var optionsList = answerOptions.map((option, i) =>
			<option key={i} value={option.title}>{option.title}</option>
		);

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>

			<select onChange={(event) => onUpdate(event.target.value, question)} className="form-select border border-UMOblue rounded-sm mx-0">
			{optionsList}
			</select>
			
		</div>	
		);
}

export default Dropdown;