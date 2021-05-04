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

function QuestionnaireRenderer({ content }){
	const questionnaire = JSON.parse(content);

	const list = questionnaire.map((questions, q) => 
	
			<div key={q} className="w-full mb-16">
				{questions.type === "textfield" &&					
					<TextField id={q} question={questions.title} />
				}

				{questions.type === "textarea" &&	
					<TextArea id={q} question={questions.title}  />	
				}

				{questions.type === "date" &&
					<DateType id={q} question={questions.title} />
				}

				{questions.type === "dropdown" &&
					<Dropdown id={q} question={questions.title} options={questions.options} />
				}

				{questions.type === "checkbox" &&
					<CheckBox id={q} question={questions.title} options={questions.options} />
				}

				{questions.type === "radio" &&
					<Radio id={q} question={questions.title} options={questions.options} />
				}

				{questions.type === "time" &&
					<TimeType id={q} question={questions.title} />
				}

				{questions.type === "range" &&
					<RangeType id={q} question={questions.title} min={questions.min} labels={questions.labels } max={questions.max} step={questions.step} />
				}

			</div>
			
	);

	const n = list.length;


	return(
		<div>
			<Navbar q={n}/>

			<div className="mt-10 questions w-6/12 mx-auto mt-32">
				{/*<form>*/}
					{list}
				{/*</form>*/}	
			</div>	
		</div>	
		);
	
}


export default QuestionnaireRenderer;