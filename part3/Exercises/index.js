const express = require('express')
const app = express()

app.use(express.json())
const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

let phonebook =[
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
  <p>Phone book has info for ${phonebook.length} people</p>
  <p> ${day} ${date} ${time} Time zone: ${timeZone}</p>
`;
  response.send(htmlResponse)
})

app.get('/api/persons', (request, response) => {
  response.json(phonebook)
})

