import React,{useState,useEffect} from 'react';
import './App.css';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Header from "./Header"
import Addcontact from './addContact';
import Contactlist from "./Contactlist"


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
      <Route path="/" exact component={()=> <Contactlist contacts={contacts} getContactId={removeContactHandler}/>}/>
      <Route path="/add" component={() => <Addcontact addcontactHandler={addcontactHandler} />
      }
      />
      </Switch>
      {/*<Addcontact addcontactHandler={addcontactHandler}/>
      <Contactlist contacts={contacts} getContactId={removeContactHandler}/>*/} 
      </Router>
      
    </div>
  );
}


export default App;
