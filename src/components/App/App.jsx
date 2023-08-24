
import { Form } from "../form/form";
import { ContactList } from "../contactList/contactList";
import { FilterContacts } from "../filter/filterContacts";
import { H1, H2, Wraper } from "./App.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../redux/fetch';
import { selectContacts } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(selectContacts)

  useEffect(() => {
    dispatch(fetchContacts())

  }, [dispatch])

  return (

    <Wraper>
      <H1>Phone book</H1>
      <Form />
      <H2>Contacts</H2>
      <FilterContacts />
      {isLoading && <p>Loading ...</p>}
      {error && <p>Something wrong...</p>}
      <ContactList />
    </Wraper>

  );
}

