import React from 'react'
import Link from 'next/link'

function EndMessage({isVisible, answers}){

const email = "contact@testquestionnaire.com"

	return(
			<div className={"bg-welcome bg-cover bg-no-repeat rounded-lg px-8 pt-28 lg:mt-20 mx-auto lg:px-16 lg:pt-44 pb-48 w-full " + (isVisible ? "block" : "hidden")}>
				<p className="text-2xl pb-4">Bedankt voor het invullen van deze vragenlijst.</p>
				<p className="md:inline-flex pb-2">Als u nog vragen heeft kunt u contact opnemen met: <Link href={"mailto:" + email}><a className="md:inline-flex md:ml-2 text-primary">{email}</a></Link> </p>
				<p>U kunt dit venster nu sluiten.</p>

				<p>{answers}</p>
			</div>
		)
}

export default EndMessage;