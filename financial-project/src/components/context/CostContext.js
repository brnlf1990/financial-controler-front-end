import React, { useState, useEffect, context, Children } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import costsApi from "../../utils/costsApi"
export const CostActivitiesContex = context();

export const costActivitiesContexProvider = ({ children }) => {
  const [costList, setCostList] = useState([]);

  useEffect(() => {
    costsApi.getAllCosts()
    .then((data) => {
      setCostList(data)
  })
  .catch((error) => {
    return error;
  });
  }, [])

  return (
  <CostActivitiesContex.Provider value={costList}>
    {children}
  </CostActivitiesContex.Provider>)
};
