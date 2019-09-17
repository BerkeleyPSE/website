import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import { BrotherImage } from './BrotherImage.jsx';
import { ColumnContainer } from '../components/ContainerStyles';
import { PageHeader } from '../components/HeaderStyles';
// import { Image } from '../components/ImageStyles';
import { EXECUTIVES_PATH } from '../Navbar/navbar_constants';

// actions
import { getBrothers } from '../../actions/data';

// import { execs } from './brothersTemp';

class Executives extends Component {
  componentDidMount() {
    document.title = 'Executive Board - Pi Sigma Epsilon | Zeta Chi Chapter';
    const { brothers, executives, getBrothers } = this.props;
    // const { brothers, getBrothers } = this.props;
    // console.log("he");
    // console.log(executives);

    if (!brothers.length || !executives.length) getBrothers();
  }

  render() {
    const { executives } = this.props;
    // const executives = execs.data;
    const allExecs = executives.map(brother => {
      console.log(`brother: ${brother.name}`);
      return (
        <BrotherImage
          brother={brother}
          key={`${EXECUTIVES_PATH}_${brother._id}`}
          path={EXECUTIVES_PATH}
        />
      );
    });

    return (
      <div id="executives-container">
        <ColumnContainer className="mb-2">
          <Image
            src="https://res.cloudinary.com/berkeleypse-tech/image/upload/v1546680369/skyline.jpg"
            alt="Pi Sigma Epsilon executive board"
          />
          <Header className="py-2" altStyle>
            Our Executives
          </Header>
        </ColumnContainer>
        <CenterTextContainer>{allExecs}</CenterTextContainer>
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
)(Executives);

const CenterTextContainer = styled.div`
  text-align: center;
  // margin-bottom: 30px;
  margin:auto;
  margin-bottom:30px;

  @media (max-width: 1350px) {
    width:70%;
  }
  @media (max-width: 1075px) {
    width:100%;
  }
`;

const Image = styled.img`
  position: relative;
  height:60vh;
  width:100vw;
  object-fit:cover;
`;

const Header = PageHeader.extend`
  font-size: 3rem;
  position: absolute;
  width: 100%;
`;
