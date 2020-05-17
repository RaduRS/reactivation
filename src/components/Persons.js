import React from 'react'

function Persons({valueName}) {
    return (
        <div>
            <h2>I am {valueName.name}. I am {valueName.age} years old. I'm very good at {valueName.skill}</h2>
        </div>
    )
}

export default Persons
