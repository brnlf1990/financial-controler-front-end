import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import "./CostList.css"

function CostList() {
    return (
            <ul className="cost_list">
                <li className="cost_list__items"></li>
            </ul>
      );
}

export default CostList;