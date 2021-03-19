import React, {useState} from 'react';
import {MenuItem,FormControl,Select} from "@material-ui/core"
import {Container, Group, Title} from './styles/header'

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

Header.Title = function HeaderTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Header.Form = function HeaderForm({children,countries,...restProps}){
    const [country, setCountry] = useState("worldwide");

    const onCountryChange = (e) =>{
        const countryCode = e.target.value;
        setCountry(countryCode);
    }

    return (<FormControl {...restProps}>
        <Select variant="outlined" onChange={onCountryChange} value={country}>
        <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
            
        </Select>
    </FormControl>)
}
