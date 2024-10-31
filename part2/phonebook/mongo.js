const mongoose = require('mongoose')

// Get the password and optional name/phone number from command line arguments
const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

// Connection URL (replace <username> and <password> with your credentials)
const url = `mongodb+srv://fullstack:${password}@cluster0.pjk5q.mongodb.net/`;

mongoose.set('strictQuery',false)

mongoose.connect(url)

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  })


const Person = mongoose.model('Person', personSchema)


const person = new Person({
    name: name,
    number: number,
  })
  
  person.save().then(result => {
    console.log(`added ${name} ${number} to phonebook!`)
    mongoose.connection.close()
  })