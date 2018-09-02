import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// node modules
import { connect } from 'react-redux';
import { Field } from 'redux-form';

// components
import Form from '../components/Form';
import { ColumnContainer } from '../components/ContainerStyles';
import { PageHeader } from '../components/HeaderStyles';
import { ParaText } from '../components/TextStyles';
import Input from '../components/inputs/Input';
import SubmitButton from '../components/inputs/SubmitButton';

// actions
import { onSubmitCoffeeChatForm } from '../../actions/app';

const ALLOW_SIGNUPS = false;

const CoffeeChats = ({ onSubmitCoffeeChatForm }) => {
  document.title = 'Coffee Chats - Pi Sigma Epsilon | Zeta Chi Chapter';

  return (
    <CoffeeChatContainer className="pb-1">
      <PageHeader>Coffee Chats Sign Up</PageHeader>
      {ALLOW_SIGNUPS ? (
        <React.Fragment>
          <Text>Meet our brother during coffee chats! Sign up below!</Text>
          <Form formName="coffeeChat" onSubmit={onSubmitCoffeeChatForm}>
            <Field
              name="name"
              component={Input}
              label="Name"
              placeholder="Oski Bear"
              required
            />
            <Field
              name="email"
              component={Input}
              label="Email"
              type="email"
              placeholder="oski@berkeley.edu"
              required
            />
            <Field
              name="availability1"
              component={Input}
              label="Availablity 1"
              placeholder="Monday, 8/27 between 10am and 2pm"
              required
            />
            <Field
              name="availability2"
              component={Input}
              label="Availablity 2"
              placeholder="Tuesday, 8/28 after 4pm"
              required
            />
            <Field
              name="availability3"
              component={Input}
              label="Availablity 3"
              placeholder="Friday, 8/31 before 12pm"
            />
            <Field
              name="brotherPreferences"
              component={Input}
              label="List the brothers you'd like to chat"
              desc="We'll try to match you up with at least one of them."
              placeholder="Varsha Sundar, Kyle Lu, Tim Cheng"
            />
            <Field
              name="aboutYou"
              component={Input}
              label="List some of your interests"
              placeholder="Software Development, Penny Trading, Dancing"
            />
            <SubmitButton />
          </Form>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Text>
            As our application is now live, we are no longer taking coffee chat
            requests.
          </Text>
          <AppLink to="/app" bgColor="#895fad">
            Apply Now!
          </AppLink>
        </React.Fragment>
      )}
    </CoffeeChatContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmitCoffeeChatForm: (values, formName) =>
    dispatch(onSubmitCoffeeChatForm(values, formName))
});

export default connect(
  null,
  mapDispatchToProps
)(CoffeeChats);

const CoffeeChatContainer = ColumnContainer.extend`
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;
const Text = ParaText.extend`
  font-size: 1rem;
  text-align: center;
`;

const AppLink = styled(Link)`
  background-color: #895fad;
  border: 2px solid #895fad;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 10px;
  padding: 0.625rem 1.25rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.25s;
  z-index: 10;

  &:hover {
    opacity: 0.75;
  }
`;
