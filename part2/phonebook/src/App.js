import { useState,useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'
import Notification from './components/Notification'  
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [notification,setNotification] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
    setNotification(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    if (persons.findIndex((element) => element.name === newName) === -1) {
      personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotification(`${newName} is added to the phonebook.`)
        setTimeout(()=>{setNotification(null)},5000)
      })
    
    }
    else {
      const replace = window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`);
      if(replace){
        const foundPerson = persons.find(person => person.name === newName);
        personService
        .update(foundPerson.id,newPerson)
        .then(returnedPerson => {
          const updatedPersons = persons.map(person =>
            person.id === returnedPerson.id ? returnedPerson : person
          );
          setPersons(updatedPersons)
          setNewName('')
          setNewNumber('')
          setNotification(`${newName} is updated with a new number ${newNumber}.`)
          setTimeout(()=>{setNotification(null)},5000)
        })
      }   
    }

  }
  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])


  console.log('render', persons.length, 'persons')
  const personToShow = persons.filter(person => person.name.toUpperCase().includes(searchName.toUpperCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <Filter
        searchName={searchName}
        handleSearchChange={handleSearchChange}
      />
      <h2>add a new contact</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        personToShow={personToShow}
        setPersons={setPersons}
        />
    </div>
  )
}

export default App