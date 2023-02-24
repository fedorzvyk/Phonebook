import { Box } from 'commonStyles/Box';
import { About } from './Home.styled';
import gif from 'images/phone_animation.gif';

export default function Home() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      minHeight="100%"
      display="flex"
      flexDirection="column"
      gridGap={4}
    >
      <About>
        Phonebook is an application designed specifically for storing and
        managing phone numbers, featuring a filter option that allows users to
        easily find and retrieve contacts. It provides a convenient and
        organized way to keep track of important contacts and their associated
        phone numbers.
      </About>
      <img src={gif} alt="" />
    </Box>
  );
}
