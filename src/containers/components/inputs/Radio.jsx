import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

// components
import { ColumnContainer } from '../ContainerStyles';
import { Label, ErrorLabel } from './Label';
import { Desc, Req } from './Texts';

const Radio = ({ name, label, desc, options, required }) => (
  <ColumnContainer className="my-1h" ai="baseline">
    <div>
      <span>
        <Label for={name}>{label}</Label>
        {required && <Req>*</Req>}
      </span>
      {desc && <Desc>{desc}</Desc>}
    </div>
    {options.map((o, i) => (
      <Field
        key={`${name}-option-${o.toLowerCase().replace(/\s/g, '-')}`}
        name={name}
        component={Option}
        type="radio"
        value={o}
        option={o}
      />
    ))}
  </ColumnContainer>
);

const Option = ({ input, option, meta: { touched, error } }) => (
  <OptContainer className="my-0q">
    <label>
      <input className="ml-0q" type="radio" {...input} value={option} />
      <span className="ml-0q">{option}</span>
      {touched && error && <ErrorLabel>{error}</ErrorLabel>}
    </label>
  </OptContainer>
);

const OptContainer = styled.div`
  font-size: 1rem;
`;

Radio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string)
};

export default Radio;
