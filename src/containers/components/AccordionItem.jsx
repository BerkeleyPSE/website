import React from 'react';

// node modules
import styled from 'styled-components';
import PropTypes from 'prop-types';

// components
import { PageHeader } from '../components/HeaderStyles';
import { ParaText } from '../components/TextStyles';
import { IntLink, ExtLink } from '../components/LinkStyles';

export default class AccordionItem extends React.Component {
  state = {
    isOpen: false
  };

  generateAnswer = (answerItem, index) => {
    switch (answerItem.type) {
      case 'text':
        return <span key={`faq_answer_${index}`}>{answerItem.content}</span>;
      case 'int-link':
        return (
          <IntLink key={`faq_answer_${index}`} to={answerItem.to}>
            {answerItem.content}
          </IntLink>
        );
      case 'ext-link':
        return (
          <ExtLink key={`faq_answer_${index}`} href={answerItem.href}>
            {answerItem.content}
          </ExtLink>
        );
      default:
        return <span key={`faq_answer_${index}`}>{answerItem.content}</span>;
    }
  };

  render() {
    let { isOpen } = this.state;
    let { question, answer } = this.props;
    return (
      <AccordionContainer>
        <HeaderContainer 
          isOpen={isOpen}
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          <Header>{question}</Header>
          {isOpen ? (
            <Chevron className="fa fa-chevron-up" aria-hidden="true" />
          ) : (
            <Chevron className="fa fa-chevron-down" aria-hidden="true" />
          )}
        </HeaderContainer>
        <BodyContainer isOpen={isOpen}>
          <Answer className="m-0">
            {answer.map((answerItem, index) => {
              return this.generateAnswer(answerItem, index);
            })}
          </Answer>
        </BodyContainer>
      </AccordionContainer>
    );
  }
}

const AccordionContainer = styled.div`
  margin: 0.3125rem auto;

  width: 90%;

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
`;

const HeaderContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0;
  transition: all 0.5s ease;

  background-color: #fff;
  border-bottom: ${props => (props.isOpen ? '1px solid #895fad' : '0.5px dotted #333')};
  color: ${props => (props.isOpen ? '#895FAD' : '#333')};
`;

const Header = PageHeader.extend`
  color: inherit;
  font-size: 1.25rem;
  letter-spacing: 0.035rem;
  margin: 0 auto 0 1.25rem;
  padding: 0;
  text-align:left;
`;

const Chevron = styled.i`
  color: inherit;
  font-size: 1rem;
  margin: 0 1.25rem 0 auto;
  padding: 0 0.625rem;
`;

const BodyContainer = styled.div`
  display: ${props => !props.isOpen && 'none'};
`;

const Answer = ParaText.extend`
  line-height: 1.5rem;
  padding: 1rem 1.5rem;
`;

// PropTypes

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.arrayOf(PropTypes.object).isRequired
};
