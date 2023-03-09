export const BACKEND_URL = 'http://localhost:8080/';

export const CREATE_USER = {
  url: 'api/auth/register',
  method: 'POST',
};

export const LOGIN_USER =  {
  url: 'api/auth/login',
  method: 'POST',
};

export const UPDATE_EVENT_DATA = (songId) => ({
  url: `api/events/${songId}`,
  method: 'patch',
});
