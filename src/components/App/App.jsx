
import { Form } from "../form/form";
import { ContactList } from "../contactList/contactList";
import { FilterContacts } from "../filter/filterContacts";
import { H1, H2, Wraper } from "./App.styled";

export const App = () => {

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

