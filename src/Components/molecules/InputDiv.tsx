import InputText from "../atoms/InputText";

export default function InputDiv() {
  return (
    <div>
      <InputText labelFor='Full Name' textLabel='Full Name' placeholder='Insert your full name' inputType='Text' />
      <InputText labelFor='E-mail' textLabel='E-mail' placeholder='johndoe@sumitomo.com' inputType='Email' />
      <InputText labelFor='Feedback' textLabel='Feedback' placeholder='Insert your feedback' inputType='Text' />
    </div>
  )
}
