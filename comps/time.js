import React from 'react'

function TimeType(props){

	return(
		<div>
			<h1 className="my-5 text-xl w-full font-display text-question">{props.question}</h1>
			<input type="time"></input>
		</div>	
		);
}

export default TimeType;