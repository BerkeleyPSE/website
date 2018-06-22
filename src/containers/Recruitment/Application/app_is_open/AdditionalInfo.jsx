import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { ParaText } from '../../../components/TextStyles';
import { ExtLink } from '../../../components/LinkStyles';

const AdditionalInfo = () => (
  <Text className="pb-1">
    Please email the following items to the Directors of Recruiting at{' '}
    <ExtLink href="mailto:berkeleypse.recruiting@gmail.com">
      berkeleypse.recruiting@gmail.com
    </ExtLink>.
    <br />
    Note that your application will be considered INCOMPLETE until you do so.
    <ol>
      <ListItem>
        <ImpItem>Resume</ImpItem> [pdf format]
      </ListItem>
      <ListItem>
        <ImpItem>Cover Letter</ImpItem> [pdf format]. Include the following
        information [500 words or less]:
      </ListItem>
      <ol type="a">
        <ListItem>Why do you want to join PSE?</ListItem>
        <ListItem>What will you contribute to PSE?</ListItem>
        <ListItem>
          What do you expect to gain from PSE? How will you incorporate this
          into your future?
        </ListItem>
      </ol>
      <ListItem>
        <ImpItem>Unofficial Transcript</ImpItem> with your name [Screenshot via
        CalCentral Academics]
      </ListItem>
      <ListItem>
        <ImpItem>Additional Transcript</ImpItem> [applicable only to Transfer
        students]
      </ListItem>
      <ListItem>
        <ImpItem>Class Schedule</ImpItem> [Screenshot via CalCentral Schedule
        Planner]
      </ListItem>
      <ListItem>
        <ImpItem>Recent Headshot</ImpItem> [png or jpg format]
      </ListItem>
    </ol>
  </Text>
);

export default AdditionalInfo;

const Text = ParaText.withComponent('div').extend`
  font-size: 1rem;
  text-align: left;
`;

// const Text = ParaText.extend`
// `;

const ListItem = styled.li`
  margin: 0.75rem 0;
`;

const ImpItem = styled.span`
  color: #895fad;
`;
