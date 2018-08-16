import React from 'react';

// node modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { isNotValid } from '../../helpers';

// components
import { BROTHERS_PATH, EXECUTIVES_PATH } from '../Navbar/navbar_constants';
import { ColumnContainer } from '../components/ContainerStyles';
import { Image } from '../components/ImageStyles';

// constants
const IMAGE_URL =
  'https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers';

export class BrotherImage extends React.Component {
  static propTypes = {
    brother: PropTypes.object.isRequired,
    path: PropTypes.oneOf([BROTHERS_PATH, EXECUTIVES_PATH])
  };

  static defaultProps = {
    path: BROTHERS_PATH
  };

  state = {
    hover: false
  };

  render() {
    const { brother, path } = this.props;
    const { hover } = this.state;
    const position = (() => {
      if (brother.position) {
        if (brother.position === 'N/A') return 'Active';
        return brother.position;
      }
      return 'Active';
    })();

    if (isNotValid(brother)) return null;

    return (
      <BrotherImageContainer
        to={`${path}/${brother.key}`}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <BroContainer>
          <Image
            src={`${IMAGE_URL}/${brother.key}`}
            alt={brother.name}
            height="425px"
            width="285px"
          />
          <Overlay hover={hover} isBrosPage>
            <Name className="my-1 mx-0">{brother.name}</Name>
            <DividerLine />
            <Position className="my-1 py-0 px-0h">{position}</Position>
          </Overlay>
        </BroContainer>
      </BrotherImageContainer>
    );
  }
}

const BrotherImageContainer = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
`;

const BroContainer = ColumnContainer.extend`
  position: relative;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  height: 135px;
  width: 100%;

  display: ${props => (props.hover || !props.isBrosPage ? 'block' : 'none')};
  @media (max-device-width: 425px) {
    display: block;
  }
`;

const Name = styled.p`
  color: #fff;
  font-family: Lato, sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.025rem;
  padding: 0.3125rem 0;
`;

const DividerLine = styled.hr`
  color: #fff;
  border: 1px solid #895fad;
  width: 60%;
`;

const Position = styled.p`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
`;
