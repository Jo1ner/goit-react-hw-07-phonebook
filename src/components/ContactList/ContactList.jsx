import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contactsStore.contacts);

  const getFindContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });
  return (
    <ul>
      {getFindContact.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
