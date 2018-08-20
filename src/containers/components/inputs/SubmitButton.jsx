import React from 'react';
import styled from 'styled-components';

const SubmitButton = () => <Button type="submit">Submit</Button>;

const Button = styled.button`
  background-color: #895fad;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 0.9rem;
  outline: none;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.75;
  }
`;

export default SubmitButton;
