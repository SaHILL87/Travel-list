import { useState } from "react";
import Item from "./Item";
export default function Packaginglist({
  items,
  handledelete,
  handletoggle,
  handleclearlist,
}) {
  const [sort, setsort] = useState("input");
  let sorteditems;
  if (sort === "input") sorteditems = items;
  if (sort === "Alphabetical") {
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sort === "packed") {
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul className="unorderedlist">
        {sorteditems.map((item) => (
          <Item
            item={item}
            handledelete={handledelete}
            handletoggle={handletoggle}
            key={item.id}
          ></Item>
        ))}
      </ul>

      <div className="action">
        <select value={sort} onChange={(e) => setsort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="Alphabetical">Sort by alphabetical order</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleclearlist}>Clear list</button>
      </div>
    </div>
  );
}
