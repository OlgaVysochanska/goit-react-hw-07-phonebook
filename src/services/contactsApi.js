import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63fe243a370fe830d9cf0edc.mockapi.io/api/contacts',
});

export const getAllContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async id => {
  const { data } = await instance.post('/', id);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
