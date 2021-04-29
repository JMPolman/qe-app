import React from 'react'

function Dropdown(props){

	const answerOptions = props.options;

	var optionsList = answerOptions.map((option) =>
			<option value={option.title}>{option.title}</option>
		);

	return(
		<div>
			<h1 className="my-5 text-xl w-full">{props.question}</h1>

			<select>
			{optionsList}
			</select>
			
		</div>	
		);
}

export default Dropdown;