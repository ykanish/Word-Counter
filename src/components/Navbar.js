import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar bg-body-tertiary">
        <title>Kanishk</title>
    {/* <div className="container-fluid"> */}
    <div className="container-fluid" style={{color:"blue"}}>
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Text Analyzer"/> */}
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        <h1>{props.heading}</h1>
      
    </div>
  </nav>
  )
}
