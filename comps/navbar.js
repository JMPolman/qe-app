import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Navbar(props){

	return(
		<nav className="w-screen fixed top-0 bg-white left-0 p-5">
			<div className="w-8/12 mx-auto "> 
				<Link href="/">
					<a className="inline-flex">
						<div className="inline-flex w-40">
	          				<img src="umo-color.png" className="object-scale-down"></img>
	          				{/*<span className="font-display uppercase font-light pl-16 text-3xl my-auto tracking-widest"> Researchable</span>*/}
	        			</div>
	        		</a>
	        	</Link>

	        	<div className="inline-flex h-full w-5/12 justify-end float-right mt-3">
	        		
	        		<div className="inline-flex justify-end bg-gradient-to-r from-UMOgreen via-UMOblue to-UMOpurple mr-5 h-2 w-8/12 rounded-md mt-2">
	        			<div className="w-2/12  bg-light h-full clipwacsd rounded-r-md ">
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