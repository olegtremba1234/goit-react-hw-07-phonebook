import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'Contacts',
  storage,
  whitelist: ['items'],
};

const init = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: init,
    filter: '',
  },
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});
export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;