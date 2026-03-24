"use client";

export default function UserCard({ name, age, onDelete }) {
  return (
    <div className="border p-4 rounded shadow-md flex justify-between items-center">
      <div>
        <h2 className="font-bold text-lg">{name}</h2>
        <p>Age: {age}</p>
      </div>

      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}