import React from 'react'
import { useState } from "react";
import Modal from "../Components/LoyaltyModal";
import LoyaltyTables from "../Components/LoyaltyTables";
const LoyaltyProgram = () => {
      const[modalOpen,setModalOpen]=useState(false);
  
      const [rows,setRows]=useState([
          {id:'1' ,name:'setting 1',value:'$10'},
          {id:'2' ,name:'setting 2',value:'$10'},
          {id:'3' ,name:'setting 3',value:'$10'}
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
      <div className='main'>
        <button onClick={()=>setModalOpen(true)}>ADD SHIPPING CHARGES</button>
        <button onClick={handleClearAll}>CLEAR ALL</button>
        <LoyaltyTables rows={rows} />
        {modalOpen &&<Modal closeModal={()=>{
          setModalOpen(false);
          }}
          onSubmit={handleSubmit}
          />}
      </div>
    );
  };
  

export default LoyaltyProgram
