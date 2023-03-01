import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchAllContacts();
      return contacts;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
