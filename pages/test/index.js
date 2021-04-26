export const getStaticProps = async () =>{

	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { testObjects: data}
	}

}

const homeTest = ({ testObjects }) => {
	return(

			<div> 
				<h1> HomeTest </h1>
				{testObjects.map(dataPoint => (
					<div key={dataPoint.id}>
						<a>
							<h3>{ dataPoint.name }</h3>
						</a>
					</div>
				))}
			</div>

		)
}

export default homeTest;