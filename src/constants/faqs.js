const FAQ_INFO = [
  {
    question: 'What makes PSE different from other organizations?',
    answer: [
      {
        type: 'text',
        content:
          'PSE differentiates itself from other business fraternities and organizations both in ' +
          'its learning philosophy and specialization. We prepare our brothers with the knowledge ' +
          "and skills necessary to succeed in today's business world, but we also go further to " +
          'provide opportunities to utilize and hone these skills within projects across various ' +
          'industries. PSE hosts networking opportunities and corporate infosessions with professionals ' +
          'and alumni, and puts its members in positions to become their best possible professional ' +
          'selves. But, PSE provides far more than professional development - as a fraternity, we ' +
          'are an intimate, close-knit community where brothers can build strong personal relationships, ' +
          'and lasting friendships.'
      }
    ]
  },
  {
    question: 'Are all recruitment events mandatory?',
    answer: [
      {
        type: 'text',
        content:
          'You must attend at least one of the three recruitment events (Meet the Chapter, Social Mixer, ' +
          'Case Workshop) to be considered for an interview. The greater the number of events you attend, ' +
          'the more chances you have to meet the brothers and vice versa, and the better we will be able ' +
          'to learn about you.'
      }
    ]
  },
  {
    question: 'What if I can’t attend a recruitment event?',
    answer: [
      {
        type: 'text',
        content:
          'Recruitment events are designed for you to meet our brothers and familiarize yourself with Pi ' +
          'Sigma Epsilon. If you can’t make a recruitment event and would like to chat personally with ' +
          'one of our brothers instead, you’re welcome to indicate your availability for a coffee chat ' +
          'and one of our brothers will reach out to you. '
      },
      {
        type: 'int-link',
        content: 'Sign up here',
        to: '/coffee'
      },
      {
        type: 'text',
        content: '!'
      }
    ]
  },
  {
    question: 'Is there a GPA minimum?',
    answer: [
      {
        type: 'text',
        content: 'We have a GPA minimum of 3.0.'
      }
    ]
  },
  {
    question: 'What is the time commitment for a prospective member?',
    answer: [
      {
        type: 'text',
        content:
          'The time commitment for a prospective member (PM) will incrementally change as the process ' +
          'continues. PMs are expected to attend a 3 hour weekly PM training on Monday nights in ' +
          'addition to contributing 5-10 hours per week for the first few weeks, 10-20 the next few, ' +
          'and 20-30 in the final weeks of training.'
      }
    ]
  },
  {
    question: 'Is there an age/year ceiling?',
    answer: [
      {
        type: 'text',
        content:
          'We do not have an age requirement, but you must be an undergraduate student with at least 3 ' +
          'semesters remaining (including your semester as a prospective member). First-semester ' +
          'freshmen are welcome to apply!'
      }
    ]
  },
  {
    question: "I'm not a Business or Economics major. Can I still join?",
    answer: [
      {
        type: 'text',
        content:
          'Of course! We love diversity. Close to half of our brothers are not majoring in Business or ' +
          "Economics. The brother who built this website is a Computer Science major. You're more than welcome to join."
      }
    ]
  },
  {
    question: 'How many PMs does PSE accept each semester?',
    answer: [
      {
        type: 'text',
        content:
          'It depends. If there are 20 recruits who are qualified, cultural fits, we will accept 20. ' +
          "If there is only one, we'll take him/her. On average, however, we tend to accept around " +
          '12 recruits per semester.'
      }
    ]
  },
  {
    question: 'Why do you not use terms such as "rush" or "pledge"?',
    answer: [
      {
        type: 'text',
        content:
          'PSE is a professional fraternity, and thus we choose to use terminology that reflects our ' +
          'professional attitude, character, and purpose. Terms such as "recruitment," "prospective member," ' +
          '"prospective member training," and "PM Trainer," are used in lieu of "rush," "pledge," ' +
          '"pledge process," and "pledgemaster," in any verbal or written communication involving ' +
          'participation or membership in Pi Sigma Epsilon.'
      }
    ]
  },
  {
    question: 'Will I be hazed as a prospective member?',
    answer: [
      {
        type: 'text',
        content:
          'Absolutely not. PSE respects the time and health of its prospective members. We actively encourage ' +
          'our PMs to raise any concerns to their PM trainers throughout the training process. PMs should ' +
          'expect to be challenged but should not sacrifice any aspect of health for PSE.'
      }
    ]
  },
  {
    question: 'Where can I ask more questions?',
    answer: [
      {
        type: 'text',
        content: 'Please direct all questions to '
      },
      {
        type: 'ext-link',
        content: 'berkeleypse.recruiting@gmail.com',
        href: 'mailto:berkeleypse.recruiting@gmail.com'
      },
      {
        type: 'text',
        content: '.'
      }
    ]
  }
];

export default FAQ_INFO;
