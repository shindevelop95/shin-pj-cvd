import './App.css';
import React,{useEffect,useState} from 'react'
import {HeaderContainer} from './containers/HeaderContainer'

function App() {

  const [countries, setCountries] = useState([])
  useEffect(() => {
    const fetchCountriesData = async () =>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name:country.country,
            value:country.countryInfo.iso2
          }
        ))
        setCountries(countries);
      })
    }
    fetchCountriesData();
  },[])
  console.log("I am the country",countries)
  return (
    <div className="App">
      <HeaderContainer countries ={countries}/>
    </div>
  );
}

export default App;
