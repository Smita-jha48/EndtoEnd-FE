export const BACKEND_URL = 'http://localhost:3004/';

export const GET_COLLECTION = {
  url: 'api/collection/collections',
  method: 'GET',
};

export const LOGIN_USER =  {
  url: 'api/auth/login',
  method: 'POST',
};

export const UPDATE_EVENT_DATA = (songId) => ({
  url: `api/events/${songId}`,
  method: 'patch',
});
