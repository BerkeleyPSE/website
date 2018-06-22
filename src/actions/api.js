export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://api.berkeleypse.org'
    : 'http://localhost:8000';

export default {
  // brother endpoints
  GET_BROTHERS: `${BASE_URL}/brothers/all`,
  GET_EXECUTIVES: `${BASE_URL}/brothers/executives`,
  GET_BROTHER_BY_ID: `${BASE_URL}/brothers/id`,
  GET_BROTHER_BY_KEY: `${BASE_URL}/brothers/key`,
  GET_FILTERED_BROTHERS: `${BASE_URL}/brothers/filter`,

  // fulltime endpoints
  GET_FULLTIMES: `${BASE_URL}/fulltimes/all`,
  GET_FILTERED_FULLTIMES: `${BASE_URL}/fulltimes/filter`,

  // internship endpoints
  GET_INTERNSHIPS: `${BASE_URL}/internships`,
  GET_FILTERED_INTERNSHIPS: `${BASE_URL}/internships/filter`
};
