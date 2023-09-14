export default function Footer({ numitems, numpacked }) {
  const percenpacked = Math.round((numpacked / numitems) * 100);
  if (!numitems)
    return (
      <p className="stats">
        <em>Start adding some items to your list</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {percenpacked === 100
          ? "You are ready to go!"
          : `You have ${numitems} items in your list, and you already packed${" "}${numpacked} (${percenpacked}%)`}
      </em>
    </footer>
  );
}
