import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from 'services/api';
import { AppDispatch, AppThunk } from './globalStore';

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
  },
});

const { setContacts, setError, setLoading } = contactSlice.actions;

export default contactSlice.reducer;

export const fetchContacts = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await api.get('/contacts');

    dispatch(setContacts(response.data));
  } catch (error) {
    dispatch(setError('Ocorreu algum problema!'));
  } finally {
    dispatch(setLoading(false));
  }
};
