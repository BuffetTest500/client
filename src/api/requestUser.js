import METHODS from '../constants/methods';
import PATHS from '../constants/paths';
const { REACT_APP_SERVER_URL } = process.env;

const requestUser = async () => {
  const response = await fetch(
    `${REACT_APP_SERVER_URL}${PATHS.USERS}/current_user`, {
    mode: 'no-cors',
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestUser;
