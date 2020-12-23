import METHODS from '../constants/methods';

const { REACT_APP_SERVER_URL } = process.env;

const requestSignIn = async (userInfo, path) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}${path}`, {
    method: METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  return await response.json();
};

export default requestSignIn;
