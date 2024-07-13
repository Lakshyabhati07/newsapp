import React, { Component } from 'react'


import{
  Link
  
} from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Daily News</Link>
            
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/general">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-danger" type="submit">Search</button>
              </form>
            </div>
          </div>
           
        </nav>
      </div>
    )
  }
}

export default Navbar
