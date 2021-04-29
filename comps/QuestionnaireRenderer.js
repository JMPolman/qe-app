import React from 'react'
import TextField from '../comps/textfield'
import TextArea from '../comps/textarea'
import DateType from '../comps/date'
import Dropdown from '../comps/dropdown'
import CheckBox from '../comps/checkbox'
import Radio from '../comps/radio'

function QuestionnaireRenderer(props){
	const questionnaire = JSON.parse(props.content);

	var list = questionnaire.map((questions) => 

			<div className="w-full">
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




			{/*	<h1 className="mt-5">{questions.title}</h1>
				<span>{questions.id}</span>
				<span className="block">{questions.type}</span>*/}
			</div>
			
	);

	return(
			<div className="mt-10 w-full">
				{/*<p>{list}</p>*/}
				{list}
			</div>	
		);
	
}

export default QuestionnaireRenderer;