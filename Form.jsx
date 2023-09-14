import { useState } from "react";

export default function Form({ handleitem }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function Handlesubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newitem = { description, quantity, id: Date.now(), packed: false };
    console.log(newitem);
    handleitem(newitem);
    setdescription("");
    setquantity(1);
  }

  return (
    <form className="add-form" onSubmit={Handlesubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setquantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter items"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
