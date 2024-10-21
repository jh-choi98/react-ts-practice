interface IResultBox {
  label: string;
  value: string;
}

function ResultBox({ label, value }: IResultBox) {
  return (
    <div>
      <span>{`${label}: `} </span>
      <strong>{value === "" ? null : `$${value}`}</strong>
    </div>
  );
}

export default ResultBox;
