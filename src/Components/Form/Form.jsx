import { useState } from "react";
import "./Form.css";

export default function Form() {

  const [assessment, setAssessment] = useState("");
  const [formInput, setFormInput] = useState({
    gross_monthly_income: 0,
    monthly_car_payment: 0,
    monthly_credit_card_payment: 0,
    student_loan_payment: 0,
    home_appraised_value: 0,
    est_monthly_mortgage_payment: 0,
    down_payment_amount: 0,
    credit_score: 0
  })

  function handleSubmit() {
    const apiPromise = fetch("https://api.readysetmortgage.co/readiness", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ formInput })
    })
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormInput(prevFormInput => ({
      ...prevFormInput,
      [name]: value
    }));
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Mortgage Eligibility Assessment</h3>
        <div className="form">
          <input name="gross_monthly_income" value={formInput.gross_monthly_income} type="text" placeholder="Gross monthly income" onChange={handleInputChange}/>
          <input name="monthly_car_payment" value={formInput.monthly_car_payment} type="text" placeholder="Monthly car payment" onChange={handleInputChange}/>
          <input name="monthly_credit_card_payment" value={formInput.monthly_credit_card_payment} type="text" placeholder="Monthly credit card payment" onChange={handleInputChange}/>
          <input name="student_loan_payment" value={formInput.student_loan_payment} type="text" placeholder="Student loan payment" onChange={handleInputChange}/>
          <input name="home_appraised_value" value={formInput.home_appraised_value} type="text" placeholder="Home appraised value" onChange={handleInputChange}/>
          <input name="est_monthly_mortgage_payment" value={formInput.est_monthly_mortgage_payment} type="text" placeholder="Estimated monthly mortgage payment" onChange={handleInputChange}/>
          <input name="down_payment_amount" value={formInput.down_payment_amount} type="text" placeholder="Down payment amount" onChange={handleInputChange}/>
          <input name="credit_score" value={formInput.credit_score} type="text" placeholder="Credit score" onChange={handleInputChange}/>
        </div>
        <button className="form-button">Submit</button>
      </form>
      {assessment ? assessment : null}
    </div>
  )
}
