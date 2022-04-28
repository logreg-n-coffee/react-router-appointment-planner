import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>
        <input 
          type='text'
          placeholder="Appointment Title"
          onChange={({ target }) => setTitle(target.value)}
          value={title}
          required
        />
      </label>
      <br />
      <label>
        <ContactPicker 
        contacts={contacts}
        value={contact}
        onChange={({ target }) => setContact(target.value)}
      />
      </label>
      <label>
        <input 
          type='date'
          onChange={({ target }) => setDate(target.value)}
          value={date}
          min={getTodayString()}
          required
        />
        </label>
      <br />
      <label>
        <input 
          type='time'
          onChange={({ target }) => setTime(target.value)}
          value={time}
          required
        />
      </label>
      <br />
      <input type='submit' value='Add Appointment' />
    </form>
  );
};
