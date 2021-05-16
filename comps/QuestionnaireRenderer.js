import React from 'react'
import TextField from '../comps/textfield'
import TextArea from '../comps/textarea'
import DateType from '../comps/date'
import Dropdown from '../comps/dropdown'
import CheckBox from '../comps/checkbox'
import Radio from '../comps/radio'
import TimeType from '../comps/time'
import RangeType from '../comps/range'
import SubmitBtn from '../comps/submitbtn'
import Navbar from './Navbar'
import {useState} from 'react'
import {useRef} from 'react'

function QuestionnaireRenderer({ content, random }){
	const questionnaire = JSON.parse(content);

	
	if (random){
		questionnaire.sort(() => Math.random() -0.5)
	} 

	const [active, setActive] = useState(false)
	const [showFirst, setFirst] = useState(0)
	const [showLast, setLast] = useState(6)
	const [questionID, setID] = useState(0)

	const list = questionnaire.map((questions, q) => 
	
			<div key={q} className="w-full mb-16">
				{questions.type === "textfield" &&					
					<TextField id={q} refAnchor={useRef(q)} question={questions.title} onUpdate={onUpdate} active={active} />
				}

				{questions.type === "textarea" &&	
					<TextArea id={q} refAnchor={questionRef} question={questions.title} onUpdate={onUpdate} active={active} />	
				}

				{questions.type === "date" &&
					<DateType id={q} refAnchor={questionRef} question={questions.title} onUpdate={onUpdate} />
				}

				{questions.type === "dropdown" &&
					<Dropdown id={q} refAnchor={questionRef} question={questions.title} options={questions.options} onUpdate={onUpdate} />
				}

				{questions.type === "checkbox" &&
					<CheckBox id={q} refAnchor={questionRef} question={questions.title} options={questions.options} onUpdate={onUpdate} />
				}

				{questions.type === "radio" &&
					<Radio id={q} refAnchor={questionRef} question={questions.title} options={questions.options} onUpdate={onUpdate} />
				}

				{questions.type === "time" &&
					<TimeType id={q} refAnchor={questionRef} question={questions.title} onUpdate={onUpdate} />
				}

				{questions.type === "range" &&
					<RangeType id={q} refAnchor={questionRef} question={questions.title} min={questions.min} labels={questions.labels } max={questions.max} step={questions.step} onUpdate={onUpdate} />
				}

			</div>
			
	);

	const n = list.length;

	const submit = <SubmitBtn submitAnswers={submitAnswer} max={n} first={showFirst} last={showLast} list={list} />

	const showList = setList(showFirst, showLast, list)

	const [answers, setAnswers] = useState(Array.from(Array(n), () =>{}));
	const questionRef = useRef(n)
	

	function onUpdate(value, questions, id, ref){
		const answer = value
		const filledIn = true

		const newAnswer = {
			id,
			filledIn,
			answer
		}

		const answersList = answers.slice()

		answersList[id] = newAnswer
		setAnswers(answersList)

		setID(id)
	}


	function submitAnswer(max, first, last, list){

		const id = questionID
		const newFirst = last
		const newLast = last


		{((id === (newLast - 1)) && ((max - newLast) >= 5)) && nextQuestions()}

		function nextQuestions(){
			setFirst(newFirst)
			setLast(newLast + 6)

			setList(showFirst, showLast, list)
			window.scrollTo({top: 0, behavior: 'smooth'});
		}

		{((id === (newLast - 1)) && ((n - newLast) < 5)) && lastQuestions()}

		function lastQuestions(){
			setFirst(newFirst)
			setLast(max)

			setList(showFirst, showLast, list)
			window.scrollTo({top: 0, behavior: 'smooth'});
		}

		{((n - newLast) === 0) && finishedQuestions()}

		function finishedQuestions(){
			alert('finished')
		}


	}



	function setList(showFirst, showLast, list){
			const first = showFirst
			const last = showLast
			const fullList = list

			const showList = fullList.slice(first, last)

			return(
				<div>
					{showList}
				</div>
			)
	}



	// console.log(handleUpdate);
	

	return(
		<div>
			<Navbar q={n} currentQ={questionID}/>


			<div className="my-10 questions w-6/12 mx-auto mt-32">
				
				{showList}
				
			</div>

				{submit}	

		</div>	
		);
	
}


export default QuestionnaireRenderer;