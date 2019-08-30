import React from 'react';
import styled from 'styled-components';

// components
import HoverCard from '../components/HoverCard.jsx';
import { RowContainer } from '../components/ContainerStyles';
import HOVER_CARD_ITEMS from './recruitment_constants';

const Recruitment = () => {
  document.title = 'Recruitment - Pi Sigma Epsilon | Zeta Chi Chapter';

  const hoverCards = HOVER_CARD_ITEMS.map((item, index) => {
    return <HoverCard key={index} {...item} />;
  });

  return (
    <div id="recruitment-container">
      <div id="timeline-container">
        {/* Timeline URL: https://docs.google.com/spreadsheets/d/1ZUO6jEAIp_hReRdpsxUFuTs7enwImkJUiSPkhF_cdqo */}
        <iframe
          title="Spring 2019 Recruitment Timeline"
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1sGhcCz0EmKjDIWiw4lbSFAGc4JfjCLCgajZH-XLAre8&font=Default&lang=en&initial_zoom=2&height=650"
          width="100%"
          height="650px"
          frameBorder="0"
        />
      </div>
      <HoverCardContainer>{hoverCards}</HoverCardContainer>
    </div>
  );
};

export default Recruitment;

const HoverCardContainer = styled(RowContainer)`
  padding: 2.5rem;
`;
