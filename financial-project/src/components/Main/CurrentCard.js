import React from "react";
import "./CurrentCard.css"

function CurrentCard({type, title, value, children}) {
    return ( 
        <div className={`current_card ${type}`}>
            <div className={`current_card__container ${type}`}>
                <h3 className={"current_card__title"}>{title}</h3>
                <p className={"current_card__value"}>{value}</p>
                {children}
            </div>
        </div>
     );
}

export default CurrentCard;
