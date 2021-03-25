import React from 'react'
import {Table} from '../components'
import numeral from "numeral";

export function TableContainer({countries}) {
    console.log("SHOW ME THE TABLECONITNAER>>>>",countries)
    return (
        <Table>
            {countries.map((country) => (
               
                <Table.Column>
                    <Table.Row><img src={country.countryInfo.flag}/></Table.Row>
                    <Table.Row>{country.country}</Table.Row>
                    <Table.Row><strong>{numeral(country.cases).format()}</strong></Table.Row>
                </Table.Column>
            ))
            
            }
        </Table>
    )
}


