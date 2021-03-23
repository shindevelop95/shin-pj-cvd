import React from 'react'
import {Card} from '../components'

export function CardContainer({title,cases,total,display,...props}) {
    return (
        <Card onClick={props.onClick}>
            <Card.Content display={display} total = {total}>
                <Card.Group  total = {total}>
                    <Card.Title >{title}</Card.Title>
                    <Card.Cases {...props} >Today: <span>{cases}</span></Card.Cases>
                    {total ? (<Card.Total {...props}>Total: <span>{total}</span></Card.Total>) : null}   
                </Card.Group>
            </Card.Content>
        </Card>
    )
}


