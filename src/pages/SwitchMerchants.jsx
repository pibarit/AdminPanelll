import { useState } from 'react';
import simg from '../imgs/shopIcon.png';
import MerchantCards from '../Components/MerchantCards';

const SwitchMerchants = () => {
    const [submitted, setSubmitted] = useState(false);
    const [shop, setShop] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(shop){
        setSubmitted(true);}
    };

    const handleChange = (e) => {
        setShop(e.target.value);
    };

    return (
        <div className="main">
        {submitted ? (
                <div>
                    <MerchantCards selectedShop={shop} />
                </div>
            ) : (
                <div>
                    <img src={simg} style={{ height: '380px', width: '380px' }} alt="" />
                    <form onSubmit={handleSubmit}>
                        <select id="shopSelect" value={shop} onChange={handleChange}>
                            <option value="" disabled>Select shops</option>
                            <option value="HotelSriAshokBhavan">Hotel Sri Ashok Bhavan</option>
                            <option value="NalandaGrill">Nalanda Grill</option>
                            <option value="KFC">KFC</option>
                        </select>
                        <button type='submit' style={{ backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '8px', height: "30px", width: '80px' }}>Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SwitchMerchants;
