import React from 'react'

const Greet = ({name, children, basket}) => {
return (
    <div>
    <h1>Heloo {name}</h1>
    {children}
    </div>)
}

export default Greet;