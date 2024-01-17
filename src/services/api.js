import axios from 'axios';

const API_URL = 'http://localhost:5000/contacts';

export const getAllContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};


export const addContact = async (contactData) => {
  try {
    const response = await axios.post(API_URL, contactData);
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};


export const updateContact = async (id, contactData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, contactData);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};


export const deleteContact = async (id, contactData) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, contactData);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};