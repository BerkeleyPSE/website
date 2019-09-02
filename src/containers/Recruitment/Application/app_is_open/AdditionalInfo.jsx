import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { ParaText } from '../../../components/TextStyles';
import { ExtLink } from '../../../components/LinkStyles';
import { Label } from '../../../components/inputs/Label';

const AdditionalInfo = () => (
  <Text className="pb-1">
    Please fill out the application{' '}
    <ExtLink href="https://forms.gle/bFUdTCwsmYjNvaut9" style={{"fontWeight": 700}}>LINKED HERE
    </ExtLink>
    . In addition, email the following items to the Directors of Recruitment at{' '}
    
    {/*Please email the following items to the Directors of Recruitment at{' '}*/}
    <ExtLink href="mailto:berkeleypse.recruiting@gmail.com">
      berkeleypse.recruiting@gmail.com
    </ExtLink>
    .
    <br/>
    Note that your application will be considered INCOMPLETE until you do so.
    <br/>
    <br/>
    Applications are due 9/5 at 12PM (NOON)
    {console.log("process.env.STAGING_APP_OPEN", process.env.STAGING_APP_OPEN)}
    {console.log("process.env.STAGING_APP_TESTING", process.env.STAGING_APP_TESTING)}
    <ol>
      <ListItem>
        <Label>Resume</Label> [pdf format]
      </ListItem>    
      <ListItem>
        <Label>Cover Letter</Label> [pdf format]. Please include the following
        information.
      </ListItem>
      <ol type="a">
        <ListItem>Why are you interested in business?</ListItem>
        <ListItem>Why do you want to join and what do you hope to gain from PSE?</ListItem>
        <ListItem>What can you bring or contribute to PSE? Highlight some of your strengths/experiences.</ListItem>
      </ol>
      <ListItem>
        <Label>Unofficial Transcript</Label> with your name [screenshot via{' '}
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
      <ListItem>
        <Label>Personality Screening results</Label> [pdf]. Upload your results from the <ExtLink href="https://www.123test.com/disc-personality-test/index.php">DISC personality test</ExtLink>
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
