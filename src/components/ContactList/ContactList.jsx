import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  // console.log('object');
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(({ id, number, name }) => (
        <ContactListItem key={id} id={id} number={number} name={name} />
      ))}
    </List>
  );
};

export default ContactList;
