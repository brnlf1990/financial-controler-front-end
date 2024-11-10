export const BASE_URL = 'http://localhost:3001';

export const getTotalRevenueValue = ({}) => {
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
    .catch((error) => {
      return error;
    });
};

export const getAllRevenue = (userId) => {
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

export const addRevenueValue = ({ description, value, category }) => {
  return fetch(`${BASE_URL}/costs`, {
    method: 'POST',
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

export const editRevenuetValue = (
  { description, category, value },
  valueId
) => {
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

export const deleteRevenueValue = (valueId) => {
    return fetch(`${BASE_URL}/${valueId}`,{
        method:"DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },        
        }
    )
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
}