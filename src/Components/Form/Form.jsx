import "./Form.css";

export default function Form() {

  function handleSubmit() {
    console.log("form submitted")
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Apply to Buy a Home</h3>
        <div className="form">
          <input type="text" placeholder="info 1" />
          <input type="text" placeholder="info 2" />
          <input type="text" placeholder="info 3" />
          <input type="text" placeholder="info 4" />
        </div>
        <button className="form-button">Submit</button>
      </form>
    </div>
  )
}
