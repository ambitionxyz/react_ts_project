import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
  isLoading?: boolean;
  isScreenLoading?: boolean;
}

const initialState: IInitialState = {
  isLoading: false,
  isScreenLoading: false,
};

const { actions, reducer } = createSlice({
  name: 'web3auth_slice',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading || false;
    },
    setScreenLoading: (state, action: PayloadAction<{ isScreenLoading: boolean }>) => {
      state.isScreenLoading = action.payload.isScreenLoading || false;
    },
  },
  extraReducers: _ => {},
});

export { reducer };
export default actions;
