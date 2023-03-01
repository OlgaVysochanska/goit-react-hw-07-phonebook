import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => (state.items = payload),
    [fetchContacts.pending]: state => (state.isLoading = true),
    // addContact: {
    //   reducer: (state, { payload }) => {
    //     state.push(payload);
    //   },
    //   prepare: data => {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         ...data,
    //       },
    //     };
    //   },
    // },
    // deleteContact: (state, { payload }) =>
    //   state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
