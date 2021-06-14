import React from 'react'
import {useRef} from 'react'

function TextField({id, qid, active, question, onUpdate, answer, placeholder}){

	const isActive = active;

	return(

		<div id={id}>
			<h1 className={"my-5 text-xl w-full font-display " + (active ? ' text-primary' : ' text-question')}>{question}</h1>
			<input type="text" value={answer || ''} placeholder={placeholder || ''} className="lg:w-full form-input py-1 border-b-2 border-primary focus:outline-none focus:border-tertiary" onChange={(event) => onUpdate(event.target.value, question, id, qid)}/>
		</div>	

		);
}

export default TextField;