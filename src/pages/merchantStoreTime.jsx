import { useState } from "react";

function MerchantTimeSetting() {
    // Function to generate options for hours
    const generateOptions = () => {
        const options = [];
        for (let hour = 0; hour < 24; hour++) {
            const formattedHour = hour.toString().padStart(2, '0'); // Pad single digit hours with a leading zero
            options.push(<option key={formattedHour} value={formattedHour}>{formattedHour}:00</option>);
        }
        return options;
    };
    const[toggleOn,setToogleOn]=useState(false)
    const day=['mon','tue','wed','thu','fri','sat','sun'];
        return (
            <div className="main">
            <div className="timesetting">
                {/* <div className="switchbtn"> */}
                <button onClick={()=>setToogleOn(!toggleOn)} className="switch">{toggleOn? 'off':'on' }</button>
                {/* </div> */}
                {!toggleOn ?
            (<form action=""><label htmlFor="">Open Hours</label>
            <select name="" id="">
                {generateOptions()}
            </select>
            <label htmlFor="">to</label>
            <select>
                {generateOptions()}
            </select>
            <br /><br />
            {day.map((prop)=>{
            return(
            <><input type="checkbox"id='week' value={prop}/><label htmlFor="week"className="day">{prop}</label><br /><br /></>
            );
            })}
            <button className="switch">Save</button>
            </form>)
            :
            <button className="switch">Save</button>}
            </div>
            </div>
            );
    

   
}

export default MerchantTimeSetting;
