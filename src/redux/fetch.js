import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = 'https://64e4deaac55563802913e01c.mockapi.io/'


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await fetch(`${BASE_URL}/contacts/ `, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        }).then(responce => responce.json())
        return response
    } catch (error) { return thunkAPI.rejectWithValue(error.message); }
});

export const addContact = createAsyncThunk("contacts/addContact", async (dispatch) => {
    try {
        const response = await fetch(`${BASE_URL}/contacts/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(dispatch)
        }).then(responce => responce.json())
        return response;
    } catch (error) { }
});


export const deleteContact = createAsyncThunk("contacts/deleteContact", async (dispatch) => {
    try {
        const response = await fetch(`${BASE_URL}/contacts/${dispatch}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        }).then(responce => responce.json())
        return response;
    } catch (error) { }
});

