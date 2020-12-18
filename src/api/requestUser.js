import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestUser = async () => {
  const response = await fetch(
    `${PATHS.SERVER_URI}${PATHS.USERS}/current_user`, {
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestUser;
