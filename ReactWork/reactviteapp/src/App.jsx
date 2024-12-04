import React from 'react'
import Student from './Student'

function App() {
  return (
    <div>
      <div>
        <h2 style={{color:'red'}}>Hello React JS</h2>
        <div>
          <Student image="Rahul kumar" roll="23246" college="ABES" />
        </div>
      </div>
    </div>
  )
}

export default App