import React, { useContext, useState, useEffect } from 'react';
import { ContactContext } from '../context/GlobalState';
import getInitialContactState from '../utils/helper';

const ContactForm = () => {
  const { addContact, updateContact, currentContact, setCurrentContact } = useContext(ContactContext);

  const [contact, setContact] = useState(getInitialContactState());

  useEffect(() => {
    setContact(currentContact || getInitialContactState());
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact._id) {
      updateContact(contact._id, contact);
    } else {
      addContact(contact);
    }
    setContact(getInitialContactState());
    setCurrentContact(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setContact({
        ...contact,
        address: {
          ...contact.address,
          [addressField]: value
        }
      });
    } else {
      setContact({ ...contact, [name]: value });
    }
  };

  const handleCancel = () => {
    setContact(getInitialContactState())
    setCurrentContact(null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={contact.firstName} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="lastName" value={contact.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
      <input type="tel" name="phoneNumber" value={contact.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />

      <fieldset>
        <legend>Address</legend>
        <input type="text" name="address.street" value={contact.address.street} onChange={handleChange} placeholder="Street" />
        <input type="text" name="address.city" value={contact.address.city} onChange={handleChange} placeholder="City" />
        <input type="text" name="address.state" value={contact.address.state} onChange={handleChange} placeholder="State" />
        <input type="text" name="address.zipCode" value={contact.address.zipCode} onChange={handleChange} placeholder="Zip Code" />
        <input type="text" name="address.country" value={contact.address.country} onChange={handleChange} placeholder="Country" />
      </fieldset>

      <button type="submit">Submit</button>
      {currentContact && <button onClick={handleCancel}>Cancel</button>}
    </form>
  );
}

export default ContactForm