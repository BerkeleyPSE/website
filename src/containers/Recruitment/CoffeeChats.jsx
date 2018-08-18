import React from 'react';

// components
import { ColumnContainer } from '../components/ContainerStyles';
import { PageHeader } from '../components/HeaderStyles';
import { ParaText } from '../components/TextStyles';
import { BASE_URL } from '../../actions/api';

const ALLOW_SIGNUPS = false;

const CoffeeChats = () => {
  document.title = 'Coffee Chats - Pi Sigma Epsilon | Zeta Chi Chapter';

  return (
    <CoffeeChatContainer>
      <PageHeader>Coffee Chats Sign Up</PageHeader>
      {ALLOW_SIGNUPS ? (
        <React.Fragment>
          <Text>Meet our brother during coffee chats! Sign up below!</Text>
          <form id="coffee-chats" action={`${BASE_URL}/coffee-chat/add`}>
            <div />
          </form>
        </React.Fragment>
      ) : (
        <Text>We will open sign-ups when we begin tabling. See you then!</Text>
      )}
    </CoffeeChatContainer>
  );
};

export default CoffeeChats;

const CoffeeChatContainer = ColumnContainer.extend`
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Text = ParaText.extend`
  font-size: 1rem;
  text-align: center;
`;
