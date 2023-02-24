import { Button } from 'commonStyles/coommonStyles.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
import { BtnWrapper, Title, Wrapper } from './DeleteMenu.styled';

export const DeleteMenu = ({ userId, onClose }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Title>Are you sure you want to delete this contact?</Title>
      <BtnWrapper>
        <li>
          <Button onClick={() => dispatch(deleteContact(userId))}>YES</Button>
        </li>
        <li>
          <Button onClick={onClose}>NO</Button>
        </li>
      </BtnWrapper>
    </Wrapper>
  );
};
