import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Radio from '../comps/radio'
import JSONForm from '../comps/form'
import render from 'react-dom'
import {useState} from 'react'
import Navbar from '../comps/Navbar'

export default function Home() {

  return (
          <div>
              <JSONForm />
          </div>
  )

};



