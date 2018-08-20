export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://api.berkeleypse.org'
    : 'http://localhost:8000';

// brother endpoints
export const API_GET_BROTHERS = `${BASE_URL}/brothers/all`;
export const API_GET_EXECUTIVES = `${BASE_URL}/brothers/executives`;
export const API_GET_BROTHER_BY_ID = `${BASE_URL}/brothers/id`;
export const API_GET_BROTHER_BY_KEY = `${BASE_URL}/brothers/key`;
export const API_GET_FILTERED_BROTHERS = `${BASE_URL}/brothers/filter`;

// fulltime endpoints
export const API_GET_FULLTIMES = `${BASE_URL}/fulltimes/all`;
export const API_GET_FILTERED_FULLTIMES = `${BASE_URL}/fulltimes/filter`;

// internship endpoints
export const API_GET_INTERNSHIPS = `${BASE_URL}/internships`;
export const API_GET_FILTERED_INTERNSHIPS = `${BASE_URL}/internships/filter`;

// form endpoints
export const API_POST_REGFORM = `${BASE_URL}/regforms/add`;
export const API_POST_COFFEE_CHAT_FORM = `${BASE_URL}/coffee-chat/add`;
export const API_POST_APPLICATION = `${BASE_URL}/applications/add`;
