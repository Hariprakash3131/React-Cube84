"use client";

import { useState } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(true);

  // Add user name,ages
  const addUser = (name, age) => {
    const newUser = {
      id: Date.now(),
      name,
      age,
    };

    setUsers([...users, newUser]);
  };

  // Delete user details
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">

      <Header title="User Manager" />

      <UserForm onAddUser={addUser} />

  
      <div className="text-center mb-6">
        <button
          onClick={() => setShowUsers(!showUsers)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {showUsers ? "Hide Users" : "Show Users"}
        </button>
      </div>

      {showUsers && (
        <div className="flex flex-col gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              age={user.age}
              onDelete={() => deleteUser(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}