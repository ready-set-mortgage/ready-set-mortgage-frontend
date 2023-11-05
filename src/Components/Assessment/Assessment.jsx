/* eslint-disable react/prop-types */
import "./Assessment.css";

export default function Assessment({ output }) {

  const { readiness, breakdown, notices } = output;
  const { credit, dti, fedti, ltv } = breakdown;
  const messages = notices.map(notice => <p key={notice}>{notice}</p>)

  return (
    <>
      <h2>{readiness}</h2>
      {messages}
      {credit.individual_readiness}
      {dti.individual_readiness}
      {fedti.individual_readiness}
      {ltv.individual_readiness}
    </>
  )
}
