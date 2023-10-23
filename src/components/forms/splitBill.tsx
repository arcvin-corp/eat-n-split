import { ChangeEvent, FormEvent, useState } from "react";
import { FriendData } from "../../types";

export default function SplitBill({
  selectedFriend,
  onHandleSplitBill,
}: {
  selectedFriend: FriendData;
  onHandleSplitBill: (id: number, amount: number) => void;
}) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoPaid, setWhoPaid] = useState("you");

  function setValue(inputValue: string, setStateFunc: (value: React.SetStateAction<string>) => void) {
    if (!inputValue) {
      setStateFunc("0");
      return;
    }

    if (+inputValue < 0) return;

    if (inputValue.startsWith("0") && inputValue.length > 1) {
      setStateFunc(inputValue.slice(1));
      return;
    }

    setStateFunc(inputValue);
  }

  function handleBillValue(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setValue(inputValue, setBillValue);
  }

  function handleYourExpense(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    if (+inputValue > +billValue) return;
    setValue(inputValue, setYourExpense);
  }

  function handleWhoPaid(e: ChangeEvent<HTMLSelectElement>) {
    e.target.value === "you" ? setWhoPaid("you") : setWhoPaid("friend");
  }

  function handleSplitBill(e: FormEvent) {
    e.preventDefault();
    setYourExpense("");
    setBillValue("");
    setWhoPaid("you");

    if (whoPaid === "you") {
      onHandleSplitBill(selectedFriend.id, -(+billValue - +yourExpense));
    } else if (whoPaid === "friend") {
      onHandleSplitBill(selectedFriend.id, +yourExpense);
    }
  }

  return (
    <>
      {selectedFriend.selected && (
        <form className="form-split-bill" onSubmit={(e) => handleSplitBill(e)}>
          <h2>
            Split the bill with <span>{selectedFriend.name}</span>
          </h2>

          <label>💰 Bill value</label>
          <input type="number" value={billValue} onChange={(e) => handleBillValue(e)} />

          <label>🧍‍♀️ Your expense</label>
          <input type="number" value={yourExpense} onChange={(e) => handleYourExpense(e)} />

          <label>👫 {selectedFriend.name}'s expense</label>
          <input type="number" disabled value={billValue ? +billValue - +yourExpense : ""} />

          <label>🤑 Who is paying the bill</label>
          <select value={whoPaid} onChange={(e) => handleWhoPaid(e)}>
            <option value="you">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>

          <button className="button">Split Bill</button>
        </form>
      )}
    </>
  );
}
