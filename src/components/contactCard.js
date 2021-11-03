import React from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.png"

const ContactCard = (props)=>{
const {id,name,email} = props.contacts
return (
    <div className="item">
        <img src={user} alt="" className="ui avatar image" />
                <div className="content">
                    <Link to={{pathname:`/contact/${id}`,state:{contacts:props.contacts}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    </Link>
                </div>
                <i className="trash alternate outline icon" onClick={()=> props.clickHandler(id)} style={{color:"red",marginTop:"10px"} }></i>
            </div>
)
}

export default ContactCard

