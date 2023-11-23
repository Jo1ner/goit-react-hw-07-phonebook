import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
