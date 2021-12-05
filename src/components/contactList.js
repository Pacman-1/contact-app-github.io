import React from 'react'
import ContactCard from './contactCard'
import { Link } from 'react-router-dom'

const Contactlist = (props) =>{
    console.log(props)

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }

  console.log(props.contacts)
    
    const renderContactList = props.contacts.map((contacts =>{
        return (
            <ContactCard contacts={contacts} clickHandler={deleteContactHandler} key={contacts.id} /> 
        );
    })
    )
    
    return (
        <div className="main">
             <h2>Contact List</h2>
                <Link to ="/add"> 
                <button className="ui button blue right">Add Contact</button>
                </Link>
            <div className="ui celled list">{renderContactList}
            </div>
        </div>

    )
}

export default Contactlist