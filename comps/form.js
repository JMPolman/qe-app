import React from 'react'
import QuestionnaireRenderer from '../comps/QuestionnaireRenderer'
import {useState} from 'react'


class JSONForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 'Plak hier je JSON-vragenlijst',
			visible: false,
			formVisible: true
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		// alert('Questionnaire Submitted: ' + this.state.value);
		event.preventDefault();
		this.setState({visible: true});
		this.setState({formVisible: false});

	}

	render() {
		return(
			<div className="">

				<form onSubmit={this.handleSubmit}>
					
		            {this.state.formVisible &&
		            	<div className="w-6/12 mx-auto">
		            		<textarea className="resize-y my-4 block w-full shadow-center p-2 rounded-md focus:outline-none" id="q-input" value={this.state.value} onChange={this.handleChange} />
		            		<input type="submit" value="Submit" className="transition duration-200 ease-in bg-blue text-primary px-4 py-2 rounded-md hover:text-secondary hover:bg-white focus:outline-none cursor-pointer"/>
		            	</div>
		            }


		            
		            {
		            	this.state.visible &&
	           			<QuestionnaireRenderer content={this.state.value} /> 
		            }

	           		
	            </form>

	            
            </div>
		);
	}
}

export default JSONForm;