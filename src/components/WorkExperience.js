import React, { Component } from "react";
import uniqid from "uniqid";

class WorkExperience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: uniqid(),
      addingContent: false,
      editing: false,
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
    this.state.editing ? 
    this.setState(prevState => {
      let array = prevState.experienceData.filter(obj => obj.id !== this.state.id)
      return {
        experienceData: [
        { 
          id: prevState.id,
          company: prevState.company,
          city: prevState.city,
          from: prevState.from,
          to: prevState.to,
          role: prevState.role,
          description: prevState.description
        }, ...array
        ],
        addingContent: false,
        editing: false,
        id: uniqid(),
        company: '',
        city: '',
        from: '',
        to: '',
        role: '',
        description: ''
      }})
      :
      this.setState(prevState => ({
      experienceData: [...prevState.experienceData,
        { 
          id: prevState.id,
          company: prevState.company,
          city: prevState.city,
          from: prevState.from,
          to: prevState.to,
          role: prevState.role,
          description: prevState.description
        }
      ],
      id: uniqid(),
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
          placeholder="Enter City"
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
    let array = this.state.experienceData.map(
      (info) => (
        <div key={info.id} className='contents'>
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
      let currentObject = prevState.experienceData.filter((obj) => obj.id === id )
      return {
        id: currentObject[0].id,
        company: currentObject[0].company,
        city: currentObject[0].city,
        from: currentObject[0].from,
        to: currentObject[0].to,
        role: currentObject[0].role,
        description: currentObject[0].description,
        addingContent: true,
        editing: true
      }
    })
  }


  removeContent = (e) => {
    const id = e.target.id
    this.setState(prevState => {
      let newState = prevState.experienceData.filter(obj => obj.id !== id )
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