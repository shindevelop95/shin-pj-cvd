import React from 'react';
import {Header} from '../components'

export function HeaderContainer({countries}) {
    return (
        <Header>
            <Header.Group>
                <Header.Title>Covid 19 Tracker</Header.Title>
                <Header.Form countries={countries}/>
            </Header.Group>
        </Header>
    )
}


