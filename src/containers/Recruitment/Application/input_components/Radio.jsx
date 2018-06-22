import React from 'react';
import PropTypes from 'prop-types';

// components
import {
  ColumnContainer,
  RowContainer
} from '../../../components/ContainerStyles';
import Label from './Label';
import { Desc, Req } from './Texts';

const Radio = ({ label, name, desc, options, isRequired }) => (
  <ColumnContainer className="my-1q" ai="baseline">
    <Label for={name}>
      {label}
      {isRequired && <Req>*</Req>}
    </Label>
    {desc && <Desc>{desc}</Desc>}
    {options.map((o, i) => (
      <Option
        key={o.toLowerCase().replace(' ', '-')}
        className="my-0q"
        fw="none"
      >
        <input
          className=""
          type="radio"
          id={`${name}_option-${i}`}
          name={name}
          value={o}
        />
        <label className="ml-0q" htmlFor={`${name}_option-${i}`}>
          {o}
        </label>
      </Option>
    ))}
  </ColumnContainer>
);

const Option = RowContainer.extend`
  font-size: 1rem;
`;

Radio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  isRequired: PropTypes.bool
};

export default Radio;
