import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { ColumnContainer } from '../ContainerStyles';
import { Label, ErrorLabel } from './Label';
import { Desc, Req } from './Texts';

const TextArea = ({ label, name, placeholder, desc, isRequired }) => (
  <Container className="my-1q" ai="baseline">
    <Label for={name}>
      {label}
      {isRequired && <Req>*</Req>}
    </Label>
    {desc && <Desc>{desc}</Desc>}
    <TextAreaField
      className="my-0h p-0q"
      id={name}
      name={name}
      placeholder={placeholder}
      required={isRequired}
    />
  </Container>
);

const Container = ColumnContainer.extend`
  /* width: 80%; */
  max-width: 800px;
`;

const TextAreaField = styled.textarea`
  border: 2px solid var(--main);
  font-size: 0.9rem;
  height: 100px;
  width: 100%;
  outline: none;
  transition: all 0.25s;

  &:focus {
    border: 2px solid var(--accent);
  }
`;

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  desc: PropTypes.string,
  isRequired: PropTypes.bool
};

export default TextArea;
