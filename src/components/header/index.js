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

Header.Form = function HeaderForm({children, ...restProps}){
    return <FormControl {...restProps}>
                <Select variant="outlined" value="abc">
                    <MenuItem value="worldwide">Worldwide</MenuItem>
                    <MenuItem value="worldwide">2</MenuItem>
                    <MenuItem value="worldwide">3</MenuItem>
                    <MenuItem value="worldwide">4</MenuItem>
                </Select>
            </FormControl>
}
