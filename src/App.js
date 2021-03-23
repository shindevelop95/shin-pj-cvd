import React,{useEffect,useState,createContext} from 'react'
import {BrowseContainer} from './containers/BrowseContainer'

export const InfoContext = createContext();
function App() {
  const [countryInfo,setCountryInfo] =useState({})
  return (
    <InfoContext.Provider value ={[countryInfo,setCountryInfo]}>
       <BrowseContainer/>
    </InfoContext.Provider>
   
  );
}

export default App;
