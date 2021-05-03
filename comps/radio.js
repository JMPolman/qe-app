import React from 'react'
import styles from '../styles/Home.module.css'

function Radio(props){

	const answerOptions = props.options;

	var nextQuestion = props.id + 1;

	var optionsList = answerOptions.map((option) =>
			<div>
				<input type="radio" id={option.title} name={props.id} value={option.title} className="mb-3 text-secondary select:outline-none "></input>
				<label for={option.title} className="ml-5">{option.title} </label>
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