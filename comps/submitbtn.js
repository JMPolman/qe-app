import React from 'react'

function SubmitBtn({submitAnswers, max, first, last, list, id}){

	var text = "Volgende"

	if (last === max){
		text = "Inleveren"
	}

	const button = <button className="block mx-auto px-10 py-3 rounded-lg bg-UMOblue text-primary hover:bg-UMOpurple transition ease-in duration-200" onClick={(event) => submitAnswers(max, first, last, list)} >{text}</button>

	return(

		<div className="my-28"> 
			{button}
		</div>

		)
}

export default SubmitBtn;