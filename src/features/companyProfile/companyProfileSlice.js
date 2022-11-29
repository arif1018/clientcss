import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import companyProfileServices from "./companyProfileServices";

const initialState = {
  CompanyProile: [],

  General: {},
  clients: {},
  Registry: {},
  Payroll: {},
  Refernce: {},
//   Education: {},
//   EmployementHistory: {},

  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addCompanyData = createAsyncThunk(
  "CompanyProile/add",
  async (companyData, thunkAPI) => {
    try {
      console.log("companyData", companyData);
      const result = await companyProfileServices.addCompanyData(companyData);
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

export const getCompanyData = createAsyncThunk(
  "CompanyProile/get",
  async (_, thunkAPI) => {
    try {
      const result = await companyProfileServices.getCompanyData();
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

const companyProfileSlice = createSlice({
  name: "CompanyProile",
  initialState,
  reducers: {
    saveGeneralCompany: (state, action) => {
      state.General = action.payload;
    },
    saveClientsCompany: (state, action) => {
      state.clients = action.payload;
    },
    saveRegistryCompany: (state, action) => {
      state.Registry = action.payload;
    },
    savePayrollCompany: (state, action) => {
      state.Payroll = action.payload;
    },
    saveRefernceCompany: (state, action) => {
      state.Refernce = action.payload;
    },
    // saveEducationCompany: (state, action) => {
    //   state.Education = action.payload;
    // },
    // saveEmployementHistoryCompany: (state, action) => {
    //   state.EmployementHistory = action.payload;
    // },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCompanyData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.CompanyProile = action.payload;
      })
      .addCase(getCompanyData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addCompanyData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCompanyData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.CompanyProile.push(action.payload);
      })
      .addCase(addCompanyData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {
  reset,
  saveGeneralCompany,
  saveClientsCompany,
  saveRegistryCompany,
  savePayrollCompany,
  saveRefernceCompany,
  saveEducationCompany,
  saveEmployementHistoryCompany,
} = companyProfileSlice.actions;
export default companyProfileSlice.reducer;
