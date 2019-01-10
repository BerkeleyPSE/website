import {
  ABOUT_PATH,
  CAREERS_PATH,
  RECRUITMENT_PATH,
  APPLICATION_PATH,
  BROTHERS_PATH
} from '../Navbar/navbar_constants';

const IMG_URL = `http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/home`;

export default [
  {
    imgSrc: `${IMG_URL}/golden_gate`,
    message: "UC Berkeley's Marketing & Business Fraternity",
    text: 'Apply Now',
    link: APPLICATION_PATH
  },
  {
    imgSrc: `${IMG_URL}/banquet_fall18`,
    message: 'Who We Are',
    text: 'Meet the Chapter',
    link: BROTHERS_PATH
  },
  {
    imgSrc: `${IMG_URL}/meet_the_chapter`,
    message: 'Where We Are',
    text: 'Join Us',
    link: RECRUITMENT_PATH
  },
  {
    imgSrc: `${IMG_URL}/pse_banquet`,
    message: 'What We Came From',
    text: 'Our History',
    link: ABOUT_PATH
  },
  {
    imgSrc: `${IMG_URL}/alumni`,
    message: "Where We're Going",
    text: 'Our Careers',
    link: CAREERS_PATH
  },
  {
    imgSrc: `${IMG_URL}/pse_zc`,
    message: "UC Berkeley's Marketing & Business Fraternity",
    text: 'Apply Now',
    link: APPLICATION_PATH
  }
];
