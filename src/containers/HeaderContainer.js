import React from 'react';
import {Header} from '../components'

export function HeaderContainer({countries,changeMapCenter,changeMapZoom}) {
    return (
        <Header>
            <Header.Group>
                <Header.Title>Covid 19 Tracker</Header.Title>
                <Header.Form countries={countries} changeMap={changeMapCenter} changeZoom={changeMapZoom}/>
            </Header.Group>
        </Header>
    )
}


