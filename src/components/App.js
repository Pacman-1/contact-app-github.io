import React from 'react';
import './App.css';
import Header from "./Header"
import addContact from "./addContact"
import contactList from "./contactList"
function App() {
  return (
    <div>
      <Header/>
      <addContact/>
      <contactList/>
    </div>
  );
}


export default App;
