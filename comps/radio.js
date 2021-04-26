const Radio = () => {
	return(

			<div>
				<h1>Question{question.title}</h1>
				<input type='radio' value="ja"/>
				<label htmlFor="ja"> Ja </label>
			</div>

		);
}

export default Radio;