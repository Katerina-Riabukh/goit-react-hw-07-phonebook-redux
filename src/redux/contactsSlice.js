import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './fetch'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: ''
    },
    extraReducers: {
        //FETCH
        [fetchContacts.pending](state) {
            state.isLoading = true
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false
            state.contacts = action.payload
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        //ADD
        [addContact.pending](state) {
            state.isLoading = true
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false
            state.contacts.push(action.payload)
        },
        [addContact.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },

        //DELETE
        [deleteContact.pending](state, action) {
        },
        [deleteContact.fulfilled](state, action) {
            state.contacts = state.contacts.filter((contact) => {
                return contact.id !== action.payload.id
            })
        },
        [deleteContact.rejected](state, action) {
            state.error = action.payload
        }

    }
})

export const contactsReducer = contactsSlice.reducer;
