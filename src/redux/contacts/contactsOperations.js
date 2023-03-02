import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.getAllContacts();
      return contacts;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await contactsApi.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await contactsApi.deleteContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
