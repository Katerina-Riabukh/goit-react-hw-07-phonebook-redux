import React from "react";
import { Filter, FilterContact } from "./filterContacts.styled";
import { useDispatch } from "react-redux";
import { filterContacts } from "redux/filterSlice";


export const FilterContacts = () => {

    const dispatch = useDispatch()

    return (
        <FilterContact> Find contact by name
            <Filter type="text"
                onChange={(event) => dispatch(filterContacts(event.currentTarget.value))}></Filter>
        </FilterContact>
    )



};



