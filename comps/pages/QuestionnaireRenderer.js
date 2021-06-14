import React from 'react'
import TextField from '../../comps/molecules/TextfieldQuestion'
import TextArea from '../../comps/molecules/TextareaQuestion'
import DateType from '../../comps/molecules/DateQuestion'
import Dropdown from '../../comps/molecules/DropdownQuestion'
import CheckBox from '../../comps/molecules/CheckboxQuestion'
import Radio from '../../comps/molecules/RadioQuestion'
import TimeType from '../../comps/molecules/TimeQuestion'
import RangeType from '../../comps/molecules/RangeQuestion'
import NumberType from '../../comps/molecules/NumberQuestion'
import SubmitBtn from '../../comps/atoms/submitbtn'
import BackLink from '../../comps/atoms/backlink'
import Navbar from '.././organisms/Navbar'
import EndMessage from '../../comps/organisms/endmessage'
import {useState} from 'react'
import {useRef} from 'react'
import {useEffect} from 'react'

function QuestionnaireRenderer({ content, logo }){
	const questionnaire = JSON.parse(content);
	const [active, setActive] = useState(false)
	const [showFirst, setFirst] = useState(0)
	const [showLast, setLast] = useState(6)
	const [questionID, setID] = useState(0)
	const [showEnd, setShowEnd] = useState(false)
	const scrollContainer = useRef(null)
	const refs = useRef([React.createRef(), React.createRef()])
	const qRef = useRef(null)
	const n = questionnaire.length
	const [answers, setAnswers] = useState(Array.from(Array(n), () =>{''}));
	const [full, setFull] = useState(false)

	function findQuestionFor(qid){
		return questionnaire.find((question) => question.id === qid && isVisible(question))	
	} 

	const filterList = questionnaire.filter((question) => isVisible(question))

	const list = filterList.map((questions, q) => 

			<div key={q} id={q} ref={refs.current[q]} className="w-full pt-44 my-5 mb-16 h-screen scroll-snap-stop-always scroll-snap-align-center md:block md:h-auto md:py-0 child">
				{questions.type === "textfield" &&					
					<TextField id={q} qid={questions.id} question={questions.title} onUpdate={onUpdate} active={active} answer={answers[questions.id.substring(1) - 1]?.answer} placeholder={questions.placeholder} />
				}

				{questions.type === "textarea" &&	
					<TextArea id={q} qid={questions.id} question={questions.title} onUpdate={onUpdate} active={active} answer={answers[questions.id.substring(1) - 1]?.answer}/>	
				}

				{questions.type === "date" &&
					<DateType id={q} qid={questions.id} question={questions.title} onUpdate={onUpdate} answer={answers[questions.id.substring(1) - 1]?.answer} />
				}

				{questions.type === "dropdown" &&
					<Dropdown id={q} qid={questions.id} question={questions.title} options={questions.options} onUpdate={onUpdate} answer={answers[questions.id.substring(1) - 1]?.answer} />
				}

				{questions.type === "checkbox" &&
					<CheckBox id={q} qid={questions.id} question={questions.title} options={questions.options} onUpdate={onUpdate} answer={answers[questions.id.substring(1) - 1]?.answer} type={questions.type} />
				}

				{questions.type === "radio" &&
					<Radio id={q} qid={questions.id} question={questions.title} options={questions.options} onUpdate={onUpdate} answer={answers[questions.id.substring(1) - 1]?.answer} />
				}

				{questions.type === "time" &&
					<TimeType id={q} qid={questions.id} question={questions.title} onUpdate={onUpdate} answer={answers[questions.id.substring(1) - 1]?.answer} />
				}

				{questions.type === "range" &&
					<RangeType id={q} qid={questions.id} question={questions.title} min={questions.min} labels={questions.labels } max={questions.max} step={questions.step} onUpdate={onUpdate} answer={answers[questions.id.substring(1) - 1]?.answer} />
				}

				{questions.type === "number" &&					
					<NumberType id={q} qid={questions.id} question={questions.title} onUpdate={onUpdate} active={active} min={questions.min} max={questions.max} placeholder={questions.placeholder} answer={answers[questions.id.substring(1) - 1]?.answer} />
				}

				<img src={"swipe-up.gif"} className="mt-36 mx-auto object-scale-down w-block md:hidden"/>

			</div>
			
	);

	const l = list.length
	console.log(answers)

	function conditionHolds(condition, id){		
		let result = true
		for(const [qid, value] of Object.entries(condition)) {
			const answer = answers[qid - 1]
			result = result && ((answer !== undefined && answer?.answer === value) || (value === undefined && answer?.answer === value)) && findQuestionFor(`v${qid}`)  
		}	
		return result
	}

	function isVisible(question){
		const id = question.id
		
		if (!question.showOnlyIf){
			return true
		}
		let result = false
		for (const condition of question.showOnlyIf){
				result = (result || conditionHolds(condition, id))
		}
		return result
	}

	const showList = setList(showFirst, showLast, list)
	
	function onUpdate(value, question, id, qid){
		const answer = value
		const newAnswer = {
			qid,
			answer
		}
		const answersList = answers.slice()

		const newID = qid.substring(1) - 1

		answersList[newID] = newAnswer
		setAnswers(answersList)

		// if(id >= questionID){
		// setID(id)
		// }

		setID(id)
		// console.log(answersList)
	}

	function submitAnswer(max, first, last, list){

		const id = questionID
		const newFirst = last
		const newLast = last
		const questionsPerPage = 6;
		// const filterAnswers = answers.slice(last)



		// Check if answerslist of questions shown contains 'undefined'. 
		// If true: err at each unanswered question
		// If false: show next questions

		// if(answers[first:last].answer !== undefined){
		// 	console.log('filled')
		// }else{
		// 	console.log('nah')
		// }


		{(((max - newLast) >= questionsPerPage - 1)) && nextQuestions()}

		function nextQuestions(){
			setFirst(newFirst)
			setLast(newLast + questionsPerPage)

			setList(showFirst, showLast, list)
			window.scrollTo({top: 0, behavior: 'smooth'});
			qRef.current.scrollTo({
				top: 0,
				bahavior: 'smooth',
				block: 'start',
			});

		}

		{(((l - newLast) < questionsPerPage - 1)) && lastQuestions()}

		function lastQuestions(){
			setFirst(newFirst)
			setLast(l)

			setList(showFirst, showLast, list)
			window.scrollTo({top: 0, behavior: 'smooth'});
			qRef.current.scrollTo({
				top: 0,
				bahavior: 'smooth',
				block: 'start',
			});
		}

		{((l - newLast) === 0) && finishedQuestions()}

		function finishedQuestions(){
			setShowEnd(true)
		}
	}

	function showPrevious(first, last, list){
		const newFirst = first
		const newLast = first

		{(first > 0) && previousQuestions()}

		function previousQuestions(){
			setFirst(newFirst - 6)
			setLast(newFirst)

			setList(showFirst, showLast, list)
			window.scrollTo({top, behavior: 'smooth'});
		}
	}

	function setList(showFirst, showLast, list){
			const first = showFirst
			const last = showLast
			const fullList = list

			const showList = fullList.slice(first, last)

			return(
				<div ref={qRef} className="container px-16 max-h-screen overflow-y-scroll scroll-snap-y md:max-h-full md:overflow-y-hidden md:scroll-snap-none"> 
					{showList}
					<div className="block lg:flex lg:justify-between">
						<BackLink isVisible={showEnd} goBack={showPrevious} first={showFirst} last={showLast} list={list}  />
						<SubmitBtn isVisible={showEnd} submitAnswers={submitAnswer} max={l} first={showFirst} last={showLast} list={list} />	
					</div>
				</div>
			)
	}

	return(
		<div className="">
			<Navbar q={l} currentQ={questionID} logo={logo} />


			<div className="questions mx-auto mt-0 my-0 md:my-10 md:mt-32 lg:w-6/12">
				<EndMessage isVisible={showEnd}/>
				{showList}

			</div>

				

		</div>	
		);
	
}


export default QuestionnaireRenderer;