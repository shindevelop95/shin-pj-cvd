import React from 'react'
import {Table} from '../components'

export function TableContainer({countries}) {
    return (
        <Table>
            {countries.map((country) => (
                <Table.Column>
                    <Table.Row>{country.country}</Table.Row>
                    <Table.Row><strong>{country.cases}</strong></Table.Row>
                </Table.Column>
            ))
            
            }
        </Table>
    )
}


