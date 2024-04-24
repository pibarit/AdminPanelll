import { NavLink } from "react-router-dom";

function MerchantOnBoarding() {
  return (
    <>
      <div className="main">
      <div className="allbtn">
        <button className="merchantbtn">
          <NavLink to="/Merchants/MerchantOnboarding/EditMerchantData">
            Store Details
          </NavLink>
        </button>
        <button className="merchantbtn">
          <NavLink to="/Merchants/MerchantOnboarding/MerchantTimeSetting">
            Store time settings
          </NavLink>
        </button>
        <button className="merchantbtn">
          <NavLink to="/Merchants/MerchantOnboarding/Commission">
            Commission Settings
          </NavLink>
        </button>
        <button className="merchantbtn">
          <NavLink to="/Merchants/MerchantOnboarding/MTags">Tags Settings</NavLink>
        </button>
        <button className="merchantbtn">
          <NavLink to="/Merchants/MerchantOnboarding/Mcategory">
            Category Settings
          </NavLink>
        </button>
      </div>
      </div>
    </>
  );
}

export default MerchantOnBoarding;
