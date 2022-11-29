import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientsService from "./clientsService";

// Credits: {},
// Holidays: {},
// Instructions: {},

const initialState = {
  clients: [],
  General: {},
  Address: {},
  Billings: {},
  Invoicing: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addClient = createAsyncThunk(
  "clients/addcl",
  async (clientData, thunkAPI) => {
    try {
      const result = await clientsService.addClient(clientData);
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

export const deleteClient = createAsyncThunk(
  "clients/delcl",
  async (clientData, thunkAPI) => {
    try {
      const result = await clientsService.deleteClient(clientData);
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


export const updateClient = createAsyncThunk(
  "clients/upcl",
  async (dataObject, thunkAPI) => {
    try {
      const result = await clientsService.updateClient(dataObject.id.id, dataObject.clientdata);
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

export const getSingleClient = createAsyncThunk(
  "cl/GS",
  async (clientData, thunkAPI) => {
    try {
      const result = await clientsService.getSingleClient(clientData);
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

export const getAllClients = createAsyncThunk(
  "clients/getallcl",
  async (_, thunkAPI) => {
    try {
      return await clientsService.getAllCleints();
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

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    reset: () => initialState,
    saveGeneralForm: (state, action) => {
      state.General = action.payload;
    },
    saveAddressForm: (state, action) => {
      state.Address = action.payload;
    },
    saveBillingsForm: (state, action) => {
      state.Billings = action.payload;
    },
    saveInvoicingsForm: (state, action) => {
      state.Invoicing = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllClients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllClients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.clients = action.payload;
      })
      .addCase(getAllClients.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.clients.push(action.payload);
      })
      .addCase(addClient.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleClient.pending, (state, action)=>{
        state.isLoading = true
      })
      .addCase(getSingleClient.fulfilled, (state, action)=>{
        state.clients = action.payload
      })
      .addCase(getSingleClient.rejected, (state, action)=>{
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.clients = action.payload;
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const {
  reset,
  saveGeneralForm,
  saveAddressForm,
  saveBillingsForm,
  saveInvoicingsForm,
} = clientSlice.actions;

export default clientSlice.reducer;
