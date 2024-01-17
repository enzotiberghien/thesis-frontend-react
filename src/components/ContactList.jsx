import React, { useContext } from 'react';
import { ContactContext } from '../context/GlobalState';
import ContactItem from './ContactItem';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div>
      {contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList