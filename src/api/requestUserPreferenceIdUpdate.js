import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestUserPreferenceIdUpdate = async (user, info) => {
  const response = await fetch(
    `https://api.warrenbuffetttest500.site/${PATHS.USERS}/${user.uid}`, {
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
