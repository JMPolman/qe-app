import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'

function StartMessage({showQ, visible, title, duration, logo, subject}){

	return(
			<div className={(logo === 'umo' ? "bg-welcomeUMO bg-cover bg-no-repeat" : "bg-light" ) + " rounded-lg mx-auto px-8 pt-4 pb-48 lg:px-36 lg:pt-20 lg:pb-28 w-full lg:mt-20 lg:w-8/12  "}>
				<div>
					<img src={logo === 'umo' ? 'umo-color.png' : 'sdv.png'} className="inline object-scale-down w-4/12 pb-8 my-2 lg:pb-0 lg:w-2/12 mx-auto lg:my-5"></img>
					<p className="text-2xl my-auto py-4 lg:inline lg:ml-12 align-middle">{title}</p>
				</div>
				<p className="py-8 lg:py-6 lg:leading-relaxed">Bedankt voor het meedoen aan de '{title}', deze vragenlijst gaat over {subject} Antwoorden worden anoniem verzameld en verwerkt. Gegevens worden volgens AVG goedgekeurde methoden bewaard. Hierover vindt u meer informatie in de <Link href="" className="inline"><a className="text-primary">privacy verklaring</a></Link>.  </p>
				<p className="py-0 lg:pb-6">De vragenlijst duurt ongeveer {duration} minuten.</p>
				<p className="inline">Door op 'beginnen' te klikken gaat u akkoord met onze </p><Link href="" className="inline"><a className="text-primary">privacy verklaring</a></Link><p className="inline">.</p>
					
				<input type="submit" value="Beginnen" className="transition duration-200 ease-in bg-primary text-white mx-auto min-w-full lg:min-w-0 lg:mx-0 lg:px-4 py-2 mt-8 block rounded-md hover:text-primary hover:bg-light focus:outline-none cursor-pointer"/>
			</div>
		)
}

export default StartMessage;