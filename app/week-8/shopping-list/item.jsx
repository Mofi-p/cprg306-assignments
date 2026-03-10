export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="flex items-center justify-between px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 cursor-pointer hover:border-amber-400 hover:border-opacity-40 hover:bg-amber-400 hover:bg-opacity-5 hover:translate-x-1 transition-all duration-150 list-none"
    >
      <span className="text-sm font-medium text-zinc-100">{name}</span>
      <div className="flex items-center gap-2">
        <span className="text-amber-400 font-bold text-sm">×{quantity}</span>
        <span className="text-xs uppercase tracking-wider text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">
          {category}
        </span>
      </div>
    </li>
  );
}