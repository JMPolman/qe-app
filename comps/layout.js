import Navbar from './Navbar'


const Layout = ({ children }) => {
	return ( 
			<div className="container w-screen mx-auto my-8">
				<div className="mx-20">
					
					<Navbar />
					<div className="w-8/12 mx-auto my-20">
					{ children }
					</div>
				</div>
			</div>
			);
}

export default Layout;