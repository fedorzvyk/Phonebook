import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/contacts.operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Form } from './EditForm.styled';
import { Input, Label, Button } from 'commonStyles/coommonStyles.styled';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function EditForm({ contact, onClose }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  // console.log('first');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        alert(`case ${name} doesn't support`);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const repeatingName = contacts.find(contact => contact.name === name);

    if (repeatingName) {
      alert(`${name} is already in contacts.`);
      return null;
    }

    try {
      dispatch(editContact({ id: contact.id, name, number }));
    } catch (error) {}
    alert(`contact ${name} was successfully changed`);
    onClose();
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">
        <FaPhoneSquareAlt /> Edit contact
      </Button>
    </Form>
  );
}
