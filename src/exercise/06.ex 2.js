import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    const [error, setError] = React.useState(null)

    function handleSubmit(event) {
        event.preventDefault()
        onSubmitUsername(event.target.elements.usernameInput.value)
    }

    function handleChange(event) {
        const {value} = event.target
        const isLowerCase = value === value.toLowerCase()
        setError(isLowerCase ? null : 'Username must be lower case')
    }

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='usernameInput'>Username:</label>
            <input id="usernameInput" type="text" onChange={handleChange} />
          </div>
          <div role="alert" style={{color: 'blue'}}>
            {error}
          </div>
          <button disable={Boolean(error)} type="submit">Submit</button>
        </form>
      )
}

function App() {
    
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return (
        <div style={{minWidth: 30}}>
            <UsernameForm onSubmitUsername={onSubmitUsername} />
        </div>
    )
}
export default App