interface IInputBox {
  label: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({ label, id, name, onChange }: IInputBox) {
  return (
    <div className="flex">
      <label htmlFor={id} className="mr-5">
        {label}
      </label>
      <input
        type="number"
        id={id}
        name={name}
        onChange={onChange}
        className="border-solid border border-black outline-none pl-0.5"
      />
    </div>
  );
}

export default InputBox;
