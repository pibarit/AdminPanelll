import React, { useState } from "react";
import Modal from "../Components/Modal";
import ShippingTables from "../Components/ShippingTables";

const ShippingCharges = () => {
    const[modalOpen,setModalOpen]=useState(false);

    const [rows,setRows]=useState([
        {id:'1' ,shippingTime:'standard',deduction:'$10'},
        {id:'2' ,shippingTime:'express',deduction:'$10'},
        {id:'3' ,shippingTime:'overnight',deduction:'$10'}
    ])

    // const handleDelterow=(targetidx)=>{
    //     setRows(rows.filter((idx)=>idx!==targetidx));
    // }

    const handleSubmit=(newRow)=>{
      setRows([...rows,newRow])
    }

    const handleClearAll = () => {
      setRows([]);
  };

  return (
    <div className="main">
      <button onClick={()=>setModalOpen(true)}>ADD SHIPPING CHARGES</button>
      <button onClick={handleClearAll}>CLEAR ALL</button>
      <ShippingTables rows={rows} />
      {modalOpen &&<Modal closeModal={()=>{
        setModalOpen(false);
        }}
        onSubmit={handleSubmit}
        />}
    </div>
  );
};

export default ShippingCharges;
