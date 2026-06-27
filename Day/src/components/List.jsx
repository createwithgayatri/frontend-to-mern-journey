export default function List({ transactions }) {
  return (
    <ul>
      {transactions.map((tx) => (
        <li key={tx.id} className={tx.amount < 0 ? "expense" : "income"}>
          {tx.text} ₹{tx.amount}
        </li>
      ))}
    </ul>
  );
}