class Api {
  constructor({ baseUrl, headers }) {
    this._address = baseUrl;
    this._token = headers.authorization;
  }
}

const api = new Api({
  baseUrl: '#',
  headers: {
    authorization: localStorage.getItem('jwt'),
    'Content-Type': 'application/json',
  },
});

export default api;
