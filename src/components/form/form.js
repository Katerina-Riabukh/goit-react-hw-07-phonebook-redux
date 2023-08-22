import { nanoid } from "nanoid";
import { BUTTON, FORM, Input, LABEL } from "./form.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { selectContacts } from "redux/selectors";

export const Form = () => {

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)


  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value)
        setId(nanoid(10))
        break;
      case 'number':
        setNumber(value)
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} already in contacts`)
    }
    dispatch(addContact({ name, id, number }))
    reset()
  }

  const reset = () => {
    setName('')
    setNumber('')
  }

  return (
    <FORM onSubmit={handleSubmitForm} >
      <LABEL>
        Name
        <Input

          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LABEL>
      <LABEL>
        Phone number
        <Input
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LABEL>
      <BUTTON type="submit">Add to contacts</BUTTON>
    </FORM>
  )
};






