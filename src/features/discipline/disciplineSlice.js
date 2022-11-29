import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import disciplib from "./disciplineService";
import disciplineServices from "./disciplineService";

const initialState = {
    Discipline: [], 
    DisciplineTemp: {}, 
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}

export const addDisciplineData = createAsyncThunk("Discipline/add",async(disciplineData, thunkAPI)=>{
    try {
        const result = await disciplineServices.addDisciplineData(disciplineData)
        return result
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)        
    }
})

export const getDisciplineData = createAsyncThunk("Discipline/get",async(_, thunkAPI)=>{
    try {
        const result = await disciplineServices.getDisciplineData()
        return result
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)        
    }
})


const disciplineSlice = createSlice({
    name: "Discipline",
    initialState,
    reducers: {
        reset:() => initialState,
        saveDisciplineData: (state, action) => {
            state.DisciplineTemp = action.payload;
          },
    },extraReducers:(builder)=>{
        builder
        .addCase(addDisciplineData.pending, (state)=>{state.isLoading=true})
        .addCase(addDisciplineData.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.Discipline.push(action.payload)
        })
        .addCase(addDisciplineData.rejected,(state, action)=>{
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getDisciplineData.fulfilled,(state, action)=>{
            state.isSuccess = false
            state.isError = true
            state.Discipline = action.payload
        })
}
})

export const {reset, saveDisciplineData} = disciplineSlice.actions

export default disciplineSlice.reducer