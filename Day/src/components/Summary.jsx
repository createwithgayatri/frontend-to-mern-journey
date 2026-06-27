export default function Summary({ transactions }) {
  const amounts = transactions.map((t) => t.amount);

  const income = amounts
    .filter((a) => a > 0)
    .reduce((acc, val) => acc + val, 0);

  const expense = amounts
    .filter((a) => a < 0)
    .reduce((acc, val) => acc + val, 0);

  return (
    <div className="summary">
      <h3>Income: ₹{income}</h3>
      <h3>Expense: ₹{Math.abs(expense)}</h3>
    </div>
  );
}