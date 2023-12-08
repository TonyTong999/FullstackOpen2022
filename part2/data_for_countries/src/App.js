import { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import countryServices from './services/countryServices.js'
const App = () => {
  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  const handleShowClick = (country) => {
    setSelectedCountry(country);
  }


  useEffect(() => {
    console.log('effect')
    countryServices
      .getAll()
      .then(initialCountries => {
        console.log('promise fulfilled')
        setCountries(initialCountries)
      })
  }, [])
  const countriesToShow = countries.filter(country => country.name.common.toUpperCase().includes(searchName.toUpperCase()))
  console.log('render', countries.length, 'countries.length')
  console.log('render', countriesToShow.length, 'countriesToShow.length')
  return (
    <div>
      <Filter
        searchName={searchName}
        handleSearchChange={handleSearchChange}
      />
      {
        countriesToShow.length === 1 ?
          <div>
            <p>{countriesToShow[0].name.common}</p>
            <p>area {countriesToShow[0].area}</p>
            <p>capital {countriesToShow[0].capital}</p>
            <img src={countriesToShow[0].flags.png} alt={countriesToShow[0].flags.alt} />
            <ul>
              {
                Object.entries(countriesToShow[0].languages).map(([code, language]) =>
                  <li key={code}>{language}</li>)
              }
            </ul>
          </div>

          : (
            countriesToShow.length <= 10 ?
              <ul>
                {
                  countriesToShow.map((country, i) =>
                    <li key={country.name.common}>{country.name.common}
                      <button onClick={() => handleShowClick(country)}>show</button>
                    </li>)
                }
              </ul>
              :
              <p>Too many matches, specify another filter</p>)
      }
      {selectedCountry && (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Area: {selectedCountry.area}</p>
          <p>Capital: {selectedCountry.capital}</p>
          <img src={selectedCountry.flags.png} alt={selectedCountry.flags.alt} />
          <h3>Languages:</h3>
          <ul>
            {Object.entries(selectedCountry.languages).map(([code, language]) => (
              <li key={code}>{language}</li>
            ))}
          </ul>
        </div>
      )}


    </div>

  )
}

export default App;
