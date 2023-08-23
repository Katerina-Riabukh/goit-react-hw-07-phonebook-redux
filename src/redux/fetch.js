import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = 'https://64e4deaac55563802913e01c.mockapi.io/'


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    try {
        const response = await fetch(`${BASE_URL}/contacts/`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        }).then(responce => responce.json())
        return response
    } catch (error) {
        console.log(error);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (dispatch) => {
    const response = await fetch(`${BASE_URL}/contacts/`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(dispatch)
    }).then(responce => responce.json())
    return response;
});


export const deleteContact = createAsyncThunk("contacts/deleteContact", async (dispatch) => {
    const response = await fetch(`${BASE_URL}/contacts/${dispatch}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
    }).then(responce => responce.json())
    return response;
});

