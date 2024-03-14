const express = require('express')
const app = express()

app.use(express.json())
const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

let persons =[
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/info', (request, response) => {
  const now = new Date();
  const day = now.toLocaleString('en-US', { weekday: 'long' });
  const date = now.toLocaleDateString('en-US');
  const time = now.toLocaleTimeString('en-US');
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const htmlResponse = `
  <p>Phone book has info for ${persons.length} people</p>
  <p> ${day} ${date} ${time} Time zone: ${timeZone}</p>
`;
  response.send(htmlResponse)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if(person){
  console.log(person.name)
  response.json(person)
  }else{
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }
  if(persons.find(person => person.name === body.name) !== undefined){
    return response.status(400).json({
       error: 'name must be unique' 
    })
  }

  const person = {
    id: generateId(),
    name: body.name, 
    number: body.number,
    
  }

  persons = persons.concat(person)
  console.log(person)
  response.json(person)
})

const generateId = () => {
  return Math.floor(Math.random() * 10000)
}


