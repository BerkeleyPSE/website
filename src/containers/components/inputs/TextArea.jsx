import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { ColumnContainer } from '../ContainerStyles';
import { Label, ErrorLabel } from './Label';
import { Desc, Req } from './Texts';

const TextArea = ({
  input,
  name,
  label,
  desc,
  placeholder,
  required,
  meta: { error, touched }
}) => (
  <Container className="my-1h" ai="baseline">
    <span>
      <Label for={name}>{label}</Label>
      {required && <Req>*</Req>}
    </span>
    {touched && error && <ErrorLabel>{error}</ErrorLabel>}
    <TextAreaField
      id={name}
      className="my-0q p-0q"
      placeholder={placeholder}
      {...input}
      required={required}
    />
    {desc && <Desc>{desc}</Desc>}
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
