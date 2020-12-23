import METHODS from '../constants/methods';

const { REACT_APP_SERVER_URL } = process.env;

const requestHitUpdate = symbol => {
  fetch(`${REACT_APP_SERVER_URL}/hits/${symbol}`, {
    mode: 'no-cors',
    method: METHODS.POST,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default requestHitUpdate;
