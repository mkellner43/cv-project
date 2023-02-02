import React, { Component } from "react"

class InfoLable extends Component {
  constructor(props){
    super(props)
    this.state= {
      text: '',
      isEditing: false,
      tag: props.tag,
      default: props.value
    }
  }
  handleClick = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }))
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  handleBlur = () => {
    this.setState({
      isEditing: false
    })
  }
  render(){
    return(
      this.state.isEditing ?
      <input
        value={this.state.text}
        autoFocus={true}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        className={this.props.className}
      />
      :
      <this.state.tag className={this.props.className} onClick={this.handleClick}>{this.state.text === '' ? this.state.default : this.state.text}</this.state.tag>
    )
  }
}

export default InfoLable;