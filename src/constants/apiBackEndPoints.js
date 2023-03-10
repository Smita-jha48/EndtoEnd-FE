export const BACKEND_URL = 'http://localhost:3004/';

export const GET_COLLECTION = {
  url: 'api/collection/collections',
  method: 'GET',
};

export const GET_ALL_CONTENT = {
  url: 'api/content/allcontent',
  method: 'GET',

};

export const CREATE_CONTENT =  {
  url: 'api/content/save',
  method: 'POST',
};

export const GET_ENTRY_DATA = {
  url: 'api/entry/entries',
  method: 'POST',
};

export const ADD_FIELD = {
  url: 'api/content/addField',
  method: 'POST',
};

export const DELETE_FIELD = {
  url: 'api/content/deletefield',
  method: 'POST',
};

export const EDIT_FIELD = {
  url: 'api/content/editfield',
  method:'POST',

};