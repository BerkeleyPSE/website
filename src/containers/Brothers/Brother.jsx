import React from 'react';

// node modules
import { connect } from 'react-redux';
import styled from 'styled-components';
import includes from 'lodash/includes';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import indexOf from 'lodash/indexOf';

import { isNotValid, iE } from '../../helpers';

// components
import PageHandler from './PageHandler';
import BrotherTable from './BrotherTable';
import { ColumnContainer, RowContainer } from '../components/ContainerStyles';
import { PageHeader } from '../components/HeaderStyles';
import { Image } from '../components/ImageStyles';
import { ParaText } from '../components/TextStyles';
import MediaLink from '../components/MediaLink';
import { BROTHERS_PATH, EXECUTIVES_PATH } from '../Navbar/navbar_constants';

// actions
import { DataActions } from '../../actions/data-actions';

// constants
const IMAGE_URL =
  'https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers';

class Brother extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { brothers, executives, activeBro } = this.props.data;
    const { getBrothers, getBrotherByKey } = this.props;
    if (isNotValid(brothers.data) || isNotValid(executives)) getBrothers();
    if (isNotValid(activeBro)) getBrotherByKey(this.getKey(this.props));
  }

  componentWillReceiveProps(nextProps) {
    const { brothers, executives } = nextProps.data;
    const { getBrothers, getBrotherByKey } = nextProps;
    if (this.getKey(this.props) !== this.getKey(nextProps))
      getBrotherByKey(this.getKey(nextProps));
    if (isNotValid(brothers.data) || isNotValid(executives)) getBrothers();
  }

  getKey = props => props.match.params.name;

  getPath = props => {
    const { match } = props;
    return includes(match.path, EXECUTIVES_PATH)
      ? EXECUTIVES_PATH
      : BROTHERS_PATH;
  };

  getBrosList = props => {
    const { match } = props;
    const { brothers, executives } = props.data;
    return includes(match.path, EXECUTIVES_PATH) ? executives : brothers.data;
  };

  getSurroundingBros = broKey => {
    const broList = this.getBrosList(this.props);
    const keyList = map(broList, 'key');
    const index = indexOf(keyList, broKey);
    if (index === -1) return [{}, {}];

    let prevBro, nextBro;
    const numBros = broList.length - 1;

    if (index === 0) {
      prevBro = broList[numBros];
      nextBro = broList[index + 1];
    } else if (index === numBros) {
      prevBro = broList[index - 1];
      nextBro = broList[0];
    } else {
      prevBro = broList[index - 1];
      nextBro = broList[index + 1];
    }

    return [prevBro, nextBro];
  };

  render() {
    const { activeBro } = this.props.data;
    if (isNotValid(activeBro)) return null;

    const broKey = this.props.match.params.name;
    const [prevBro, nextBro] = this.getSurroundingBros(broKey);

    document.title = `${activeBro.name ||
      'Brothers'} - Pi Sigma Epsilon | Zeta Chi Chapter`;

    return (
      <Container className="px-1 py-0h" fw="none">
        <BroImage
          src={`${IMAGE_URL}/${activeBro.key}`}
          alt={activeBro.name}
          border
        />
        <InfoContainer className="px-0q" jc="normal">
          <PageHandler
            path={this.getPath(this.props)}
            prevBro={prevBro || {}}
            nextBro={nextBro || {}}
          />
          <HeaderContainer>
            <Name>{activeBro.name}</Name>
            <Position className="p-0 m-0">
              {activeBro.position || 'Active'}
            </Position>
          </HeaderContainer>
          <BrotherTable
            name={activeBro.name}
            year={activeBro.year}
            hometown={activeBro.hometown}
            class={activeBro.pseClass}
            major={activeBro.majors}
            minor={activeBro.minors}
            careerInterests={activeBro.careerInterests}
            previousPositions={activeBro.previousPositions}
          />
          <Bio>{activeBro.bio}</Bio>
          <RowContainer>
            {Object.entries(activeBro.mediaUrls).map(site => {
              const [iconKey, href] = site;
              if (iE(href)) return null;
              return (
                <MediaLink
                  key={`${activeBro.name}_${iconKey}`}
                  iconKey={iconKey}
                  href={href}
                />
              );
            })}
          </RowContainer>
        </InfoContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  DataActions
)(Brother);

const Container = RowContainer.extend`
  align-items: flex-start;
  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BroImage = Image.extend`
  max-width: 400px;
  @media (min-width: 323px) {
    height: 485px;
    width: 323px;
  }

  @media (min-width: 425px) {
    height: 600px;
    width: 400px;
  }
`;

const InfoContainer = ColumnContainer.extend`
  width: 100%;
`;

const HeaderContainer = styled.div`
  letter-spacing: 0.025rem;
  padding: 0.625rem 1.25rem;
  text-align: center;
`;

const Name = PageHeader.extend`
  font-size: 3rem;
  font-weight: 700;
  padding: 0.625rem 0 0.3125rem 0;
`;

const Position = styled.h3`
  color: #818181;
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

const Bio = ParaText.extend`
  color: #818181;
  line-height: 1.65rem;
  margin: 15px auto;
  width: 80%;
`;
