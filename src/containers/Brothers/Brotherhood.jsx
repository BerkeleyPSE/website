import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import { BrotherImage } from './BrotherImage.jsx';
import { ColumnContainer } from '../components/ContainerStyles';
import { PageHeader } from '../components/HeaderStyles';
import { BROTHERS_PATH } from '../Navbar/navbar_constants';

// actions
import { getBrothers } from '../../actions/data';

class Brotherhood extends Component {
  componentDidMount() {
    const { getBrothers } = this.props;
    document.title = 'Brotherhood - Pi Sigma Epsilon | Zeta Chi Chapter';
    const { brothers, executives } = this.props;
    if (!brothers.length || !executives.length) getBrothers();
  }

  render() {
    const { brothers } = this.props;
    const allBrothers = brothers.map(brother => {
      return (
        <BrotherImage
          brother={brother}
          key={brother._id}
          path={BROTHERS_PATH}
        />
      );
    });

    return (
      <div id="brotherhood-container">
        <ColumnContainer className="mb-2">
          <Image
            src="http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/brothers/brotherhood.jpg"
            alt="Pi Sigma Epsilon brotherhood"
          />
          <Header className="py-2" altStyle>
            Our Brotherhood
          </Header>
        </ColumnContainer>
        <AllBrothersContainer>{allBrothers}</AllBrothersContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  brothers: state.data.brothers.brothersList,
  executives: state.data.brothers.executivesList
});

export default connect(
  mapStateToProps,
  { getBrothers }
)(Brotherhood);

const Image = styled.img`
  position: relative;
`;

const Header = PageHeader.extend`
  font-size: 3rem;
  position: absolute;
  width: 100%;
`;

const AllBrothersContainer = styled.div`
  text-align: center;
`;
