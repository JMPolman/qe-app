import React from 'react'
import {useState} from 'react'

function Radio({options, question, id, qid, onUpdate, answer}){
	const answerOptions = options;
	const [checked, setChecked] = useState(false);
	

	var optionsList = answerOptions.map((option, i) => 
			<div key={i}>
			
				<input type="radio" defaultChecked={answer === option.title ? true : false} id={option.title} name={id} value={option.title} onChange={(event) => onUpdate(event.target.value, question, id, qid)}  className="form-radio mb-3 text-primary border select:outline-none focus:border-primary "></input>
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