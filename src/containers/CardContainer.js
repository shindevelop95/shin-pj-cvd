import React from 'react'
import {Card} from '../components'

export function CardContainer({title,cases,total}) {
    return (
        <Card>
            <Card.Content>
                <Card.Title>{title}</Card.Title>
                <Card.Cases>{cases}</Card.Cases>
                <Card.Total>{total}</Card.Total>
            </Card.Content>
        </Card>
    )
}


