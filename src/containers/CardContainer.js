import React from 'react'
import {Card} from '../components'

export function CardContainer({title,cases,total}) {
    return (
        <Card>
            <Card.Content>
                <Card.Group>
                    <Card.Title>{title}</Card.Title>
                    <Card.Cases>Today: {cases}</Card.Cases>
                    <Card.Total>Total: <span>{total}</span></Card.Total>
                </Card.Group>
            </Card.Content>
        </Card>
    )
}


