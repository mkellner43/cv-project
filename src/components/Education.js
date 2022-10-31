import React, { Component } from "react"

class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      className: props.className
    }
  }
  render() {
    return (
      <section className="education">
        <h1 className="education--title">
          Education
        </h1>
      </section>
    )
  }
}

export default Education;