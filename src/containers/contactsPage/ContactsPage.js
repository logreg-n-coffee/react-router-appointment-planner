import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContact = props.addContact;

  // keep track of current local state values - input thru the contact form
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      // reset the values when finish adding the contact 
      setName('');
      setPhone('');
      setEmail('');
    }


  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    // if we can't find duplicates, will the variable will be undefined
    // improvement suggestion: create a unique id for each user to allow duplicate name
    const foundDuplicate = contacts.find(contact => contact.name === name);
    if (foundDuplicate !== undefined) {
      setDuplicate(true);
    }
  }, [contacts, name]);

  // useEffect( () => {
  //   for (const contact of contacts) {
  //     if (name === contact.name) {
  //       setDuplicate(true);
  //     }
  //     return;
  //   }
  // }, [contacts, name]);


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {duplicate ? " - Name already exists." : ""}
        {/* render a contact form with following passed props */}
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          tiles={contacts}
        />
      </section>
    </div>
  );
};
