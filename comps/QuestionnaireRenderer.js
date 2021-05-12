import React from 'react'
import TextField from '../comps/textfield'
import TextArea from '../comps/textarea'
import DateType from '../comps/date'
import Dropdown from '../comps/dropdown'
import CheckBox from '../comps/checkbox'
import Radio from '../comps/radio'
import TimeType from '../comps/time'
import RangeType from '../comps/range'
import Navbar from './Navbar'
import {useState} from 'react'

function QuestionnaireRenderer({ content, random }){
	const questionnaire = JSON.parse(content);

	
	if (random){
		questionnaire.sort(() => Math.random() -0.5)
	} 

	const [active, setActive] = useState(false);
	const [answers, setAnswers] = useState([]);

	const list = questionnaire.map((questions, q) => 
	
			<div key={q} className="w-full mb-16">
				{questions.type === "textfield" &&					
					<TextField id={q} question={questions.title} onUpdate={onUpdate} />
				}

				{questions.type === "textarea" &&	
					<TextArea id={q} question={questions.title} onUpdate={onUpdate} />	
				}

				{questions.type === "date" &&
					<DateType id={q} question={questions.title} onUpdate={onUpdate} />
				}

				{questions.type === "dropdown" &&
					<Dropdown id={q} question={questions.title} options={questions.options} onUpdate={onUpdate} />
				}

				{questions.type === "checkbox" &&
					<CheckBox id={q} question={questions.title} options={questions.options} onUpdate={onUpdate} />
				}

				{questions.type === "radio" &&
					<Radio id={q} question={questions.title} options={questions.options} onUpdate={onUpdate} />
				}

				{questions.type === "time" &&
					<TimeType id={q} question={questions.title} onUpdate={onUpdate} />
				}

				{questions.type === "range" &&
					<RangeType id={q} question={questions.title} min={questions.min} labels={questions.labels } max={questions.max} step={questions.step} onUpdate={onUpdate} />
				}

			</div>
			
	);

	const n = list.length;

	

	function onUpdate(value, questions, id){
		const answer = value
		const newAnswer = {
			id,
			answer
		}
		

		const answersList = answers.slice()
		answersList[id] = answer
		setAnswers(answersList)
		
		console.log(answers)
	}



	// console.log(handleUpdate);
	

	return(
		<div>
			<Navbar q={n}/>

			<div className="mt-10 questions w-6/12 mx-auto mt-32">

				{list}
				
			</div>	
		</div>	
		);
	
}


export default QuestionnaireRenderer;