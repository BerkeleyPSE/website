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
  <ColumnContainer className="my-1h" ai="baseline">
    <span>
      <Label for={name}>{label}</Label>
      {required && <Req>*</Req>}
    </span>
    {touched && error && <ErrorLabel>{error}</ErrorLabel>}
    <InputField
      id={name}
      className="my-0q p-0q"
      placeholder={placeholder}
      type={type}
      {...input}
      required={required}
    />
    {desc && <Desc>{desc}</Desc>}
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
