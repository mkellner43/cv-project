import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <section className="header">
        <a href="https://github.com/mkellner43/cv-project" className="link" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-xl"></i></a>
        <h1>C.V. Builder</h1>
        <i className="fa-solid fa-address-card fa-xl"></i>
      </section>
    )
  }
}

export default Header 