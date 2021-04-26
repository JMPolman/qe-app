import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Radio from '../comps/radio'
import render from 'react-dom'



export default function Home() {

  return (

     

        <div className="mt-20" >

          <form action="/" method="post" className="w-4/6 mx-auto">
              <textarea className="resize-y my-4 block w-full shadow-center p-2 rounded-md focus:outline-none" id="q-input" placeholder="Plak hier je JSON-vragenlijst"> </textarea>
              <button className="transition duration-200 ease-in bg-blue text-primary px-4 py-2 rounded-md hover:text-secondary hover:bg-white focus:outline-none cursor-pointer" onClick={showQ}>
                Submit
              </button>
          </form>

 


          
        </div>

        
  )

function showQ(e){
  e.preventDefault();
  console.log('testing');

  return(
  
        <div className="mt-20 w-6/12">
           <Radio />
        </div> 

    )
  

};

};



