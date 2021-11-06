import React from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.png"
import './contactDetail.css'

const ContactDetail = (props)=>{
    const {name,email}=props.location.state.contacts
return (
    <div className="main mg1">
        <div className="ui card centered">
            <div className="image">
                <img src={user} alt={user}></img>
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
        </div>
        <div className="center-div center">
           <Link to ="/"> <button className="ui button blue center" >Back to Contact List</button>
           </Link>
        </div>
    </div>
)
}

export default ContactDetail

