import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './fetch'

// const BASE_URL = 'https://64e4deaac55563802913e01c.mockapi.io/contacts/'
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null
    },
    reducers: {
        // fetchContacts: (state) => {
        //     state.isLoading = true

        //     fetch(`${BASE_URL}/contacts/`, {
        //         method: 'GET',
        //         headers: { 'content-type': 'application/json' }
        //     }).then(responce => responce.json())
        // },
        // addContact(state, action) {
        //     state.isLoading = true

        //     fetch(`${BASE_URL}/contacts/`, {
        //         method: 'POST',
        //         headers: { 'content-type': 'application/json' },
        //         body: JSON.stringify(action.payload)
        //     }).then(responce => responce.json()).then((data) => console.log(data))
        //     // state.contacts.push(action.payload) 
        // },
        // delateContact(state, action) {
        //     console.log(action);
        //     state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        // }
    },

    extraReducers: {
        //FETCH
        [fetchContacts.pending](state) {
            state.isLoading = true
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false
            state.contacts = action.payload
            state.error = null
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
            state.error = null
        },
        [addContact.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },

        //DELETE
        [deleteContact.pending](state, action) {
            state.isLoading = true
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false
            state.contacts = state.contacts.filter((contact) => {
                console.log(contact.id);
                console.log(action.payload);
                return contact.id !== action.payload
            })
            state.error = null
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        }

    }
})

export const contactsReducer = contactsSlice.reducer;
