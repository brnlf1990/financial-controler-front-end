export const BASE_URL = 'http://localhost:3001';

export const getTotalCostValue = ({}) => {
  return fetch(`${BASE_URL}/costs/total`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          return data;
        });
      }
    })
  
};

export const getAllCosts = (userId) => {
  return fetch(`${BASE_URL}/costs`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify({ userId: userId }),
    },
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

export const addCostValue = ({ description, value, category }) => {
  return fetch(`${BASE_URL}/costs`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description: description,
      value: value,
      category: category,
    }),
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

export const editCostValue = ({ description, category, value }, valueId) => {
  return fetch(`${BASE_URL}/${valueId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description: description,
      value: value,
      category: category,
    }),
  })
    .then((response) => {
      if (response) {
        return response.json().then((data) => {
          return data;
        });
      }
    })
    .catch((error) => {
      return error;
    });
};

export const deleteCostValue = (valueId) => {
  return fetch(`${BASE_URL}/costs/${valueId}`, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },      
  })
  .then((response) => {
    if (response.ok){
        return response.json().then((data) => {
            return data;
        })
    }
  })
  .catch((error) => {
    return error;
  })
};
