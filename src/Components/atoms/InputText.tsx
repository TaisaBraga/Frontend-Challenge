/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from "@mui/material/TextField";
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&family=Poppins&display=swap" rel="stylesheet"></link>

export interface IInputTextProps {
  placeholder?: string | "";
  textLabel?: string | "";
  labelFor?: string | "";
  inputType?: string | "";
  register?: any;
}

export default function InputText(props: IInputTextProps) {

  
  return (
    <div style={{display: "flex", flexDirection: "column", fontFamily: "Poppins, sans-serif"}}>
      <label htmlFor={props?.labelFor} style={{marginBottom: "0.5em", marginTop: "1em"}}>{props.textLabel}</label>
      <TextField
        variant="outlined"
        placeholder={props.placeholder}
        type={props?.inputType}
        {...props?.register}
      />
    </div>
  );
}
