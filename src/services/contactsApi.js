import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63fe243a370fe830d9cf0edc.mockapi.io/api/contacts',
});

export const fetchAllContacts = async () => {
  const data = await instance.get('/');
  return data;
};
