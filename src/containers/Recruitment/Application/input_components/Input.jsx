import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { ColumnContainer } from '../../../components/ContainerStyles';
import Label from './Label';
import { Desc, Req } from './Texts';

const Input = ({ label, type, name, placeholder, desc, isRequired }) => (
  <ColumnContainer className="my-1q" ai="baseline">
    <Label for={name}>
      {label}
      {isRequired && <Req>*</Req>}
    </Label>
    {desc && <Desc>{desc}</Desc>}
    <InputField
      className="my-0h p-0q"
      id={name}
      type={type || 'text'}
      name={name}
      placeholder={placeholder}
      required={isRequired}
    />
  </ColumnContainer>
);

const InputField = styled.input`
  border: none;
  border-bottom: 2px solid var(--main);
  font-size: 1rem;
  min-width: 400px;
  outline: none;
  transition: all 0.25s;

  &:focus {
    border-bottom: 2px solid var(--accent);
  }
`;

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool
};

export default Input;
