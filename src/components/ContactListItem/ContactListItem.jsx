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

import { Modal } from 'components/Modal/Modal';
import EditForm from 'components/EditForm/EditForm';
import { DeleteMenu } from 'components/DeleteMenu/DeleteMenu';

const ContactListItem = ({ id, number, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userIdState, setUserIdState] = useState('');
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
      <Button type="button" onClick={() => setUserIdState(id)}>
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
      {userIdState && (
        <Modal onClose={() => setUserIdState('')}>
          <DeleteMenu userId={userIdState} onClose={() => setUserIdState('')} />
        </Modal>
        //
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
