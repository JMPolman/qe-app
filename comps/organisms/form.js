import React from 'react'
import QuestionnaireRenderer from '../../comps/pages/QuestionnaireRenderer'
import {useState} from 'react'
import StartMessage from '../../comps/organisms/startmessage'
import QuestionnaireSdv from '../../comps/atoms/presentquestionnaire'
import QuestionnaireUmo from '../../comps/atoms/questionnaireUMO'
import {useEffect} from 'react'

function JSONForm(props){
	const [placeholder, setPlaceholder] = useState('Plak hier je JSON-vragenlijst!')
	const [value, setValue] = useState()
	const [visible, setVisibility] = useState(false)
	const [formVisible, setFormVisibility] = useState(true)
	const [startMessage, setStart] = useState(false)
	const [questionnaireTitle, setTitle] = useState('')
	const [questionnaireDuration, setDuration] = useState('')

	const [primaryColor, setPrimary] = useState('#2370b8')
	const [secondaryColor, setSecondary] = useState('#3baa34')
	const [tertiaryColor, setTertiary] = useState('#662684')
	const [brandLogo, setLogo] = useState()
	const [questionnaireSubject, setSubject] = useState()

	function handleSubmit(e){
		e.preventDefault()
		setVisibility(true)
		setStart(false)
	document.documentElement.style.setProperty('--color-primary', primaryColor)
	document.documentElement.style.setProperty('--color-secondary', secondaryColor)
	document.documentElement.style.setProperty('--color-tertiary', tertiaryColor)
	}

	function showStart(){
		setStart(true)
		setFormVisibility(false)
	}

	function fillFormSdv(e){
		e.preventDefault()

		const data = QuestionnaireSdv
		const questionnaire = JSON.stringify(data)

		setPrimary('#011258')
		setSecondary('#39ACDD')
		setTertiary('#D34316')

		setValue(questionnaire)
		setTitle('Wekelijkse vragenlijst sport en welzijn')
		setDuration('5')
		setLogo('sdv')
		setSubject('uw fysieke welzijn, eet- en sport-gewoonten van de afgelopen week.')
	}

	function fillFormUmo(e){
		e.preventDefault()

		const data = QuestionnaireUmo
		const questionnaire = JSON.stringify(data)

		setValue(questionnaire)
		setTitle('Vragenlijst dagelijks transport Nederland 2021')
		setDuration('10')

		setPrimary('#2370b8')
		setSecondary('#3baa34')
		setTertiary('#662684')
		setLogo('umo')
		setSubject('uw meestgebruikte vervoersmiddelen en dagelijkse bestemmingen in het afgelopen jaar.')
}

	return(
			<div> 
				<form onSubmit={handleSubmit}>

					{formVisible &&

					<div className="lg:w-6/12 px-8 mx-auto lg:mt-24 ">
		            	<textarea className="resize-y my-4 block w-full shadow-center p-2 rounded-md focus:outline-none" id="q-input" placeholder={placeholder} value={value} onChange={(event) => setValue(event.target.value)} />
		            	<div>
		            		<button onClick={showStart}  className="transition duration-200 ease-in bg-primary text-white px-4 py-2 mt-2 lg:inline block rounded-md hover:text-primary hover:bg-white focus:outline-none cursor-pointer">Begin</button>
		            		<button onClick={fillFormSdv}  className="transition duration-200 lg:ml-12 ease-in text-primary py-2 mt-2 inline rounded-md hover:text-tertiary focus:outline-none cursor-pointer">Testvragenlijst SDV</button>
		            		<button onClick={fillFormUmo}  className="transition duration-200 lg:ml-12 ease-in text-primary py-2 mt-2 ml-5 inline rounded-md hover:text-tertiary focus:outline-none cursor-pointer">Testvragenlijst UMO</button>
		            	</div>
		            	<div className="grid">
		            		<div className="row">
		            			<label htmlFor='primary' className="inline-block">Primary color:</label>
		            			<input type='text' name='primary' placeholder='#2370b8' onChange={(event) => setPrimary(event.target.value)} className="inline-block form-input shadow-center border-primary ml-10 mt-16"/>
		            		</div>
		            		<div className="row">
		            		<label htmlFor='secondary'>Secondary color:</label>
		            		<input type='text' name='secondary' placeholder='#3baa34' onChange={(event) => setSecondary(event.target.value)} className="form-input shadow-center border-primary ml-5 mt-4"/>
		            		</div>
		            		<div className="row">
		            		<label htmlFor='tertiary'>Tertiary color:</label>
		            		<input type='text' name='tertiary' placeholder='#662684' onChange={(event) => setTertiary(event.target.value)} className="form-input shadow-center border-primary ml-11 mt-4"/>
		            		</div>
		            	</div>
		            </div>
		        	}

		        	{startMessage &&
		        		<StartMessage title={questionnaireTitle} duration={questionnaireDuration} logo={brandLogo} subject={questionnaireSubject} />
		        		
		        	} 

		        	{
		        		visible &&
		        		<QuestionnaireRenderer content={value} logo={brandLogo} />
		        	}

		        	


		        	


				</form>
			</div>
		)
}



export default JSONForm;