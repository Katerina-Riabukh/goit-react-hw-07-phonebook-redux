import React from "react";
import PropTypes from 'prop-types';
import { Button, LI, Name } from "./contactItems.styled";
import { useDispatch } from "react-redux";
import { delateContact } from "redux/contactsSlice";


export const ContactItem = ({ item }) => {

        const { name, number, id } = item
        const dispatch = useDispatch()

        const delate = () => {
                dispatch(delateContact(id))
        }

        return (
                <LI >
                        <Name>{name}</Name>
                        <span>{number}</span>
                        <Button onClick={delate}>Delate contact</Button>
                </LI>
        )
};

ContactItem.propTypes = {
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string
}



