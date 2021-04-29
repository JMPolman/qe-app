import React from 'react'

function DateType(props){

	return(
		<div>
			<h1 className="my-5 text-xl w-full">{props.question}</h1>
			<input type="date"></input>
		</div>	
		);
}

export default DateType;