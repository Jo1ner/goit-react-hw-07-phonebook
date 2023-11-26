import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  console.log('filter: ', filter);
  const contacts = useSelector(state => state.contacts.contacts.items);
  console.log('contactsInList: ', contacts);

  const getFindContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });
  console.log('getFindContact: ', getFindContact);
  return (
    <ul>
      {getFindContact.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
