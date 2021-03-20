import React,{useEffect,useState,useContext} from 'react'
import {HeaderContainer} from './HeaderContainer'
import {CardContainer} from './CardContainer'
import {MapContainer} from './MapContainer'
import {TableContainer} from './TableContainer'
import {LineGraphContainer} from './LineGraphContainer'
import {Card, CardContent} from "@material-ui/core"
import {Browse} from "../components"
import {CountryContext} from '../context/CountryContext'
import {InfoContext} from '../App'
import {sortData} from '../utils/SortData'


export function BrowseContainer() {
  const [country, setCountry] = useState("worldwide");
  const [tableData,setTableData] = useState([]);
  const [countryInfo,setCountryInfo] = useContext(InfoContext);
  console.log("Check Country",country)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data=> {
      setCountryInfo(data);
    })
  },[])
  useEffect(() => {
    const fetchCountriesData = async () =>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name:country.country,
            value:country.countryInfo.iso2,
            flag:country.countryInfo.flag
          }
        ))
        const sortedData = sortData(data);
        console.log("SORTED DATA",sortedData)
        setCountries(countries);
        setTableData(sortedData);
      })
    }
    fetchCountriesData();
  },[])

  console.log("SHOW ME THE TABLE>>>>",tableData)
  console.log("I am the country",countries)
  return (
    <CountryContext.Provider value={[country, setCountry,countries,setCountries]}>
    <Browse>
      <Browse.Left>
        <HeaderContainer countries ={countries}/>
        <Browse.Header>
          <CardContainer title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <CardContainer title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <CardContainer title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
          <CardContainer title="Critical" cases={countryInfo.critical} />
          <CardContainer title="Active" cases={countryInfo.active}/>
        </Browse.Header>
        <MapContainer/>
      </Browse.Left>
      <Browse.Right>
        <CardContent>
          <Browse.SubHeader>Live Cases by Country</Browse.SubHeader>
          <TableContainer countries={tableData}/>
          <Browse.SubHeader>Worldwide new cases</Browse.SubHeader>
          <LineGraphContainer/>
        </CardContent>
      </Browse.Right>
    </Browse>
    </CountryContext.Provider> );
}

