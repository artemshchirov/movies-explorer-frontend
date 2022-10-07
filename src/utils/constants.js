const VALIDATION_PARAMS = {
  REGEX: {
    NAME: /^[a-zа-яё-\s]+$/i,
    EMAIL: /[^@\s]+@[^@\s]+\.[^@\s]+/i,
  },
  MESSAGES: {
    NAME: 'Имя может состоять только из букв, пробелов и "-"',
    EMAIL: 'Неправильный формат e-mail',
  },
};

const VALIDATION_CONFIGS = {
  USER_DATA: {
    INPUTS: ['name', 'email'],
    REGEX: {
      name: VALIDATION_PARAMS.REGEX.NAME,
      email: VALIDATION_PARAMS.REGEX.EMAIL,
    },
    MESSAGES: {
      name: VALIDATION_PARAMS.MESSAGES.NAME,
      email: VALIDATION_PARAMS.MESSAGES.EMAIL,
    },
  },

  LOGIN: {
    INPUTS: ['email'],
    REGEX: {
      email: VALIDATION_PARAMS.REGEX.EMAIL,
    },
    MESSAGES: {
      email: VALIDATION_PARAMS.MESSAGES.EMAIL,
    },
  },
};

const MESSAGES = {
  NOT_FOUND: 'Ничего не найдено',
  ERROR:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
};

const ALERT_MESSAGES = {
  SUCCESSFULLY: {
    UPDATE_PROFILE: 'Данные профиля успешно обновлены!',
  },

  ERROR: {
    UPDATE_PROFILE: 'Не удалось обновить данные профиля!',
    DELETE_FILM: 'Не удалось удалить фильм!',
    ADD_FILM: 'Не удалось добавить фильм!',
    GET_USER: 'Произошла ошибка!',
  },
};

const PAGES = {
  MOVIES: '/movies',
  SAVED_MOVIES: '/saved-movies',
  PROFILE: '/profile',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  MAIN: '/',
};

const BASE_URL = 'https://api.nomoreparties.co';

const SHORT_DURATION = 40;

export {
  MESSAGES,
  PAGES,
  BASE_URL,
  SHORT_DURATION,
  ALERT_MESSAGES,
  VALIDATION_PARAMS,
  VALIDATION_CONFIGS,
};
