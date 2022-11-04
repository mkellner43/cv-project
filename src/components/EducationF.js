import React, { useState } from 'react';
import uniqid from 'uniqid';

export default function Education() {
  const [formInfo, setFormInfo] = useState(
    {
      addingContent: false,
      id: uniqid(),
      school: '',
      from: '',
      to: '',
      degree: '',
      grade: '',
      editing: false
    }
  )
  const [educationData, setEducationData] = useState([])

  function createUI() {
    let array = educationData.map(
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
            <i className="fa-solid fa-pen-to-square" onClick={editContent} id={info.id}></i>
            <i className="fa-solid fa-circle-xmark remove" onClick={removeContent} id={info.id}></i>
          </div>
        </div>
      )
    )
    return array
  }

  function removeContent(e) {
    const id = e.target.id
    setEducationData(prevState => {
      let newState = prevState.filter(obj => obj.id !== id )
      return [...newState]
    })
  }

  function editContent(e) {
    const id = e.target.id
    setEducationData(prevState => {
      let [currentObject] = prevState.filter((obj) => obj.id === id )
      setFormInfo({
        ...currentObject,
        addingContent: true,
        editing: true
      })
      return [...prevState]
    })

  }

  function createForm() {
    let content = formInfo.addingContent ?
    <form id={formInfo.id} >
      <div>
        <label htmlFor="school" >Name of University or School</label>
        <input 
          placeholder="Enter School Name"
          value={formInfo.school}
          name="school"
          onChange={handleChange}
        />
      <label htmlFor="from">From</label>
      <input 
        value={formInfo.from}
        name="from"
        onChange={handleChange}
        type='date'
      />
      <label htmlFor="to" >To</label>
      <input 
        placeholder="To"
        value={formInfo.to}
        name="to"
        onChange={handleChange}
        type='date'
      />
    </div>

    <div>
      <label htmlFor="degree" >Degree</label>
      <input 
        placeholder="Enter Here"
        value={formInfo.degree}
        name="degree"
        onChange={handleChange}
        type='text'
      />
      <label htmlFor="grade" >Grade</label>
      <input 
        placeholder="Enter Here"
        value={formInfo.grade}
        name="grade"
        onChange={handleChange}
        type='text'
      />
    </div>
      
      <div className="form--buttons">
        <button id={formInfo.id} className="button--add" onClick={handleSubmit}><i className="fa-solid fa-circle-plus button--icon"></i>Save</button>
        <button className="button--cancel" onClick={handleAbort}><i className="fa-solid fa-ban button--icon"></i>Cancel</button>
      </div>
    </form>
    :
    <div className="add--btn">
      <button className="button--add" onClick={openForm}><i className="fa-solid fa-circle-plus button--icon"></i>Add</button>
    </div>
    return content
  }
  function openForm() {
    setFormInfo(prevState => ({
      ...prevState,
      addingContent: true
    }))
  }
  function handleChange(e) {
    setFormInfo(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    formInfo.editing ?
    setEducationData(prevState => {
      const newEducationData = prevState.filter(obj => obj.id !== formInfo.id)
      let newFormInfo = formInfo
      setFormInfo({
        addingContent: false,
        id: uniqid(),
        school: '',
        from: '',
        to: '',
        degree: '',
        grade: '',
        editing: false
      })
      return [
        newFormInfo,
        ...newEducationData
      ]
    })
    :
    setEducationData(prevState => {
      const newFormInfo = formInfo
      setFormInfo({
        addingContent: false,
        id: uniqid(),
        school: '',
        from: '',
        to: '',
        degree: '',
        grade: '',
        editing: false
      })
      return [
        ...prevState,
      newFormInfo]
    })
  }
  function handleAbort(e) {
    e.preventDefault();
    setFormInfo({
      addingContent: false,
      school: '',
      from: '',
      to: '',
      degree: '',
      grade: '',
      editing: false
    })
  }
  // useEffect(()=> {

  // },[formInfo])

  return (<section className="education">
  <h1 className="education--title">
    Education
  </h1>
  { educationData.length > 0 ? createUI() : null }
  { createForm() }
  <span className="education--span"></span>
</section>)
}