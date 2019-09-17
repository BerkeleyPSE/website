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

// import { all } from './brothersTemp';

class Brotherhood extends Component {
  componentDidMount() {
    const { getBrothers } = this.props;
    document.title = 'Brotherhood - Pi Sigma Epsilon | Zeta Chi Chapter';
    const { brothers, executives } = this.props;
    if (!brothers.length || !executives.length) getBrothers();
  }

  render() {
    const { brothers } = this.props;
    // const brothers = all.data;
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
            src="https://res.cloudinary.com/berkeleypse-tech/image/upload/v1547445666/brothers/brotherhood2.png"
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
  height:60vh;
  width:100vw;
  object-fit:cover;
`;

const Header = PageHeader.extend`
  font-size: 3rem;
  position: absolute;
  width: 100%;
`;

const AllBrothersContainer = styled.div`
  width:95%;
  justify-content:center;
  margin:auto;
  text-align: center;
  margin-bottom: 30px;
`;
