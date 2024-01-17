import React, { createContext, useState, useEffect } from 'react';
import { getAllContacts, addContact, updateContact, deleteContact } from '../services/api'; // Import your API functions

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [currentContact, setCurrentContact] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        const fetchedContacts = await getAllContacts();
        setContacts(fetchedContacts);
    };

    const handleAddContact = async (contactData) => {
        await addContact(contactData);
        fetchContacts();
    };

    const handleUpdateContact = async (id, contactData) => {
        await updateContact(id, contactData);
        fetchContacts();
    };


    const handleDeleteContact = async (id, contactData) => {
      await deleteContact(id, contactData);
      fetchContacts();
    }


    const handleSetCurrentContact = (contact) => {
        setCurrentContact(contact);
    };

    return (
        <ContactContext.Provider value={{
            contacts,
            currentContact,
            addContact: handleAddContact,
            updateContact: handleUpdateContact,
            deleteContact: handleDeleteContact,
            setCurrentContact: handleSetCurrentContact
        }}>
            {children}
        </ContactContext.Provider>
    );
};
