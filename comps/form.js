import React from 'react'
import QuestionnaireRenderer from '../comps/QuestionnaireRenderer'
import {useState} from 'react'

function JSONForm(props){
	const [value, setValue] = useState('Plak hier je JSON-vragenlijst!')
	const [visible, setVisibility] = useState(false)
	const [formVisible, setFormVisibility] = useState(true)
	const [random, setRandom] = useState(false)

	function handleSubmit(e){
		e.preventDefault();
		setVisibility(true);
		setFormVisibility(false)
	}

	function toggleRandom(){
		setRandom(!random)
	}

	return(
			<div> 
				<form onSubmit={handleSubmit}>

					{formVisible &&

					<div className="lg:w-6/12 mx-auto lg:mt-24 ">
		            	<textarea className="resize-y my-4 block w-full shadow-center p-2 rounded-md focus:outline-none" id="q-input" placeholder={value} onChange={(event) => setValue(event.target.value)} />
		            	<input type="checkbox" name="randomize" className="mr-4 inline-block" onChange={toggleRandom}/>
		            	<label htmlFor="randomize" className="inline-block">Randomize</label>
		            	<input type="submit" value="Submit" className="transition duration-200 ease-in bg-blue text-primary px-4 py-2 mt-2 block rounded-md hover:text-secondary hover:bg-white focus:outline-none cursor-pointer"/>
		            </div>

		        	}

		        	{
		        		visible &&
		        		<QuestionnaireRenderer content={value} random={random} />
		        	}

				</form>
			</div>
		)
}

export default JSONForm;