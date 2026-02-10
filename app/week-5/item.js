export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-300 p-4 m-2 rounded">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">Quantity: {quantity}</p>
      <p className="text-gray-600">Category: {category}</p>
    </li>
  );
}