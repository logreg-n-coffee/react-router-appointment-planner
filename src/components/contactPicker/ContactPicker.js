import React from "react";

// ContactPicker receives two props: 
// contacts (array of contacts) and setContacts (callback fn when onChange event is triggered)

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;

  return (
    <select onChange={onChange}>
        <option value='' >
          Please pick a contact 
        </option>
        {contacts.map( 
          (contact, index) => <option value={contact.name} key={index}> {contact.name} </option>
        )}
    </select>
  );
};
