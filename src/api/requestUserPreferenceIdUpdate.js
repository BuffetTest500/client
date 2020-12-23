import METHODS from '../constants/methods';
import PATHS from '../constants/paths';
const { REACT_APP_SERVER_URL } = process.env;

const requestUserPreferenceIdUpdate = async (user, info) => {
  const response = await fetch(
    `${REACT_APP_SERVER_URL}${PATHS.USERS}/${user.uid}`, {
    mode: 'no-cors',
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
