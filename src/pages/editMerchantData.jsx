import React from "react"

function EditMerchantData() {

    return(
     <>
            {/* <div className="main"> */}

        
            <form className="merform">
                <div className="merchantedit">                
                <h3 style={{ color: '#83bc2d' }}>Merchants Information</h3>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder="Full name" />
                <label htmlFor="email;">Email</label>
                <input type="email" id="email" placeholder="email" />
                <label htmlFor="contactNumber">Phone Number</label>
                <input type="tel" id="contactNumber" placeholder="Phone Number" />
                </div>

                <br /><br />
                <div className="merchantedit">
                <h3 style={{ color: '#83bc2d' }}>Store Information</h3>
                <label htmlFor="storeName">Store Name</label>
                <input type="text" id="storeName" placeholder="Store name" />
                <label htmlFor="contactemail;">Contact Email</label>
                <input type="email" id="contactemail" placeholder="email" />
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="tel" id="contactNumber" placeholder="Contact Number" />
                <label htmlFor="contactPerson">Contact Person</label>
                <input type="text" id='contactperson'placeholder="Contact Person" />
                <label htmlFor="address">address</label>
                <input type="text" />
                <label htmlFor="country">country</label>
                <input type="text" />
                <label htmlFor="state">state</label>
                <input type="text" />
                <label htmlFor="city">city</label>
                <input type="text" />
                <label htmlFor="timeZone">timeZone</label>
                <input type="text" />
                <label htmlFor="zipCode">zipCode</label>
                <input type="text" />
                <label htmlFor="operatingZone">operating Zone</label>
                <input type="text" />
                <label htmlFor="prepTime">preparation Time/Delivered Time</label>
                <input type="text" />
                <label htmlFor="Ing">Ing</label>
                <input type="text" />
                <label htmlFor="lat">Lat</label>
                <input type="text" />
                <label htmlFor="rating">rating</label>
                <input type="text" />
                <label htmlFor="operationType">operation Type *</label>
                <div style={{display:'flex'}}>
                <label htmlFor="operationType" className="radio">All</label><input type="radio" name="operationType"/>
                <label htmlFor=""className="radio">Pickup</label><input name="operationType" type="radio" />     
                <label htmlFor=""className="radio">delivery</label><input name="operationType" type="radio" />   
                </div>     
                <label htmlFor="aboutUs">About Us</label>
                <input type="textArea" />
                <label htmlFor="uploadBanner">Upload Banner *</label>
                <input type="file" className="file" />
            </div>
            </form>
            {/* </div> */}
        </>
    );

}
export default EditMerchantData;