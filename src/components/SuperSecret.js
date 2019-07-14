import React from 'react'

function SuperSecret(props) {
    return (
      <div style={{ margin: 20, border: '1px solid green'}}>
        <h1>This is top secret!</h1>
        <p>only an authenticated user can see this</p>
      </div>
    )
  }
