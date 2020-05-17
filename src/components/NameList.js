import React from 'react'
import Persons from './Persons'

function NameList() {
    const names = [
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

    const newName = names.map(value => (<Persons key={value.id} valueName={value}/>))
    return (
        <div>
            {newName}
        </div>
    )
}

export default NameList
