import { BASE_URL } from '../constants';
/**
 * Util function for API calls
 * @param {String} endpoint
 * @param {String} method
 * @param {Object | String} body
 * @returns
 */
export async function fetchAPI(endpoint, method = 'GET', body = null, content_type = 'application/json') {
  const apiUrl = BASE_URL;
  const url = `${apiUrl}${endpoint}`;
  const options = {
    method,
    cors: 'no-cors',
    credentials: 'include', // Include cookies in the request if needed
    body: body ? content_type === "multipart/form-data" ? body : JSON.stringify(body) : null,
  };
  if (!(content_type === "multipart/form-data")) {
    options.headers = {
      'Content-Type': content_type,
    };
  }
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
