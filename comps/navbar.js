import Link from 'next/link'

const Navbar = () => {
	return ( 

		<nav className=""> 
			<Link href="/">
				<a >
					<div className="inline-flex w-4/6">
          				<img src="logo.svg" class="w-10"></img>
          				<span className="font-display uppercase font-light pl-16 text-3xl my-auto tracking-widest"> Researchable</span>
        			</div>
        		</a>
        	</Link>

        		<div className="inline-flex justify-between w-2/6 ">
        			<Link href="/test">
						<a> Test </a>
					</Link>

					<Link href="/test/test">
						<a> Test/test </a>
					</Link>

					<Link href="/about">
						<a> About </a>
					</Link>

        		</div>
        
		</nav>

		);
}

export default Navbar;