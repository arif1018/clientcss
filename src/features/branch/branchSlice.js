import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import branchService from "./branchService";
const initialState = {
  Branches: [],
  Branch: {},
  scheduling: {},
  payroll: {},
  billing: {},
  client: {},
  registry: {},
  checklayout: {},
  invoicing: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const AddBrancheData = createAsyncThunk(
  "branch/add",
  async (brData, thunkAPI) => {
    try {
      const result = await branchService.AddBrancheData(brData);
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

export const getAllBranches = createAsyncThunk(
  "branch/get",
  async (_, thunkAPI) => {
    try {
      return await branchService.getAllBranches();
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

const branchSlice = createSlice({
  name: "Branches",
  initialState,
  reducers: {
    reset: () => initialState,
    saveBranchForm: (state, action) => {
      state.Branch = action.payload;
    },
    saveSchedulingForm: (state, action) => {
      state.scheduling = action.payload;
    },
    savePayrollForm: (state, action) => {
      state.payroll = action.payload;
    },
    saveClientForm: (state, action) => {
      state.client = action.payload;
    },
    saveRegistryForm: (state, action) => {
      state.registry = action.payload;
    },
    saveCheckLayoutForm: (state, action) => {
      state.checklayout = action.payload;
    },
    saveInvoicingForm: (state, action) => {
      state.invoicing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getAllBranches.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(getAllBranches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Branches = action.payload;
      })
      // .addCase(getAllBranches.rejected, (state, action) => {
      //   state.isSuccess = false;
      //   state.isError = true;
      //   state.message = action.payload;
      // })
      .addCase(AddBrancheData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddBrancheData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Branches.push(action.payload);
      })
      .addCase(AddBrancheData.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {
  reset,
  saveBranchForm,
  saveSchedulingForm,
  saveCheckLayoutForm,
  saveClientForm,
  saveInvoicingForm,
  savePayrollForm,
  saveRegistryForm,
} = branchSlice.actions;
export default branchSlice.reducer;
