import React, { Component } from "react"

class Skills extends Component {
  constructor(props){
    super(props)
    this.state = {
      addingContent: false,
      skill: '',
      skills: []
    }
  }
  openForm = () => {
    this.setState({
      addingContent: true
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      skills: [...prevState.skills,
        { 
          skill: this.state.skill
        }
      ],
      addingContent: false,
      skill: ''
    }))
  }

  handleAbort = (e) => {
    e.preventDefault()
    this.setState({
      addingContent: false,
      skill: ''
    })
  }

  removeContent = (e) => {
    const index = Number(e.target.id)
    this.setState(prevState => {
      let newState = prevState.skills.filter((_, idx) => idx !== index )
      return {
      skills: newState
    }})
  }

  createForm = () => {
    let content = this.state.addingContent ?
    <form>
      <div>
        <label htmlFor="skill" >Skills</label>
        <input 
          placeholder="Enter skill here"
          value={this.state.skill}
          name="skill"
          onChange={this.handleChange}
        />
      </div>
      
      <div className="form--buttons">
        <button className="button--add" onClick={this.handleSubmit}><i className="fa-solid fa-circle-plus button--icon"></i>Save</button>
        <button className="button--cancel" onClick={this.handleAbort}><i className="fa-solid fa-ban button--icon"></i>Cancel</button>
      </div>
    </form>
    :
    <div className="add--btn">
      <button className="button--add" onClick={this.openForm}><i className="fa-solid fa-circle-plus button--icon"></i>Add</button>
    </div>
    return content
  }

  createUI = () => {
    let array = this.state.skills.map(
      (info, indx) => (
        <div key={indx} className="contents">
          <div>
            <p>{info.skill}</p>
          </div>
          <div className="remove">
            <i className="fa-solid fa-circle-xmark" onClick={this.removeContent} id={indx}></i>
          </div>
        </div>
      )
    )
    return array
  }

  render() {
    return (
      <section className="skills">
        <h1>Skills</h1>
        {this.state.skills.length > 0 ? this.createUI() : undefined}
        {this.createForm()}
      </section>
    )
  }
}

export default Skills