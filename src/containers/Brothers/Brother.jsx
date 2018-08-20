import React from 'react';

// node modules
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import _includes from 'lodash/includes';
import _map from 'lodash/map';
import _indexOf from 'lodash/indexOf';

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
import Loader from '../components/Loader';

// actions
import { getBrothers, getBrotherByKey } from '../../actions/data';

// constants
const IMAGE_URL =
  'https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers';

class Brother extends React.Component {
  static propTypes = {
    brother: PropTypes.shape({
      name: PropTypes.string,
      key: PropTypes.string,
      year: PropTypes.number,
      pseClass: PropTypes.string,
      majors: PropTypes.arrayOf(PropTypes.string),
      minors: PropTypes.arrayOf(PropTypes.string),
      previousPositions: PropTypes.arrayOf(PropTypes.string),
      careerInterests: PropTypes.arrayOf(PropTypes.string),
      hometown: PropTypes.string,
      bio: PropTypes.string,
      loading: PropTypes.bool,
      resolved: PropTypes.bool,
      error: PropTypes.bool
    }),
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const {
      brotherKey,
      brosList,
      brother,
      getBrothers,
      getBrotherByKey
    } = this.props;
    if (isNotValid(brosList)) getBrothers();
    if (isNotValid(brother)) getBrotherByKey(brotherKey);
  }

  componentWillReceiveProps(nextProps) {
    const { brotherKey } = this.props;
    const {
      brotherKey: nextBrotherKey,
      brosList,
      brother,
      getBrothers,
      getBrotherByKey
    } = nextProps;
    if (isNotValid(brosList)) getBrothers();
    if (brotherKey !== nextBrotherKey || isNotValid(brother))
      getBrotherByKey(nextBrotherKey);
  }

  render() {
    const { brother, prevBro, nextBro, path } = this.props;
    if (isNotValid(brother) || brother.error) return null;
    if (brother.loading) return <Loader />;

    const position = (() => {
      if (brother.position) {
        if (brother.position === 'N/A') return 'Active';
        return brother.position;
      }
      return 'Active';
    })();

    document.title = `${brother.name ||
      'Brothers'} - Pi Sigma Epsilon | Zeta Chi Chapter`;

    return (
      <Container className="px-1 py-0h" fw="none">
        <BroImage
          src={`${IMAGE_URL}/${brother.key}`}
          alt={brother.name}
          border
        />
        <InfoContainer className="px-0q" jc="normal">
          <PageHandler
            path={path}
            prevBro={prevBro || {}}
            nextBro={nextBro || {}}
          />
          <HeaderContainer>
            <Name>{brother.name}</Name>
            <Position className="p-0 m-0">{position}</Position>
          </HeaderContainer>
          <BrotherTable
            name={brother.name}
            year={brother.year}
            hometown={brother.hometown}
            class={brother.pseClass}
            major={brother.majors}
            minor={brother.minors}
            careerInterests={brother.careerInterests}
            previousPositions={brother.previousPositions}
          />
          <Bio>{brother.bio}</Bio>
          <RowContainer>
            {Object.entries(brother.mediaUrls).map(site => {
              const [iconKey, href] = site;
              if (iE(href)) return null;
              return (
                <MediaLink
                  key={`${brother.name}_${iconKey}`}
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

const mapStateToProps = (state, props) => {
  const [brotherKey, path, brosList] = (() => {
    const { match } = props;
    const { path, params } = match;
    if (_includes(path, EXECUTIVES_PATH))
      return [params.name, EXECUTIVES_PATH, state.data.brothers.executivesList];
    return [params.name, BROTHERS_PATH, state.data.brothers.brothersList];
  })();

  const [prevBro, nextBro] = (() => {
    if (!brosList || !brotherKey) return [{}, {}];
    const keyList = _map(brosList, 'key');
    const index = _indexOf(keyList, brotherKey);
    if (index === -1) return [{}, {}];
    let prev, next;
    const numBros = brosList.length - 1;
    if (index === 0) {
      prev = brosList[numBros];
      next = brosList[index + 1];
    } else if (index === numBros) {
      prev = brosList[index - 1];
      next = brosList[0];
    } else {
      prev = brosList[index - 1];
      next = brosList[index + 1];
    }
    return [prev, next];
  })();

  return {
    brother: state.data.brothers.data[brotherKey],
    brotherKey,
    brosList,
    path,
    prevBro,
    nextBro
  };
};

export default connect(
  mapStateToProps,
  {
    getBrothers,
    getBrotherByKey
  }
)(Brother);

const Container = ColumnContainer.extend`
  align-items: center;
  @media (min-width: 1050px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const BroImage = Image.extend`
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
