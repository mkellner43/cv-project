import React, { Component } from "react"

class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addingContent: false,
      school: '',
      from: '',
      to: '',
      degree: '',
      grade: '',
      educationInfo: []
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      educationInfo: [...prevState.educationInfo,
        { 
          school: this.state.school,
          from: this.state.from,
          to: this.state.to,
          degree: this.state.degree,
          grade: this.state.grade
        }
      ],
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
      grade: ''
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
          <div className="remove">
            <i className="fa-solid fa-circle-xmark" onClick={this.removeContent} id={indx}></i>
          </div>
        </div>
      )
    )
    return array
  }
  
  removeContent = (e) => {
    const index = Number(e.target.id)
    this.setState(prevState => {
      let newState = prevState.educationInfo.filter((_, idx) => idx !== index )
      return {
      educationInfo: newState
    }})
  }

  createForm = () => {
    let content = this.state.addingContent ?
    <form>
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
        <button className="button" onClick={this.handleSubmit}><i className="fa-solid fa-circle-plus button--icon"></i>Save</button>
        <button className="button" onClick={this.handleAbort}><i className="fa-solid fa-ban button--icon"></i>Cancel</button>
      </div>
    </form>
    :
    <button className="button" onClick={this.openForm}><i className="fa-solid fa-circle-plus button--icon"></i>Add</button>
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