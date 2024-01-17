import React, { useContext, useRef, useState, useCallback } from 'react';
import { ContactContext } from '../context/GlobalState';
import ContactItem from './ContactItem';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);
  const [visibleCount, setVisibleCount] = useState(10);
  const observer = useRef();

  const lastContactElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && contacts.length > visibleCount) {
        setVisibleCount(prevVisibleCount => prevVisibleCount + 10);
      }
    });
    if (node) observer.current.observe(node);
  }, [visibleCount, contacts.length]);

  return (
    <div className="contact-list">
      {contacts.slice(0, visibleCount).map((contact, index) => (
        <ContactItem 
          key={contact._id} 
          contact={contact} 
          ref={index + 1 === visibleCount ? lastContactElementRef : null}
        />
      ))}
    </div>
  );
};

export default ContactList;
