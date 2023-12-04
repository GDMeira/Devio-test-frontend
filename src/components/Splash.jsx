import { Flex, Spinner } from '@chakra-ui/react';
import styled from 'styled-components';
import Logo from './Logo';

export default function Splash({ loading = false, message = '' }) {
  return (
    <Flex 
      minH={'100dvh'} minW={'100dvw'} 
      position={'absolute'} top={0} 
      justifyContent={'center'} alignItems={'center'}
      bgColor={'#125C13'}
    >
      <Grid>
        {loading && <Spinner/>}
        <Logo />
      </Grid>
      {message && <Message>{message}</Message>}
    </Flex>
  );
}

const Grid = styled.div`
  display: flex;
  align-items: center;

  user-select: none;

  & > *:not(:last-child) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const Message = styled.div`
  font-size: 14px;
  margin-top: -10px;
  width: 100%;
  max-width: 320px;
  border-radius: 4px;
  padding: 10px;
  background-color: rgba(0, 0, 0, .2);
  color: white;
  text-align: center;
`;
