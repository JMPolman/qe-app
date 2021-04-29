import React from 'react'
import TextField from '../comps/textfield'
import TextArea from '../comps/textarea'
import DateType from '../comps/date'
import Dropdown from '../comps/dropdown'
import CheckBox from '../comps/checkbox'
import Radio from '../comps/radio'
import TimeType from '../comps/time'
import RangeType from '../comps/range'

function QuestionnaireRenderer(props){
	const questionnaire = JSON.parse(props.content);

	var list = questionnaire.map((questions) => 

			<div className="w-full mb-16">
				{questions.type === "textfield" &&					
					<TextField question={questions.title}  />
				}

				{questions.type === "textarea" &&	
					<TextArea question={questions.title}  />	
				}

				{questions.type === "date" &&
					<DateType question={questions.title} />
				}

				{questions.type === "dropdown" &&
					<Dropdown question={questions.title} options={questions.options} />
				}

				{questions.type === "checkbox" &&
					<CheckBox question={questions.title} options={questions.options} />
				}

				{questions.type === "radio" &&
					<Radio question={questions.title} id={questions.id} options={questions.options} />
				}

				{questions.type === "time" &&
					<TimeType question={questions.title} id={questions.id} />
				}

				{questions.type === "range" &&
					<RangeType question={questions.title} id={questions.id} min={questions.min} labels={questions.labels } max={questions.max} step={questions.step} />
				}




			{/*	<h1 className="mt-5">{questions.title}</h1>
				<span>{questions.id}</span>
				<span className="block">{questions.type}</span>*/}
			</div>
			
	);

	return(
			<div className="mt-10 w-full questions">
				{/*<p>{list}</p>*/}
				{list}
			</div>	
		);
	
}

export default QuestionnaireRenderer;