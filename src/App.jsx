import { useState } from 'react'
import './App.css'
import { ContactProvider } from './context/GlobalState'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'
import Header from './components/Header'

function App() {
  return (
    <>
      <ContactProvider>
        <div>
          <Header></Header>
          <ContactForm />
          <ContactList />
        </div>
      </ContactProvider>
    </>
  )
}

export default App
