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
import { getBrothersIfNeeded } from '../../actions/data';

class Brotherhood extends Component {
  componentDidMount() {
    const { getBrothersIfNeeded } = this.props;
    document.title = 'Brotherhood - Pi Sigma Epsilon | Zeta Chi Chapter';
    const { brothers, executives } = this.props;
    if (!brothers.length || !executives.length) getBrothersIfNeeded();
  }

  render() {
    const { brothers } = this.props;
    const allBrothers = (brothers.data || []).map(brother => {
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
        <LandingContainer>
          <Image
            src="http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/brothers/brotherhood.jpg"
            alt="Pi Sigma Epsilon brotherhood"
          />
          <Header altStyle>Our Brotherhood</Header>
        </LandingContainer>
        <AllBrothersContainer>{allBrothers}</AllBrothersContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  brothers: state.dataReducer.brothers,
  executives: state.dataReducer.executives
});

const mapDispatchToProps = dispatch => ({
  getBrothersIfNeeded: dispatch(getBrothersIfNeeded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brotherhood);

const LandingContainer = ColumnContainer.extend`
  margin-bottom: 30px;
`;

const Image = styled.img`
  position: relative;
`;

const Header = PageHeader.extend`
  font-size: 3rem;
  position: absolute;
  width: 100%;
  padding: 2rem 0;
`;

const AllBrothersContainer = styled.div`
  text-align: center;
`;
