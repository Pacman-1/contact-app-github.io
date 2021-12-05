import React,{useState,useEffect} from 'react';
import './App.css';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Header from "./Header"
import Addcontact from './addContact';
import Contactlist from "./contactList"
import ContactDetail from './ContactDetail';


function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts, setcontacts] = useState([])
  
  const addcontactHandler = (contact) =>{
    console.log(contacts)
    setcontacts([...contacts,{id:uuid(), ...contact}])
  }
  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id
    })

    setcontacts(newContactList)
  }

  useEffect(()=>{
    const getContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON))
    if (getContacts) {
      setcontacts(getContacts)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  return (
    <div className="ui container">
      <Router> 
      <Header/>
      <Switch> 
      <Route path="/" exact render={(props)=> (<Contactlist {...props} contacts={contacts} getContactId={removeContactHandler}/>)}
      
      />

      
      <Route path="/add" render={(props)=>
      (<Addcontact {...props} addcontactHandler={addcontactHandler}/>
      )}
      />
      <Route path="/contact/:id" component ={ContactDetail}/> 
      </Switch>
      </Router>
      
    </div>
  );
}


export default App;
