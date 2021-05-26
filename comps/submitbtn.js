import React from 'react'

function SubmitBtn({isVisible, submitAnswers, max, first, last, list, id}){

	const buttonText = last === max ? "Inleveren" : "Volgende"

	console.log(isVisible)

	const button = <button className={"block mx-auto px-10 py-3 rounded-lg bg-UMOblue text-primary hover:bg-UMOpurple transition ease-in duration-200 " + (isVisible ? 'invisible' : 'visible')} onClick={(event) => submitAnswers(max, first, last, list)} >{buttonText}</button>

	return(

		<div className="my-28"> 
			{button}
		</div>

		)
}

export default SubmitBtn;