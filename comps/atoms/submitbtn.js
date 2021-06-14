import React from 'react'

function SubmitBtn({isVisible, submitAnswers, max, first, last, list, id}){

	const buttonText = last === max ? "Inleveren" : "Volgende"

	const button = <button className={"lg:inline min-w-full block px-10 py-3 rounded-lg bg-primary text-white hover:bg-tertiary transition ease-in duration-200 focus:outline-none lg:min-w-0  " + (isVisible ? 'invisible' : 'visible')} onClick={(event) => submitAnswers(max, first, last, list)} >{buttonText}</button>

	return(

		<div className="block mx-auto mb-24 scroll-snap-align-center scroll-snap-stop-always lg:inline  "> 
			{button}
		</div>

		)
}

export default SubmitBtn;