import React from 'react'

function Dropdown({options, id, qid, question, onUpdate, answer}){

	const answerOptions = options;

	var optionsList = answerOptions.map((option, i) =>
			<option key={i} value={option.title}>{option.title}</option>
		);

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>

			<select value={answer} onChange={(event) => onUpdate(event.target.value, question, id, qid)} className="form-select border border-primary rounded-sm mx-0 focus:border-tertiary">
			{optionsList}
			</select>
			
		</div>	
		);
}

export default Dropdown;