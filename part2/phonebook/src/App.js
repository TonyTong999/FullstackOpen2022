import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
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
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
    else {
      alert(`${newName} is already added to phonebook`);
    }

  }
  const personToShow = persons.filter(person => person.name.toUpperCase().includes(searchName.toUpperCase()))
  return (
    <div>
      <h2>Phonebook</h2>
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
        personToShow={personToShow} />
    </div>
  )
}

export default App