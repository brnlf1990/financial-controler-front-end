export const BASE_URL = 'http://localhost:3001';

export const getCurrentUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Authorization" : `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return response.json().then((data) => {

        return data;
      });
    }
  });
};

export const updateUserProfile = (userId, { name, about, avatar }) => {
  return fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({ name, about, avatar }),
    
  })
    .then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          return data;
        });
      }
    })
    .catch((error) => {
      return error;
    });
};
