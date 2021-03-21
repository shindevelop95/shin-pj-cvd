import React, {useState,useContext} from 'react';
import {MenuItem,FormControl,Select} from "@material-ui/core"
import {Container, Group, SubGroup, Title, SubTitle} from './styles/header'
import {CountryContext} from '../../context/CountryContext'
import {InfoContext} from '../../App'



export default function Header({children, ...restProps}){
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Header.Group = function HeaderGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Header.SubGroup = function HeaderSubGroup({children, ...restProps}){
    return <SubGroup {...restProps}>{children}</SubGroup>
}

Header.Title = function HeaderTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}


Header.SubTitle = function HeaderSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Header.Form = function HeaderForm({children,countries,changeMap,changeZoom,...restProps}){
    const [country, setCountry] = useContext(CountryContext);
    const [countryInfo,setCountryInfo]=useContext(InfoContext);
    
    console.log("helloshit",countries)
    const onCountryChange = (e) =>{
        const countryCode = e.target.value;
        setCountry(countryCode);

        const url =
        countryCode === "worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

      fetch(url)
      .then((response) => response.json())
      .then(data => {
          setCountryInfo(data);
          changeMap([data.countryInfo.lat,data.countryInfo.lng]);
          changeZoom(4);
      })
    }
    console.log("COUNTRYINFP>>>",countryInfo)

    return (<FormControl {...restProps}>
        <Select variant="outlined" onChange={onCountryChange} value={country}>
        <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
        </Select>
    </FormControl>)
}
