import { createSlice } from "@reduxjs/toolkit";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        delateContact(state, action) {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        }
    }
})

export const { addContact, delateContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
