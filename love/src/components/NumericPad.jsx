export default function NumericPad({ onNumberClick, onDelete }) {
    return (
      <div className="numpad">
        {[...Array(9)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => onNumberClick((i + 1).toString())}
            className="w-16 h-16 text-2xl font-bold bg-gray-700 text-white rounded-full hover:bg-gray-600"
          >
            {i + 1}
          </button>
        ))}
        <div></div>
        <button
          onClick={() => onNumberClick("0")}
          className="w-16 h-16 text-2xl font-bold bg-gray-700 text-white rounded-full hover:bg-gray-600"
        >
          0
        </button>
        <button
          onClick={onDelete}
          className="delete w-16 h-16 text-2xl font-bold bg-red-700 text-white rounded-full hover:bg-red-600"
        >
          ⌫
        </button>
      </div>
    );
  }
  