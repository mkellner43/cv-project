import React, { Component } from "react"
import uniqid from "uniqid"

class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addingContent: false,
      id: uniqid(),
      school: '',
      from: '',
      to: '',
      degree: '',
      grade: '',
      educationInfo: [],
      editing: false
    }
  }
  handleChange = (e) => {
    this.setState(prevState => ({
      [e.target.name]: e.target.value
    }))
  }    
  handleSubmit = (e) => {
    e.preventDefault()
    this.state.editing ? 
    this.setState(prevState => {
      let array = prevState.educationInfo.filter(obj => obj.id !== this.state.id)
      return {
        educationInfo: [
        { 
          id: prevState.id,
          school: prevState.school,
          from: prevState.from,
          to: prevState.to,
          degree: prevState.degree,
          grade: prevState.grade
        }, ...array
        ],
        addingContent: false,
        editing: false,
        id: uniqid(),
        school: '',
        from: '',
        to: '',
        degree: '',
        grade: ''
      }
      })
      :
      this.setState(prevState => ({
      educationInfo: [...prevState.educationInfo,
        { 
          id: prevState.id,
          school: prevState.school,
          from: prevState.from,
          to: prevState.to,
          degree: prevState.degree,
          grade: prevState.grade
        }
      ],
      id: uniqid(),
      addingContent: false,
      school: '',
      from: '',
      to: '',
      degree: '',
      grade: ''
    }))
  }

  handleAbort = (e) => {
    e.preventDefault();
    this.setState({
      addingContent: false,
      school: '',
      from: '',
      to: '',
      degree: '',
      grade: '',
      editing: false
    })
  }

  openForm = () => {
    this.setState({
      addingContent: true
    })
  }

  createUI = () => {
    let array = this.state.educationInfo.map(
      (info, indx) => (
        <div key={indx} className='contents'>
          <div>
            <p>{info.school}</p>
            <p>{info.from}</p>
            <p>{info.to}</p>
            <p>{info.degree}</p>
            <p>{info.grade}</p>
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
  
  removeContent = (e) => {
    const id = e.target.id
    this.setState(prevState => {
      let newState = prevState.educationInfo.filter(obj => obj.id !== id )
      return {
      educationInfo: newState
    }})
  }

  editContent = (e) => {
    const id = e.target.id
    this.setState(prevState => {
      let currentObject = prevState.educationInfo.filter((obj) => obj.id === id )
      return {
        id: currentObject[0].id,
        school: currentObject[0].school,
        from: currentObject[0].from,
        to: currentObject[0].to,
        degree: currentObject[0].degree,
        grade: currentObject[0].grade,
        addingContent: true,
        editing: true
      }
    })
  }

  createForm = () => {
    let content = this.state.addingContent ?
    <form id={this.state.id} >
      <div>
        <label htmlFor="school" >Name of University or School</label>
        <input 
          placeholder="Enter School Name"
          value={this.state.school}
          name="school"
          onChange={this.handleChange}
        />
      <label htmlFor="from">From</label>
      <input 
        value={this.state.from}
        name="from"
        onChange={this.handleChange}
        type='date'
      />
      <label htmlFor="to" >To</label>
      <input 
        placeholder="To"
        value={this.state.to}
        name="to"
        onChange={this.handleChange}
        type='date'
      />
    </div>

    <div>
      <label htmlFor="degree" >Degree</label>
      <input 
        placeholder="Enter Here"
        value={this.state.degree}
        name="degree"
        onChange={this.handleChange}
        type='text'
      />
      <label htmlFor="grade" >Grade</label>
      <input 
        placeholder="Enter Here"
        value={this.state.grade}
        name="grade"
        onChange={this.handleChange}
        type='text'
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

  render() {
    return (
      <section className="education">
        <h1 className="education--title">
          Education
        </h1>
        {this.state.educationInfo.length > 0 ? this.createUI() : undefined}
        {this.createForm()}
        <span className="education--span"></span>
      </section>
    )
  }
}

export default Education;