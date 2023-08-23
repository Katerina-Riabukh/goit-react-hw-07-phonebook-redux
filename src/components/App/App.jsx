
import { Form } from "../form/form";
import { ContactList } from "../contactList/contactList";
import { FilterContacts } from "../filter/filterContacts";
import { H1, H2, Wraper } from "./App.styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from '../../redux/fetch';

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())

  }, [dispatch])



  return (
    <Wraper>
      <H1>Phone book</H1>
      <Form />
      <H2>Contacts</H2>
      <FilterContacts />

      <ContactList />
    </Wraper>
  );
}

