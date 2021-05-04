import Link from 'next/link'

function Navbar(props){

	return(
		<nav className="w-screen bg-white fixed top-0 left-0 p-5">
			<div className="w-8/12 mx-auto "> 
				<Link href="/">
					<a className="inline-flex">
						<div className="inline-flex w-40">
	          				<img src="umo-color.png" className="object-scale-down"></img>
	          				{/*<span className="font-display uppercase font-light pl-16 text-3xl my-auto tracking-widest"> Researchable</span>*/}
	        			</div>
	        		</a>
	        	</Link>

	        	<div className="inline-flex h-full w-5/12 justify-end float-right">
	        		
	        		<div className="inline-flex bg-gradient-to-r from-UMOgreen via-UMOblue to-UMOpurple mr-5 mt-2 h-2 w-8/12 rounded-md">
	        			<div className="w-5/12 rounded-l-md h-2">
	        				&nbsp;
	        			</div>
	        		</div>

	        		<p>Vraag x / {props.q}</p>
	        		
	        	</div>
        	</div>
		</nav>
		);
}

export default Navbar;