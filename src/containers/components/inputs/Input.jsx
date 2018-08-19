import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { ColumnContainer } from '../ContainerStyles';
import { Label, ErrorLabel } from './Label';
import { Desc, Req } from './Texts';

const Input = ({
  input,
  name,
  label,
  desc,
  placeholder,
  type,
  required,
  meta: { error, touched }
}) => (
  <ColumnContainer className="my-1q" ai="baseline">
    <Label for={name}>
      {label}
      {required && <Req>*</Req>}
    </Label>
    {desc && <Desc>{desc}</Desc>}
    <InputField
      id={name}
      className="my-0h p-0q"
      placeholder={placeholder}
      type={type}
      {...input}
      required={required}
    />
    {touched && error && <ErrorLabel>{error}</ErrorLabel>}
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
