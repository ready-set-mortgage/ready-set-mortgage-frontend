import { Assessment } from "../"
import { useState } from "react";
import "./Form.css";

export default function Form() {

  const [formOutput, setFormOutput] = useState({});
  const [formInput, setFormInput] = useState({
    gross_monthly_income: "",
    monthly_car_payment: "",
    monthly_credit_card_payment: "",
    student_loan_payment: "",
    home_appraised_value: "",
    est_monthly_mortgage_payment: "",
    down_payment_amount: "",
    credit_score: ""
  });
  const [aiOutput, setAiOutput] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    const apiPromise = fetch("https://api.readysetmortgage.co/readiness", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formInput })
    })

    const responseApi = await apiPromise;

    // const apiAIPromise = fetch("https://api.readysetmortgage.co/ai_feedback", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ ...formInput })
    // })

    // const responseApiAI = await apiAIPromise;

    if (responseApi.ok) {
      const responseApiJSON = await responseApi.json();
      setFormOutput(responseApiJSON);
      console.log(responseApiJSON);
    } else {
      console.error(responseApi);
    }

    // if (responseApiAI.ok) {
    //   const responseApiAIJSON = await responseApiAI.json();
    //   setAiOutput(responseApiAIJSON);
    //   console.log(responseApiAIJSON);
    // } else {
    //   console.error(responseApiAI);
    // }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormInput(prevFormInput => ({
      ...prevFormInput,
      [name]: value
    }));
  }

  return (
    <>
      {Object.keys(formOutput).length > 0 ?
        <div className="assessment-container">
          <Assessment output={formOutput} />
          {/* <button onClick={() => setFormOutput({})} className="assess-again-button">Assess Again</button> */}
        </div> :
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
        </div>}
    </>
  )
}
