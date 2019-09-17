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
            src={`${IMAGE_URL}/${brother.key}.png`}
            alt={brother.name}
            height="255px"
            width="171px"
          />
          <Overlay hover={hover} isBrosPage>
            	<Name className="my1-0 mx-0">{brother.name}</Name>
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
  margin: 8px;
`;

const Overlay = styled.div`
  transition: 0.5s ease;
  background-color: ${props => (props.hover || !props.isBrosPage ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)')};
  position: absolute;
  display:block;
  height: 15%;
  width: 100%;
  bottom:0;
`;

const Name = styled.p`
  color: #fff;
  font-family: Avenir Next, sans-serif;
  font-size: 1rem;
  letter-spacing: 0.025rem;
  margin-top: 0.6rem;
`;
