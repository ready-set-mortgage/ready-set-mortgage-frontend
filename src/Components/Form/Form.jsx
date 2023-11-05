import "./Form.css";

export default function Form() {

  function handleSubmit() {
    console.log("form submitted")
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Mortgage Eligibility Assessment</h3>
        <div className="form">
          <input name="gross_monthly_income" type="text" placeholder="Gross monthly income" />
          <input name="monthly_car_payment" type="text" placeholder="Monthly car payment" />
          <input name="monthly_credit_card_payment" type="text" placeholder="Monthly credit card payment" />
          <input name="student_loan_payment" type="text" placeholder="Student loan payment" />
          <input name="home_appraised_value" type="text" placeholder="Home appraised value" />
          <input name="est_monthly_mortgage_payment" type="text" placeholder="Estimated monthly mortgage payment" />
          <input name="down_payment_amount" type="text" placeholder="Down payment amount" />
          <input name="credit_score" type="text" placeholder="Credit score" />
        </div>
        <button className="form-button">Submit</button>
      </form>
    </div>
  )
}
