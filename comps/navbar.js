import Link from 'next/link'

function Navbar(props){

	return(
		<nav className="w-screen fixed top-0 left-0 p-5">
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
	        		
	        		<div className="inline-flex bg-gradient-to-r mr-5 h-4 w-8/12">
	        			<div className="w-5/12 bg-blue h-4">
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