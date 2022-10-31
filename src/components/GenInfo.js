import React, { Component } from "react"
import InfoLable from "./InfoLable";

class GenInfo extends Component {
  render(){
    return (
      <section className='general-info'>
        <section className="content">
          <div className='general-info--left'>
            <InfoLable value="First Name" tag='h2' className="textLabel name"/>
            <InfoLable value="Last Name" tag='h2' className="textLabel name"/>
            <InfoLable value="Occupation" tag='p' className="textLabel"/>
          </div>
          <div className='general-info--right'>
            <InfoLable value="Address Line 1" tag='p' className="textLabel"/>
            <InfoLable value="Address Line 2" tag='p' className="textLabel"/>
            <InfoLable value="City" tag='p' className="textLabel"/>
            <InfoLable value="State" tag='p' className="textLabel"/>
            <InfoLable value="Zip Code" tag='p' className="textLabel"/>
            <InfoLable value="Phone" tag='p' className="textLabel"/>
            <InfoLable value="Email" tag='p' className="textLabel"/>
          </div>
        </section>
        
        <span className="general-info--span"></span>
      </section>
    )
  }
}
export default GenInfo