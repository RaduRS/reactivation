import React from 'react'
import Persons from './Persons'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'fdsf'
        },
        {
            id: 2,
            name: 'Kent',
            age: 20,
            skill: 'JS'
        },
        {
            id: 3,
            name: 'Diana',
            age: 35,
            skill: 'HTML'
        },
    ]
    const newNames = names.map((value, index) => <h2 key={index}>{value}</h2>)
    const newPersons = persons.map(value => (<Persons key={value.id} valueName={value}/>))
    return (
        <div>
            {newNames}
            {newPersons}
        </div>
    )
}

export default NameList
