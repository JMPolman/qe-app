import React from 'react'
import Link from 'next/link'

function EndMessage({isVisible}){

const email = "contact@testquestionnaire.com"

	return(
		<div className={"shadow-center mt-20 p-5 " + (isVisible ? "visible" : "invisible")}>
			<p className="text-2xl pb-4">Bedankt voor het invullen van deze vragenlijst.</p>
			<p className="inline-flex pb-2">Als u nog vragen heeft kunt u contact opnemen met: <Link href={"mailto:" + email}><a className="inline-flex ml-2 text-secondary">{email}</a></Link> </p>
			<p>U kunt dit venster nu sluiten.</p>
		</div>
		)
}

export default EndMessage;