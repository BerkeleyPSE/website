import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import { BrotherImage } from './BrotherImage.jsx';
import { RowContainer } from '../components/ContainerStyles';
import { PageHeader } from '../components/HeaderStyles';
// import { Image } from '../components/ImageStyles';
import { EXECUTIVES_PATH } from '../Navbar/navbar_constants';

// actions
import { getBrothersIfNeeded } from '../../actions/data';

class Executives extends Component {
  componentDidMount() {
    document.title = 'Executive Board - Pi Sigma Epsilon | Zeta Chi Chapter';
    const { brothers, executives, getBrothersIfNeeded } = this.props;
    if (!brothers.length || !executives.length) getBrothersIfNeeded();
  }

  render() {
    const { executives } = this.props;
    const allExecs = (executives.data || []).map(brother => {
      return (
        <BrotherImage
          brother={brother}
          key={`${EXECUTIVES_PATH}_${brother._id}`}
          path={EXECUTIVES_PATH}
        />
      );
    });

    return (
      <div id="brotherhood-container">
        <LandingContainer>
          {/* <Image
            src="../images/executive_board.JPG"
            alt="Pi Sigma Epsilon executive board"
          /> */}
          <PageHeader>Executive Board</PageHeader>
        </LandingContainer>
        <CenterTextContainer>{allExecs}</CenterTextContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  brothers: state.data.brothers,
  executives: state.data.executives
});

const mapDispatchToProps = dispatch => ({
  getBrothersIfNeeded: dispatch(getBrothersIfNeeded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Executives);

const LandingContainer = RowContainer.extend`
  margin-bottom: 2rem;
`;

const CenterTextContainer = styled.div`
  text-align: center;
`;

// const Header = PageHeader.extend`
//   position: absolute;
//   width: 100%;
// `;
