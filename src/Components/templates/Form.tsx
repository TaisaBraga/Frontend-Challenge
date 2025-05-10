import "./Form.css"
import InputButton from "../atoms/InputButton";
import InputDiv from "../molecules/InputDiv";

export default function Form() {
  return (
    <div id="form" style={{fontFamily: "Poppins, sans-serif"}}>
        <h1>Share your feedback</h1>
        <p style={{color: "grey", marginTop: "4px", marginBottom: "10px"}}>We would love to hear your thoughts.</p>
        <InputDiv />
        <InputButton buttonName="Share feedback" backgroundColor="#CC0000" />
    </div>
  )
}
