import React from 'react'
import {Container} from './styles/line'

export default function LineGraph({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}