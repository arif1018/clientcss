import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import registrantServices from "./registrantServices";

const initialState = {
  Registrant: [],
  General: {},
  Contact: {},
  Preferences: {},
  RegisHR: {},
  Payroll: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addRegistrantData = createAsyncThunk(
  "Registrant/add",
  async (RegistrantData, thunkAPI) => {
    try {
      const result = await registrantServices.addRegistrantData(RegistrantData);
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

export const getRegistrantData = createAsyncThunk(
  "Registrant/get",
  async (_, thunkAPI) => {
    try {
      const result = await registrantServices.getRegistrantData();
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

const registrantSlice = createSlice({
  name: "Registrant",
  initialState,
  reducers: {
    saveRegistrantGeneralForm: (state, action) => {
      state.General = action.payload;
    },
    saveRegistrantContactForm: (state, action) => {
      state.Contact = action.payload;
    },
    saveRegistrantPreferencesForm: (state, action) => {
      state.Preferences = action.payload;
    },
    saveRegistrantHRForm: (state, action) => {
      state.RegisHR = action.payload;
    },
    saveRegistrantPayrollForm: (state, action) => {
      state.Payroll = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRegistrantData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Registrant = action.payload;
      })
      .addCase(addRegistrantData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRegistrantData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Registrant.push(action.payload);
      })
      .addCase(addRegistrantData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {
  reset,
  saveRegistrantGeneralForm,
  saveRegistrantContactForm,
  saveRegistrantPreferencesForm,
  saveRegistrantHRForm,
  saveRegistrantPayrollForm,
} = registrantSlice.actions;

export default registrantSlice.reducer;
