import React from 'react'
import {Container, Content, Title, Cases, Total,Group} from './styles/card';
export default function Card({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Card.Content = function CardContent({children,...restProps}){
    return <Content {...restProps}>
        <img src ="images/icons/death.jpg" alt="death"/>
    {children}</Content>
}

Card.Group = function CardGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Card.Cases = function CardCases({children,...restProps}){
    return <Cases {...restProps}>{children}</Cases>
}

Card.Total = function CardTotal({children,...restProps}){
    return <Total {...restProps}>{children}</Total>
}
