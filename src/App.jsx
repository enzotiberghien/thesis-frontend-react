import { useState } from 'react'
import './App.css'
import { ContactProvider } from './context/GlobalState'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      <ContactProvider>
        <div>
          <h1>Contact List</h1>
          <ContactForm />
          <ContactList />
        </div>
      </ContactProvider>
    </>
  )
}

export default App
