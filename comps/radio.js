import React from 'react'

function Radio({options, question, id, onUpdate}){
	const answerOptions = options;
	// const answer = onUpdate.answer;

	var optionsList = answerOptions.map((option, i) =>
			<div key={i}>
				<input type="radio" id={option.title} name={id} value={option.title} onChange={(event) => onUpdate(event.target.value, question, id)}  className="form-radio mb-3 text-UMOblue border select:outline-none "></input>
				<label htmlFor={option.title} className="ml-5">{option.title} </label>
			</div>
		);

	return(
		<div id={id}>
			<h1 className="my-5 text-xl w-full font-display text-question">{question}</h1>
			{optionsList}
		</div>	
		);
}

export default Radio;