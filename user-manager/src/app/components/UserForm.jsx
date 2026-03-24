"use client";
import { useState } from "react";

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age) return;

    onAddUser(name, age);

    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6 justify-center">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded"
      >
        Add
      </button>
    </form>
  );
}