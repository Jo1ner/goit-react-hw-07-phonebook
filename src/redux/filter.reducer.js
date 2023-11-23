import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addContactsFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
