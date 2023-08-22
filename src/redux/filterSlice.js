import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        filterContacts(state, actions) {
            state.filter = actions.payload
        },
    }

})


export const { filterContacts } = filterSlice.actions;
export const filterReduser = filterSlice.reducer
