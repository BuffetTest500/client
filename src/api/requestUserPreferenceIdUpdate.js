import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestUserPreferenceIdUpdate = async (user, info) => {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}${PATHS.USERS}/${user.uid}`, {
    method: METHODS.PUT,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(info),
  });

  return await response.json();
};

export default requestUserPreferenceIdUpdate;
