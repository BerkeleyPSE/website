/*

'name' must match the fields here:
https://github.com/BerkeleyPSE/api/blob/master/models/Application.js

*/

export default [
  {
    name: 'name',
    label: 'Name',
    desc: 'First & Last Name',
    placeholder: 'Oski Bear',
    inputType: 'input',
    isRequired: true
  },

  {
    name: 'email',
    label: 'Berkeley Email',
    type: 'email',
    placeholder: 'oski@berkeley.edu',
    inputType: 'input',
    isRequired: true
  },

  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(123) 456-7890',
    inputType: 'input',
    isRequired: true
  },

  {
    name: 'year',
    label: 'Year',
    type: 'radio',
    options: ['Freshman', 'Sophomore', 'Junior', 'Junior Transfer', 'Senior'],
    inputType: 'radio',
    isRequired: true
  },

  {
    name: 'gpa',
    label: 'Cumulative GPA',
    desc:
      "First-semester Freshmen: use your weighted high school GPA on a scale of 1.0 to 5.0. Junior Transfers: use your previous college's GPA.",
    inputType: 'input',
    isRequired: true
  },

  {
    name: 'major',
    label: 'Major(s)',
    desc: 'Intended and/or Declared',
    placeholder: 'Business (intended) & Media Studies (declared)',
    inputType: 'input',
    isRequired: true
  },

  {
    name: 'minor',
    label: 'Minor(s)',
    placeholder: '',
    inputType: 'input',
    isRequired: false
  },

  {
    name: 'commitments',
    label: 'List your current commitments, both on- and off-campus.',
    desc:
      'Include the number of hours per week you plan to spend on each activity.',
    placeholder:
      'American Red Cross at Cal (3hrs/week) \nVolunteering at Community Center (2hrs/week)',
    inputType: 'textarea',
    isRequired: true
  },

  {
    name: 'freeWeekend',
    label: 'What would you do with a free weekend in Berkeley?',
    desc: 'Suggested word count: 150',
    placeholder: '',
    inputType: 'textarea',
    isRequired: true
  },

  {
    name: 'inviteOnly',
    label:
      'Are you available on September 1st, 2018 from 7pm-9pm for an Invite-Only Event?',
    inputType: 'radio',
    options: ['Yes', 'No'],
    isRequired: true
  },

  {
    name: 'interview1',
    label: 'Select your preferred time slot for an interview.',
    inputType: 'radio',
    options: [
      'Saturday (1/27) -- 9AM-12PM',
      'Saturday (1/27) -- 12PM-3PM',
      'Saturday (1/27) -- 3PM-6PM',
      'I cannot make any of these times. I will email berkeleypse.recruiting@gmail.com to reschedule.'
    ],
    isRequired: true
  },

  {
    name: 'interview2',
    label: 'Select your secondary time slot for an interview.',
    inputType: 'radio',
    options: [
      'Saturday (1/27) -- 9AM-12PM',
      'Saturday (1/27) -- 12PM-3PM',
      'Saturday (1/27) -- 3PM-6PM',
      'I cannot make any of these times.'
    ],
    isRequired: true
  },

  {
    name: 'pmtAvailability',
    label:
      'Are you available on Monday nights from 7-10pm for Prospective Member Training?',
    inputType: 'radio',
    options: ['Yes', 'No'],
    isRequired: true
  },

  {
    name: 'hear',
    label: 'How did you hear about us?',
    inputType: 'radio',
    options: [
      'Flyering on Sproul',
      'Friend',
      'PSE Brother',
      'Social Media',
      'Website',
      'Other'
    ],
    isRequired: true
  },

  {
    name: 'addInfo',
    label:
      'Is there any additional information you would like us to consider when reviewing your application?',
    type: 'text',
    placeholder: '',
    inputType: 'textarea',
    isRequired: false
  }
];
