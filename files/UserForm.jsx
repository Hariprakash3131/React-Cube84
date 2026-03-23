// ============================================================
// src/components/UserForm.jsx
// ============================================================

// LINE 1: Mark as a Client Component so React hooks and
//          browser events work inside this file.
"use client";

// LINE 2: Import React and the useState hook.
//          useState lets us track the form's local input
//          values (name and age typed by the user).
import React, { useState } from "react";

// LINE 3: Define the UserForm component.
//          It receives ONE prop: onAddUser — a function
//          defined in page.js that adds a new user to the
//          main users array stored there.
//
//          Why prop for the handler?
//          Because state (users list) lives in page.js.
//          UserForm doesn't own the list — it just
//          tells page.js "hey, add this person!"
export default function UserForm({ onAddUser }) {

  // LINE 4: Local state for the Name input field.
  //          name        → current value of the name input
  //          setName     → function to update it
  //          ""          → starting value is empty string
  const [name, setName] = useState("");

  // LINE 5: Local state for the Age input field.
  //          age         → current value of the age input
  //          setAge      → function to update it
  //          ""          → starting value is empty string
  const [age, setAge] = useState("");

  // LINE 6: Local state to show a validation error message
  //          when user tries to submit without filling fields.
  const [error, setError] = useState("");

  // LINE 7: handleAdd is called when the "Add User" button
  //          is clicked. It validates inputs and calls the
  //          parent's onAddUser function.
  const handleAdd = () => {

    // LINE 8: Trim whitespace from name. If name is empty
    //          (or just spaces), show an error and stop.
    if (!name.trim()) {
      setError("Please enter a name.");  // show error text
      return;                            // exit early, no add
    }

    // LINE 9: Check age: must not be empty AND must be a
    //          positive number. If invalid, show error + stop.
    if (!age || isNaN(age) || Number(age) <= 0) {
      setError("Please enter a valid age.");
      return;
    }

    // LINE 10: If we reach here, inputs are valid.
    //           Clear any previous error message.
    setError("");

    // LINE 11: Call the parent's onAddUser prop-function,
    //           passing an object with name and age.
    //           This is how UserForm "talks" to page.js.
    //           page.js will add this object to the users array.
    onAddUser({ name: name.trim(), age: Number(age) });

    // LINE 12: Reset both inputs back to empty strings so
    //           the form is clear and ready for the next entry.
    setName("");
    setAge("");
  };

  // LINE 13: handleKeyDown allows pressing Enter key to
  //           submit the form — better user experience.
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  // LINE 14: Return the JSX — the visual form on screen.
  return (

    // LINE 15: Wrapper div for the whole form section.
    <div className="form-container">

      {/* LINE 16: Section label above the form */}
      <p className="form-label">ADD NEW USER</p>

      {/* LINE 17: The input row holds both fields side by side */}
      <div className="form-row">

        {/* LINE 18: Name text input.
                      value={name}        → controlled input, synced with state
                      onChange={...}      → every keystroke updates name state
                      onKeyDown={...}     → Enter key triggers handleAdd
                      placeholder={...}  → ghost text when empty              */}
        <input
          type="text"
          className="form-input"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* LINE 19: Age number input — same pattern as name input.
                      type="number" tells browser to show number keyboard
                      on mobile and block non-numeric keys.                  */}
        <input
          type="number"
          className="form-input form-input-age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          onKeyDown={handleKeyDown}
          min="1"
          max="120"
        />

        {/* LINE 20: The Add button. onClick fires handleAdd().            */}
        <button className="btn-add" onClick={handleAdd}>
          <span className="btn-add-icon">+</span>
          <span>Add User</span>
        </button>

      </div>

      {/* LINE 21: Error message area. Only renders when error is not "".
                    The && operator: if error is truthy, show the <p>.      */}
      {error && <p className="form-error">{error}</p>}

    </div>
  );
}
// ============================================================
// SUMMARY:
//  - Accepts:  onAddUser (function prop from page.js)
//  - Local State: name, age (input values), error (msg)
//  - Renders:  Two inputs + Add button + optional error
//  - On Add:   Validates → calls onAddUser(obj) → clears inputs
// ============================================================
