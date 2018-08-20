import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = props => (
  <LabelText className="my-0q" htmlFor={props.for}>
    {props.children}
  </LabelText>
);

const LabelText = styled.label`
  color: var(--accent);
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.00625rem;
`;

Label.propTypes = {
  for: PropTypes.string,
  children: PropTypes.node
};

const ErrorLabel = props => (
  <ErrorText className="my-0q" htmlFor={props.for}>
    {props.children}
  </ErrorText>
);

const ErrorText = LabelText.extend`
  border-bottom: none;
  color: red;
  margin: 0.3125rem 0.625rem;
`;

Label.propTypes = {
  for: PropTypes.string,
  children: PropTypes.node
};

export { Label, ErrorLabel };
