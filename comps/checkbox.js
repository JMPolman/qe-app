import React from 'react'

function CheckBox(props){

	const answerOptions = props.options;

	var optionsList = answerOptions.map((option) =>
			<div>
				<input type="checkbox" id={option.title} name={option.title} value={option.title}></input>
				<label for={option.title} className="ml-5"> {option.title}</label>
			</div>
		);

	return(
		<div>
			<h1 className="my-5 text-xl w-full">{props.question}</h1>
			{optionsList}
		</div>	
		);
}

export default CheckBox;