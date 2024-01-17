import React, { useContext, forwardRef } from 'react';
import { ContactContext } from '../context/GlobalState';

const ContactItem = forwardRef(({ contact }, ref) => {
  const { setCurrentContact, deleteContact } = useContext(ContactContext);

  const handleEdit = () => {
    setCurrentContact(contact);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      deleteContact(contact._id);
      setCurrentContact(null);
    }
  };

  return (
    <div ref={ref} className="contact-item">
      <div className="contact-details">
        <div className="contact-name">{contact.firstName} {contact.lastName}</div>
        <div className="contact-detail">Email: {contact.email}</div>
        <div className="contact-detail">Phone: {contact.phoneNumber}</div>
        {contact.address && (
          <div className="contact-address">
            <div>Address: {contact.address.street}, {contact.address.city}</div>
            <div>{contact.address.state}, {contact.address.zipCode}</div>
            <div>{contact.address.country}</div>
          </div>
        )}
      </div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
});

export default ContactItem;
