import React from 'react'

function BackLink({goBack, first, last, list, isVisible}){

	const button = <button className={"lg:inline min-w-full block mx-auto px-10 py-3 rounded-lg bg-white text-primary hover:text-tertiary transition ease-in duration-200 focus:outline-none lg:min-w-0 " + (isVisible ? 'invisible' : 'visible')} onClick={(event) => goBack(first, last, list)} >Ga terug</button>

	return(

		<div className="block mx-auto mb-8 lg:ml-16 lg:mb-24 scroll-snap-align-center scroll-snap-stop-always lg:inline"> 
			{button}
		</div>

		)
}

export default BackLink;