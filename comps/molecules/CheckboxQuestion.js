import React from 'react'
import {useState} from 'react'
import {setState} from 'react'

function CheckBox({options, id, qid, question, onUpdate, answer, type}){
	const answerOptions = options;
	const [checked, setChecked] = useState(false);
	const [checkboxAnswer, setCheckAnswers] = useState(Array())

	function changeAnswers(){
		checkboxAnswer.indexOf(event.target.value) > -1 ? removeAnswer() : addAnswer()
			

		function addAnswer(){
			const answer = checkboxAnswer.concat(event.target.value)
			setCheckAnswers(answer)	
			updateAnswers(answer)
		}
		
		function removeAnswer(){
			const index = checkboxAnswer.indexOf(event.target.value)
			checkboxAnswer.splice(index, 1);
			updateAnswers(checkboxAnswer)
		}

		const newAnswer = checkboxAnswer
		
	}

	function updateAnswers(newAnswer){ 
		onUpdate(newAnswer, question, id, qid, type)	
	}

	var optionsList = answerOptions.map((option, i) =>
			<div key={i}>
				<input type="checkbox" defaultChecked={answer?.indexOf(option.title) > -1 ? true : false} id={option.title} name={option.title} value={option.title} onChange={(event) => changeAnswers(i)} className="form-checkbox text-primary rounded-sm border border-solid focus:outline-none mb-3 mt-1 focus:border-primary"></input>
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