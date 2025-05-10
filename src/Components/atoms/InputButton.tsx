interface IButtonProps {
  buttonName: string;
  backgroundColor: string;
}

export default function InputButton(props: IButtonProps) {
  return (
    <div>
      <button
        style={{
          marginTop: "3em",
          width: "100%",
          padding: "0.7em",
          borderRadius: "5px",
          cursor: "pointer",
          fontFamily: "Poppins, sans-serif",
          color: "white",
          background: props.backgroundColor,
          border: "none"
        }}
      >
        {props.buttonName}
      </button>
    </div>
  );
}
