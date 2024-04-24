import React, { useState } from "react";
import { merchantCards } from "../data";
import { title } from "../data";
import SwitchTables from './switchTables';

const MerchantCards = ({ selectedShop }) => {
    const [due, setDue] = useState('');

    const handleClick = (value) => {
        setDue(value);
    }

    const filteredCards = merchantCards.filter(card => card.val === selectedShop);

    return (
        <>
            {filteredCards.map((card) => (
                <div className="mcards" key={card.id}>
                    <div>{selectedShop}</div>
                    {title.map((prop,ind) => {
                        return (
                            <div className="merCards" key={ind}>
                                <div className="icon"></div>
                                <div className="content">
                                    <h2>{prop.header}</h2>
                                    <br />
                                    <h3 style={{ color: 'greenyellow' }}>{prop.value}</h3>
                                    <br />
                                    <h4 style={{ color: '#efaa2c' }}>27% last week</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
            <div>
                <button className="merchantbtn" onClick={() => handleClick('due')}>Due</button>
                <button className="merchantbtn" onClick={() => handleClick('active')}>Active</button>
                <button className="merchantbtn" onClick={() => handleClick('delivered')}>Delivered</button>
                <button className="merchantbtn" onClick={() => handleClick('onTheWay')}>On the way</button>
                <SwitchTables status={due} />
            </div>
        </>
    );
};

export default MerchantCards;
