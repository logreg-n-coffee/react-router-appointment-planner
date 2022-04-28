import React from "react";

// ContactForm takes in props passed in

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} >
      <input 
        value={name}
        type="text"
        placeholder="Name"
        onChange={({ target }) => setName(target.value)}
        required
      />
      <input 
        value={phone}
        type="tel"
        placeholder="Phone Number"
        pattern="^[1-9][0-9]{2}[1-9][0-9]{2}[0-9]{4}$"
        onChange={({ target }) => setPhone(target.value)}
        required
      />
      <input 
        value={email}
        type="email"
        placeholder="Email Address"
        onChange={({ target }) => setEmail(target.value)}
      />
      <input 
        type="submit"
        
      />
    </form>
  );
};
