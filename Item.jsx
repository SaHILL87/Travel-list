export default function Item({ item, handledelete, handletoggle }) {
  return (
    <li>
      <input type="checkbox" onChange={() => handletoggle(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handledelete(item.id)}>❌</button>
    </li>
  );
}
