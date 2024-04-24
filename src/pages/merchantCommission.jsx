function Commission(){

    return(
        // <div className="main">
             <form action="" className="main">
            <label htmlFor="payoutType">Payout Type</label>
            <br />
            <br />
            <input type="radio" name="payout" id="fixed"/><label className="radio"htmlFor="fixed">Fixed Amount per order</label>
            <br />
            <br />
            <input type="radio" name="payout" id="percentage"/><label className="radio" htmlFor="percentage">Percentage</label>
            <br/>
            <input type="text" placeholder="enter value"/>
            <button>save</button>
        </form> 
        // </div>
      
    )

}
export default Commission;