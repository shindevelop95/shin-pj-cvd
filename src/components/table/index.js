import React from 'react'
import {Container,Column,Row} from './styles/table'
export default function Table({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Table.Column = function TableColumn({children,...restProps}){
    return(
        <Column {...restProps}>{children}</Column>
    )
}

Table.Row = function TableRow({children,...restProps}){
    return(
        <Row {...restProps}>{children}</Row>
    )
}