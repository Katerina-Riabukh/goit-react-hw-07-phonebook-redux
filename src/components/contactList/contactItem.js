import React from 'react';
import PropTypes from 'prop-types';
import { Button, LI, Name } from './contactItems.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/fetch';

export const ContactItem = ({ item }) => {
  const { name, phone, id } = item;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <LI>
      <Name>{name}</Name>
      <span>{phone}</span>
      <Button onClick={() => handleDelete()}>Delate contact</Button>
    </LI>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
