import Link from 'next/link'
import {useState} from 'react'

function Navbar({q, currentQ}){

	const qID = currentQ + 1
	const stepSize = 12 / q
	const progress = stepSize * qID
	const calcSize = Math.round(12 - progress)
	var full = false

	const calc =  calcSize + "/12"

	if (calcSize === 0){
		full = true
	}


	console.log(progress)

	return(
		<nav className="w-screen fixed top-0 bg-white left-0 p-5 pt-8 lg:p-5">
			<div className="lg:w-8/12 mx-auto "> 
				<Link href="/">
					<a className="inline-flex">
						<div className="inline-flex w-32 lg:w-40">
	          				<img src="umo-color.png" className="object-scale-down"></img>
	        			</div>
	        		</a>
	        	</Link>

	        	<div className="lg:inline-flex h-full w-6/12 lg:w-5/12 justify-end float-right mt-3">
	        		
	        		<div className="inline-flex justify-end bg-gradient-to-r from-UMOgreen via-UMOblue to-UMOpurple mr-5 h-2 w-10/12 lg:w-8/12 rounded-md mt-2">
	        			<div className={(full ? 'w-0' : 'w-'+calc) +" bg-light h-full rounded-r-md transition-width ease-in duration-300"}>
	        				&nbsp;
	        			</div>
	        		</div>

	        		<p className="lg:inline-flex lg:relative lg:top-auto lg:right-auto absolute top-5 right-16 ">Vraag {currentQ + 1} / {q}</p>
	        		
	        	</div>
        	</div>
		</nav>
		);
}

export default Navbar;