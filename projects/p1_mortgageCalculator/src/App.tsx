import React from "react";
import { useState } from "react";
import InputBox from "./components/InputBox";
import ResultBox from "./components/ResultBox";

interface IForm {
  loan: number;
  years: number;
  interest: number;
}

interface IMortg {
  monthlyPayment: string;
  totalPayment: string;
  totalInterest: string;
}

function App() {
  const [formData, setFormData] = useState<IForm>({
    loan: 0,
    years: 0,
    interest: 0,
  });

  const [mortgData, setMorgData] = useState<IMortg>({
    monthlyPayment: "",
    totalPayment: "",
    totalInterest: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "interest" ? parseFloat(value) / 100 : parseFloat(value),
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const monthlyInterest = formData.interest / 12;
    const interestFactor = (1 + monthlyInterest) ** (formData.years * 12);
    const monthlyPayment =
      (formData.loan * monthlyInterest * interestFactor) / (interestFactor - 1);
    const totalPayment = monthlyPayment * formData.years * 12;
    setMorgData({
      monthlyPayment: formatter.format(monthlyPayment),
      totalPayment: formatter.format(totalPayment),
      totalInterest: formatter.format(totalPayment - formData.loan),
    });
  };
  return (
    <div className="w-screen">
      <header className="text-center my-10 text-2xl font-bold">
        <h1>Mortgage Calculator</h1>
      </header>
      <form onSubmit={onSubmit} className="flex flex-col ml-10 mb-20 gap-y-5">
        {/* <div className="flex">
          <label htmlFor="loan" className="mr-5">
            Loan Amount
          </label>
          <input
            type="number"
            id="loan"
            name="loan"
            onChange={onChange}
            className="border-solid border border-black outline-none"
          />
        </div>
        <div>
          <label htmlFor="loan">Loan Term (years): </label>
          <input type="number" id="years" name="years" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="loan">Interest Rate (%): </label>
          <input
            type="number"
            id="interest"
            name="interest"
            onChange={onChange}
          />
        </div>
        <button>Calculate</button> */}

        <InputBox
          label="Loan Amount"
          id="loan"
          name="loan"
          onChange={onChange}
        />
        <InputBox
          label="Loan Term (years)"
          id="years"
          name="years"
          onChange={onChange}
        />
        <InputBox
          label="Interest Rate (%)"
          id="interest"
          name="interest"
          onChange={onChange}
        />
        <button className="border bg-black text-white py-1 w-24 rounded-lg hover:bg-slate-800">
          Calculate
        </button>
      </form>
      <div className="flex flex-col ml-10 mb-20 gap-y-5">
        {/* <div>
          <span>Monthly Payment Amount: </span>
          <span>
            {mortgData.monthlyPayment === ""
              ? null
              : `$${mortgData.monthlyPayment}`}
          </span>
        </div>
        <div>
          <span>Total Payment Amount: </span>
          <span>
            {mortgData.totalPayment === ""
              ? null
              : `$${mortgData.totalPayment}`}
          </span>
        </div>
        <div>
          <span>Total Interest Paid: </span>
          <span>
            {mortgData.totalInterest === ""
              ? null
              : `$${mortgData.totalInterest}`}
          </span>
        </div>
        */}

        <ResultBox
          label="Monthly Payment Amount"
          value={mortgData.monthlyPayment}
        />
        <ResultBox
          label="Total Payment Amount"
          value={mortgData.totalPayment}
        />
        <ResultBox
          label="Total Interest Paid"
          value={mortgData.totalInterest}
        />
      </div>
    </div>
  );
}

export default App;
