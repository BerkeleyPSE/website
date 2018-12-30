import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { ParaText } from '../../../components/TextStyles';
import { ExtLink } from '../../../components/LinkStyles';
import { Label } from '../../../components/inputs/Label';

const AdditionalInfo = () => (
  <Text className="pb-1">
    Please email the following items to the Directors of Recruitment at{' '}
    <ExtLink href="mailto:berkeleypse.recruiting@gmail.com">
      berkeleypse.recruiting@gmail.com
    </ExtLink>
    .<br />
    Note that your application will be considered INCOMPLETE until you do so.
    <ol>
      <ListItem>
        <Label>Resume</Label> [pdf format]
      </ListItem>
      <ListItem>
        <Label>Cover Letter</Label> [pdf format]. Address the following
        questions. [500 words or less]
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
        <Label>Unofficial Transcript</Label> with your name [pdf via{' '}
        <ExtLink href="https://calcentral.berkeley.edu/academics/academic_summary">
          CalCentral Academics
        </ExtLink>
        ]
      </ListItem>
      <ListItem>
        <Label>Additional Transcript</Label> [applicable only to Fall Freshmen and Transfer
        students]
      </ListItem>
      <ListItem>
        <Label>Class Schedule</Label> [Screenshot via CalCentral Schedule
        Planner]
      </ListItem>
      <ListItem>
        <Label>Recent Headshot</Label> [png or jpg format]
      </ListItem>
    </ol>
  </Text>
);

export default AdditionalInfo;

const Text = ParaText.withComponent('div').extend`
  font-size: 1rem;
  text-align: left;
`;

const ListItem = styled.li`
  margin: 0.75rem 0;
`;
