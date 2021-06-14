import React from 'react'
import {useRef} from 'react'

function NumberType({id, qid, active, question, onUpdate, answer, min, max, placeholder}){

	const isActive = active;

	return(

		<div id={id}>
			<h1 className={"my-5 text-xl w-full font-display " + (active ? ' text-primary' : ' text-question')}>{question}</h1>
			<input type="number" placeholder={placeholder || ''} min={min} max={max} value={answer || ''} className="w-6/12 lg:w-3/12 form-input py-1 border-b-2 border-primary focus:outline-none focus:border-tertiary" onChange={(event) => onUpdate(event.target.value, question, id, qid)}/>
		</div>	

		);
}

export default NumberType;