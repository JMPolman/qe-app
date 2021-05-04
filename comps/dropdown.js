import React from 'react'

function Dropdown(props){

	const answerOptions = props.options;

	var optionsList = answerOptions.map((option, i) =>
			<option key={i} value={option.title}>{option.title}</option>
		);

	return(
		<div id={props.id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{props.question}</h1>

			<select className="form-select border border-UMOblue rounded-sm mx-0">
			{optionsList}
			</select>
			
		</div>	
		);
}

export default Dropdown;