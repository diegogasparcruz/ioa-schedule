import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: string;
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContacts(state, action: PayloadAction<Contact[]>) {
      state.contacts = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.unshift(action.payload);
    },
    deleteContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { setContacts, setError, setLoading, deleteContact } =
  contactSlice.actions;

export default contactSlice.reducer;
