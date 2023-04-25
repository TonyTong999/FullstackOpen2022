const Persons = ({ personToShow }) => {
    return (
        <div>
            <ul>
                {
                    personToShow.map((person,i) => <li key = {i}>{ person.name } { person.number }</li>)
                }
            </ul>

        </div>
    )
}

export default Persons