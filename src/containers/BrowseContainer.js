import React,{useEffect,useState,useContext} from 'react'
import {HeaderContainer,CardContainer,MapsContainer,LineGraphContainer,TableContainer} from './index'
import {Card, CardContent} from "@material-ui/core"
import {Browse} from "../components"
import {CountryContext} from '../context/CountryContext'
import {InfoContext} from '../App'
import {prettyPrintStat} from '../utils/util'
import {sortData} from '../utils/util'
import "leaflet/dist/leaflet.css"
import '../utils/util.css'


export function BrowseContainer() {
  const [country, setCountry] = useState("worldwide");
  const [tableData,setTableData] = useState([]);
  const [countryInfo,setCountryInfo] = useContext(InfoContext);
  console.log("Check Country",country)
  const [countries, setCountries] = useState([])
  const [mapCenter,setMapCenter] = useState({lat:34.80746,lng:-40.4796});
  const [mapZoom,setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] =useState([])
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data=> {
      setCountryInfo(data);
    })
  },[])
  
  useEffect(() => {
  },[countryInfo])
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
        setMapCountries(data);
      })
    }
    fetchCountriesData();
  },[])

  console.log("SHOW ME THE TABLE>>>>",tableData)
  console.log("I am the country",countries)
  console.log("show me the countryInfo in Browse",countryInfo);
  return (
    <CountryContext.Provider value={[country, setCountry,countries,setCountries]}>
    <Browse>
      <Browse.Left>
        <HeaderContainer changeMapCenter={setMapCenter}
                         changeMapZoom = {setMapZoom}
                          countries ={countries}/>
        <Browse.Header>
          <CardContainer display="bacteria"
            onClick={(e)=> setCasesType("cases")} title="Coronavirus Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)}/>
          <CardContainer display="heart"
            onClick={(e)=> setCasesType("recovered")} title="Recovered" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)} recovered/>
          <CardContainer display="skull"
            onClick={(e)=> setCasesType("deaths")} title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}/>
          <CardContainer display="warning" title="Critical" cases={prettyPrintStat(countryInfo.critical)} />
          <CardContainer display="patient" title="Active" cases={prettyPrintStat(countryInfo.active)}/>
        </Browse.Header>
        <MapsContainer casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom}/>
      </Browse.Left>
      <Browse.Right>
        <CardContent>
          <Browse.SubHeader>Live Cases by Country</Browse.SubHeader>
          <TableContainer countries={tableData}/>
          <Browse.SubHeader>Worldwide new {casesType}</Browse.SubHeader>
          <LineGraphContainer casesType={casesType}/>
        </CardContent>
      </Browse.Right>
    </Browse>
    </CountryContext.Provider> );
}

