import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
//? We install a package of uuidv4 for id generation...

//* useState hook is used for passing data from parent to child and vice versa... useEffect hook is used for persistence of data...

//! To pass from parent to child we use Props and useState... but to pass from child to parent we use the handler... the App.js is the parent and other components are the children...

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  //TODO: 1. We make an Array or Data.. or for Dynamic entities we use state hooks...
  /*const contacts = [
    {
      id: "1",
      name: "Vishu Kalier",
      email: "Vishu.kalier2021@vitbhopal.ac.in",
    },
    {
      id: "2",
      name: "Siddharth Paliwal",
      email: "Siddharth.paliwal2021@vitbhopal.ac.in",
    },
  ];*/
  const [contacts, setContacts] = useState([]);    // Passing empty fields for the beginning...
  //! We make the contacts an attribute of ContactList component and now the contacts array can be accessed via the help of props...
  const addContactHandler = (contact) => {        //* The addContactHandler is a function to pass something from child to parent...
    console.log(contact);
    // Rest(...) is used to take all the previous states (here contacts) in the contacts...
    setContacts([...contacts, contact]);         //! We always use setContacts to update the state and we never use contacts (first state) directly... Thu uuid gives a unique id...
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));    //? Since we are storing the data in Local storage... Stringify method to store as a string file...
  }, [contacts]);                    //? The dependency are the Contacts...

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));    //? now we are accessing it from the Local Storage... parse method to parse the string...
    if(retrieveContacts) setContacts(retrieveContacts);            //? If the Contacts are available then we pass the Contacts in an empty array...
  }, []);                    //? The dependency are the empty array...

  return (
    <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
    </div>
  );
  // Todo 2. We now give attribute to the component eg. callLog...
}

export default App;
