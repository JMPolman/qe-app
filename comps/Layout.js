const Layout = ({ children }) => {
	return ( 
			<div className="container w-8/12 my-8 mx-auto">
				<div>
					{ children }
				</div>
			</div>
			);
}

export default Layout;