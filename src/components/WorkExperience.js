import React, { Component } from "react";

class WorkExperience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addingContent: false,
      company: '',
      city: '',
      from: '',
      to: '',
      role: '',
      description: '',
      experienceData: []
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
      experienceData: [...prevState.experienceData,
        { 
          company: this.state.company,
          city: this.state.city,
          from: this.state.from,
          to: this.state.to,
          role: this.state.role,
          description: this.state.description
        }
      ],
      addingContent: false,
      company: '',
      city: '',
      from: '',
      to: '',
      role: '',
      description: ''
    }))
  }

  handleAbort = (e) => {
    e.preventDefault()
    this.setState({
      addingContent: false,
      company: '',
      city: '',
      from: '',
      to: '',
      role: '',
      description: ''
    })
  }
  createForm = () => {
    let content = this.state.addingContent ?
    <form>
      <div>
        <label htmlFor="company" >Company</label>
        <input 
          placeholder="Enter Company Name"
          value={this.state.company}
          name="company"
          onChange={this.handleChange}
        />
        <label htmlFor="city">City</label>
        <input 
          value={this.state.city}
          name="city"
          onChange={this.handleChange}
          type='text'
        />
      </div>

      <div>
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
        <label htmlFor="role" >Role</label>
        <input 
          placeholder="Enter Here"
          value={this.state.role}
          name="role"
          onChange={this.handleChange}
          type='text'
        />
        <label htmlFor="description" >Description of responsibilities</label>
        <textarea 
          placeholder="Enter Here"
          value={this.state.description}
          name="description"
          onChange={this.handleChange}
          type='textarea'
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
  createUI = () => {
    let array = this.state.experienceData.map(
      (info, indx) => (
        <div key={indx} className='contents'>
          <div>
            <p>{info.company}</p>
            <p>{info.city}</p>
          </div>
          <div>
            <p>{info.from}</p>
            <p>{info.to}</p>
          </div>
          <div>
            <p>{info.role}</p>
            <p>{info.description}</p>
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
      let newState = prevState.experienceData.filter((_, idx) => idx !== index )
      return {
      experienceData: newState
    }})
  }

  render() {
    return(
      <section className="work-experience">
        <h1>Work Experience</h1>
        {this.state.experienceData.length > 0 ? this.createUI() : undefined}
        {this.createForm()}
        <span className="work-experience--span"></span>
      </section>
    )
  }
}

export default WorkExperience