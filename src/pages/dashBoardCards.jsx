import React from "react";
import { dashBoardCard } from "../data";
import Tables from "../Components/mainTables";

function DashBoardCard() {
    return (
        <div className="main">
            <div className="mcards">
                {dashBoardCard.map((card, index) => (
                    <div className="dBCard" key={index}>
                        <div className="icon">{card.icon}</div>
                        <h2>{card.title}</h2>
                        <h3>{card.value}</h3>
                    </div>
                ))}
                <Tables/>
            </div>
        </div>
    );
}

export default DashBoardCard;
