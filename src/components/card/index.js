import React from 'react'
import {Container, Content, Title, Cases, Total} from './styles/card';
export default function Card({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Card.Content = function CardContent({children,...restProps}){
    return <Content {...restProps}>{children}</Content>
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
