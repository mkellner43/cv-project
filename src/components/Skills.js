import React, { Component } from "react"
import uniqid from "uniqid"


class Skills extends Component {
  constructor(props){
    super(props)
    this.state = {
      addingContent: false,
      editing: false,
      id: uniqid(),
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
    this.state.editing ? 
    this.setState(prevState => {
      let array = prevState.skills.filter(obj => obj.id !== this.state.id)
      return {
        skills: [
        { 
          id: prevState.id,
          skill: prevState.skill
        }, ...array
        ],
        addingContent: false,
        editing: false,
        id: uniqid(),
        skill: ''
      }})
      :
      this.setState(prevState => ({
      skills: [...prevState.skills,
        { 
          id: prevState.id,
          skill: prevState.skill
        }
      ],
      id: uniqid(),
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
    const id = e.target.id
    this.setState(prevState => {
      let newState = prevState.skills.filter(obj => obj.id !== id )
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
        <button id={this.state.id} className="button--add" onClick={this.handleSubmit}><i className="fa-solid fa-circle-plus button--icon"></i>Save</button>
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
      (info) => (
        <div key={info.id} className="contents">
          <div>
            <p>{info.skill}</p>
          </div>
          <div>
            <i className="fa-solid fa-pen-to-square" onClick={this.editContent} id={info.id}></i>
            <i className="fa-solid fa-circle-xmark remove" onClick={this.removeContent} id={info.id}></i>
          </div>
        </div>
      )
    )
    return array
  }

  editContent = (e) => {
    const id = e.target.id
    this.setState(prevState => {
      let currentObject = prevState.skills.filter((obj) => obj.id === id )
      return {
        id: currentObject[0].id,
        skill: currentObject[0].skill,
        addingContent: true,
        editing: true
      }
    })
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