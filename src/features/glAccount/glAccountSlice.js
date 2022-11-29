import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import glAccountServices from "./glAccountServices";

const initialState = {
  GLAccount: [],
  GLAccountTemp: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addglAcountData = createAsyncThunk(
  "GLAcountData/add",
  async (glAcountData, thunkAPI) => {
    try {
      const result = await glAccountServices.addglAcountData(glAcountData);
      return result;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getfuncglAcountData = createAsyncThunk(
  "GLAcountData/get",
  async (_, thunkAPI) => {
    try {
      const result = await glAccountServices.getglAcountData();
      return result;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const glAccountSlice = createSlice({
  name: "GLAccount",
  initialState,
  reducers: {
    reset: () => initialState,
    saveGLAcountData: (state, action) => {
      state.GLAccountTemp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(addglAcountData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addglAcountData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.GLAccount.push(action.payload);
      })
      .addCase(addglAcountData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getfuncglAcountData.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      // state.GLAccount = action.payload
      state.GLAccount = action.payload
      });
  },
});

export const { reset, saveGLAcountData } = glAccountSlice.actions;

export default glAccountSlice.reducer;
