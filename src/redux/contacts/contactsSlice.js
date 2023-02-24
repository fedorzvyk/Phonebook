import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contacts.operations';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  //   reducers: {
  //     addContact: {
  //       reducer(state, action) {
  //         state.items.push(action.payload);
  //       },
  //     },

  //     deleteContact(state, action) {
  //       // return state.items.filter(task => task.id !== action.payload);
  //       const index = state.items.findIndex(
  //         task => task.id === action.payload.id
  //       );
  //       state.items.splice(index, 1);
  //     },
  //   },

  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       task => task.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(contact => {
          return contact.id !== action.payload.id
            ? contact
            : { ...contact, ...action.payload };
        });
        // const index = state.items.findIndex(
        //   (contact) => contact.id === action.payload.id
        // );
        // if (index !== -1) {
        //   state.items.splice(index, 1);
        // }
        //   const oldContacts = state.contacts.find(
        //   contact => contact.id === action.payload.id
        // );
        // const newContacts = state.contacts.filter(
        //   contact => contact.id !== oldContacts.id
        // );
        //   return {
        //     ...state,
        //     contacts: [...newContacts, action.payload]
        //   }
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

//
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const getContacts = state => state.contacts;

// console.dir(contactsSlice.reducer)
// console.dir(fetchContacts)

export const contactsReducer = contactsSlice.reducer;
