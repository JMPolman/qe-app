import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Radio from '../comps/radio'
import JSONForm from '../comps/form'
import render from 'react-dom'
import {useState} from 'react'

export default function Home() {

  // const [visibility, setVisibility] = useState(false)

  return (

     

        <div className="mt-20" >

          <div className="w-4/6 mx-auto">
              <JSONForm />
          </div>

         {/* {

            visibility &&
            <Radio />

          }*/}
          

          
        </div>

        
  )

};



