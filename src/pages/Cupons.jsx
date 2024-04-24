import React from 'react'
import { cuponcardData } from '../data';
import { promotionData } from '../data';
const Cupons = () => {
  return (
    <div className='main'>

        <h1>My Discounts</h1>
        <h3>List of provided customers</h3>
      <div className="cupons">
                    {cuponcardData.map((prop) => {
                        const { id, title, value ,text} = prop;
                        return (
                            <div className="cupon" key={id}>
                                <div className="content">
                                    <h2>{title}</h2>
                                    <br />
                                    <h3 >{value}</h3>
                                    <br />
                                    <h4 >{text}</h4>
                                </div>
                            </div>
                        );
                    })}
         </div>
         <h1>My Promotions</h1>
        <h3>List of available customers</h3>
        <div className="cupons">
                    {promotionData.map((prop) => {
                        const { id, title, text,link} = prop;
                        return (
                            <div className="cupon" key={id} style={{backgroundColor:'gray'}}>
                                <div>
                                    <h3>{title}</h3>
                                    <br />
                                    <p>{text}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quaerat asperiores voluptatem.</p>
                                    <br />
                                    <h4>{link}</h4>
                                </div>
                            </div>
                        );
                    })}
         </div>
    </div>
  )
}

export default Cupons
