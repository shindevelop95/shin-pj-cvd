import React from 'react'
import {Card} from '../components'

export function CardContainer({title,cases,total,...props}) {
    return (
        <Card onClick={props.onClick}>
            <Card.Content>
                <Card.Group>
                    <Card.Title>{title}</Card.Title>
                    <Card.Cases>Today: <span>{cases}</span></Card.Cases>
                    <Card.Total>Total: <span>{total}</span></Card.Total>
                </Card.Group>
            </Card.Content>
        </Card>
    )
}


