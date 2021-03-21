import React from 'react';
import {Header} from '../components'

export function HeaderContainer({countries,changeMapCenter,changeMapZoom}) {
    return (
        <Header>
            <Header.Group>
                <Header.SubGroup>
                    <Header.Title>Coronavirus COVID-19</Header.Title>
                    <Header.SubTitle>Global Cases</Header.SubTitle>
                </Header.SubGroup>
                <Header.Form countries={countries} changeMap={changeMapCenter} changeZoom={changeMapZoom}/>
            </Header.Group>
        </Header>
    )
}


