import personService from "../services/personService";

const Persons = ({ personToShow,setPersons}) => {
    
    const handleDelete = () =>{
        if(window.confirm("delete?")){
            console.log("delete");
            personService.remove();
        }
    }
    return (
        <div>
            <ul>
                {
                    personToShow.map((person, i) =>
                        <li key={person.id}>{person.name}
                            {' '}{person.number}
                            {' '}<button onClick = {
                              ()=>{if(window.confirm("delete " +person.name + "?")){
                                console.log("delete");
                                personService.remove(person.id);
                                personService.getAll()
                                .then(initialPersons => {
                                    console.log('promise fulfilled')
                                    setPersons(initialPersons)
                                  })
                            }}
                            }>Delete</button>
                        </li>)
                }
            </ul>

        </div>
    )
}

export default Persons