import React from 'react';

// node modules
import { connect } from 'react-redux';
import { Field } from 'redux-form';

// components
import { ColumnContainer } from '../../../components/ContainerStyles';
import Form from '../../../components/Form';
import AdditionalInfo from './AdditionalInfo';
import SubmitButton from '../../../components/inputs/SubmitButton';
import Input from '../../../components/inputs/Input';
import TextArea from '../../../components/inputs/TextArea';
import Radio from '../../../components/inputs/Radio';

// actions
import { onSubmitApplication } from '../../../../actions/app';

const ApplicationForm = ({ onSubmitApplication }) => (
  <ColumnContainer className="m-1" ai="baseline">
    <Form formName="application" onSubmit={onSubmitApplication}>
      <Field
        name="name"
        component={Input}
        label="Name"
        desc="First &amp; Last Name"
        placeholder="Oski Bear"
        required
      />

      <Field
        name="phone"
        component={Input}
        label="Phone"
        type="tel"
        placeholder="(123) 456-7890"
        required
      />

      <Field
        name="email"
        component={Input}
        label="Berkeley Email"
        type="email"
        placeholder="oski@berkeley.edu"
        required
      />

      <Radio
        name="year"
        label="Year"
        options={[
          'Freshman',
          'Sophomore',
          'Junior',
          'Junior Transfer',
          'Senior'
        ]}
        required
      />

      <Field
        name="major"
        component={Input}
        label="Major(s)"
        placeholder="Business (intended) &amp; Media Studies (declared)"
        required
      />

      <Field
        name="minor"
        component={Input}
        label="Minor(s)"
        placeholder="Forestry &amp; Natural Resources"
      />

      {/*<Field
        name="gpa"
        component={Input}
        label="Cumulative GPA"
        desc="First-semester Freshmen: use your weighted high school GPA on a scale of 1.0 to 5.0. Junior Transfers: use your previous college's GPA."
        placeholder="4.0"
        required
      />*/}
      
      <Field
        name="commitments"
        component={TextArea}
        label="List current commitments (on and off campus)."
        desc="Include the number of hours a week spent on each commitment."
        required
      />

      {/*<Field
        name="interest"
        component={TextArea}
        label="Why are you interested in business?"
        desc="Max. 200 words"
        required
      />*/}

      <Field
        name="admire"
        component={TextArea}
        label="What is a company you admire, identify a weakness, and how would you improve it?"
        desc="Max. 200 words"
        required
      />

      <Radio
        name="inviteOnly"
        label="Are you available on Friday, September 6th, 2019, from 7pm-9pm for an Invite-Only Event?"
        options={['Yes', 'No']}
        required
      />

      <Radio
        name="interview1"
        label="Please select your first preferred time slot for an interview."
        desc="Interviews will be no longer than 45 minutes. If you are selected, emails will be sent out with room assignments and times."
        options={[
          'Saturday (9/7) -- 8AM-12PM',
          'Saturday (9/7) -- 12PM-3PM',
          'Saturday (9/7) -- 3PM-6PM',
          'I cannot make any of these times. I will email berkeleypse.recruiting@gmail.com to reschedule.'
        ]}
        required
      />

      <Radio
        name="interview2"
        label="Please select your second preferred time slot for an interview."
        options={[
          'Saturday (9/7) -- 8AM-12PM',
          'Saturday (9/7) -- 12PM-3PM',
          'Saturday (9/7) -- 3PM-6PM',
          'I cannot make any of these times. I will email berkeleypse.recruiting@gmail.com to reschedule.'
        ]}
        required
      />

      <Radio
        name="pmtAvailability"
        label="Are you available every Monday night from 7-10pm for Prospective Member Training?"
        options={['Yes', 'No']}
        required
      />

      <Radio
        name="hear"
        label="How did you hear about us?"
        options={[
          'Flyering on Sproul',
          'Friend',
          'PSE Brother',
          'Social Media',
          'Website',
          'Other'
        ]}
        required
      />

      <Field
        name="gradesInfo"
        component={TextArea}
        label="Disclose any deficiencies in your transcript. Please be as specific as possible."
        desc="Your response will not result in adverse treatment against your application. This is an opportunity to provide context to your transcript."
      />

      <Field
        name="addInfo"
        component={TextArea}
        label="Is there any additional information you would like us to consider when reviewing your application?"
      />

      <AdditionalInfo />

      <SubmitButton />
    </Form>
  </ColumnContainer>
);

const mapDispatchToProps = dispatch => ({
  onSubmitApplication: (values, formName) =>
    dispatch(onSubmitApplication(values, formName))
});

export default connect(
  null,
  mapDispatchToProps
)(ApplicationForm);
