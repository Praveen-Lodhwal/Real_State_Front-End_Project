import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>  
      {/*<div id="spinner"	className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
            <div className="icon p-2 me-2">
              <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{width: "30px", height: "30px"}} />
            </div>
            <h1 className="m-0 text-primary">Makaan</h1>
          </a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>

              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/propertylist" className="dropdown-item">Property List</Link>
                  <Link to="/property-type" className="dropdown-item">Property Add</Link>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/login" className="dropdown-item">Login</Link>
                  <Link to="/signUp" className="dropdown-item">SignUP</Link>
                </div>
              </div>

              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <a href="" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
