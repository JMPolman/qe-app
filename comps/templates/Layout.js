const Layout = ({ children }) => {
	return ( 
			<div className="container w-full mx-auto md:my-8 ">
				<div>
					{ children }
				</div>
			</div>
			);
}

export default Layout;