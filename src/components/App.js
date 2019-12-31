import React, { useState } from 'react'

function App() {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleSecondNameChange(event) {
        setSecondName(event.target.value)
    }

    return (
        <div className='container'>
            <h1>
                Hello {firstName} {secondName}
            </h1>
            <form>
                <input
                    onChange={handleFirstNameChange}
                    name='fName'
                    placeholder='First Name'
                />
                <input
                    onChange={handleSecondNameChange}
                    name='lName'
                    placeholder='Last Name'
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App
