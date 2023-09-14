import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import Packaginglist from "./Packinglist";
import Footer from "./footer";

export default function App() {
  const [items, setitems] = useState([]);
  const numitems = items.length;
  const numpacked = items.filter((item) => item.packed).length;

  function handleitem(item) {
    setitems((items) => [...items, item]);
  }

  function handledelete(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handletoggle(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleclearlist() {
    const confirm = window.confirm("Are ou sure you want to clear the list?");
    if (confirm) setitems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleitem={handleitem} />
      <Packaginglist
        items={items}
        handledelete={handledelete}
        handletoggle={handletoggle}
        handleclearlist={handleclearlist}
      />
      <Footer numitems={numitems} numpacked={numpacked} />
    </div>
  );
}
