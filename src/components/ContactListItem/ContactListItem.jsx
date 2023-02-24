import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'commonStyles/coommonStyles.styled';
import { ContactWrap, Item, ItemName } from './ContactListItem.styled';
import {
  FaPhoneAlt,
  FaUserAlt,
  FaRegTrashAlt,
  FaUserEdit,
} from 'react-icons/fa';

import { deleteContact } from 'redux/contacts/contacts.operations';
import { Modal } from 'components/Modal/Modal';
import EditForm from 'components/EditForm/EditForm';
// import { Box } from 'commonStyles/Box';

const ContactListItem = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Item key={id}>
      <Button type="button" onClick={() => setIsModalOpen(isOpen => !isOpen)}>
        <FaUserEdit />
      </Button>
      <ContactWrap>
        <ItemName>
          <FaUserAlt fill="orange" /> {name}:
        </ItemName>
        <span>
          <FaPhoneAlt fill="orange" /> {number}
        </span>
      </ContactWrap>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <FaRegTrashAlt />
      </Button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(isOpen => !isOpen)}>
          <EditForm
            contact={{ name, number, id }}
            onClose={() => setIsModalOpen(isOpen => !isOpen)}
          />
        </Modal>
      )}
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
