import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid";

const initialState = {
    saved: []
};

export const newsSlice = createSlice({
    name: 'SavedNews',
    initialState,
    reducers: {
        addSaved: (state, action) => {
            state.saved = [...state.saved, { ...action.payload, id: uuidv4() }];
        },
        deleteSaved: (state, action) => {
            const newList = state.saved.filter((data) => data.id !== action.payload);
            state.saved = newList;
        }
    },
})

export const { addSaved, deleteSaved } = newsSlice.actions;

export default newsSlice.reducer;