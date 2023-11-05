/* eslint-disable react/prop-types */
import { Progressbar } from "../"
import "./Assessment.css";

export default function Assessment({ output }) {

  const { readiness, breakdown, notices } = output;
  const { credit, dti, fedti, ltv } = breakdown;
  const messages = notices.map(notice => <p key={notice}>{notice}</p>)

  // const scores = {
  //   credit: {

  //   }
  // }

  return (
    <>
      <h2>{readiness == "N" ? "You are not likely eligible for the mortgage." : readiness == "M" ? "You might be eligible for the mortgage." : "You are very likely eligible for the mortgage."}</h2>
      {messages}
      <div className="score-container"><h5>Credit:   {credit.individual_readiness == "Y" ? <Progressbar value={85} /> : <Progressbar value={59} />  }</h5></div>
      <div className="score-container"><h5>DTI:   {dti.individual_readiness == "Y" ? <Progressbar value={85} /> : <Progressbar value={59} />  }</h5></div>
      <div className="score-container"><h5>FEDTI:   {fedti.individual_readiness == "Y" ? <Progressbar value={85} /> : <Progressbar value={59} />  }</h5></div>
      <div className="score-container"><h5>LTV:   {ltv.individual_readiness == "Y" ? <Progressbar value={85} /> : <Progressbar value={59} />  }</h5></div>
    </>
  )
}
