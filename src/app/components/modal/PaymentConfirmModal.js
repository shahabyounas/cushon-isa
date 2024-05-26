import { useState } from "react";

function PaymentConfirmModal(props) {

  return (
    <div className="p-2">
      <h3> Payment Confirmation </h3>
      <label htmlFor="amount" className="form-label">
        Please confirm, your desired Investment  
      </label>
      <p>{props.amount}</p>
      <input            
        type="number"
        className="form-control"
        id="cAmount"
        name="cAmount"
        placeholder={`Re-enter amount ${props.amount}`}
      />
    </div>
  );
}

export default PaymentConfirmModal;
