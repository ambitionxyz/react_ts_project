import { createAsyncThunk } from '@reduxjs/toolkit';

import { IInitialState } from './request.reducer';

export const createRequest = createAsyncThunk<any, IInitialState>(
  'request_action',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      return payload;
    } catch (_) {}
  },
);
