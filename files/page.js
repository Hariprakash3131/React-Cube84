// ============================================================
// src/app/page.js  —  THE STATE HUB (Brain of the app)
// ============================================================

// LINE 1: "use client" is REQUIRED here because we use
//          useState hook. Next.js by default renders pages
//          on the server; "use client" opts this page into
//          client-side rendering so hooks work.
"use client";

// LINE 2: Import React and the useState hook from React.
//          useState is the tool we use to store and update
//          dynamic data (users list, visibility toggle).
import React, { useState } from "react";

// LINE 3: Import our custom Header component from its file.
//          The path is relative: "../" goes up from app/ to src/
//          then into components/.
import Header from "../components/Header";

// LINE 4: Import the UserForm component.
//          This component renders the Add User form.
import UserForm from "../components/UserForm";

// LINE 5: Import the UserCard component.
//          This component renders each individual user card.
import UserCard from "../components/UserCard";

// LINE 6: Define and export the default Page component.
//          Next.js automatically uses this as the "/" route.
export default function Page() {

  // ----------------------------------------------------------
  // STATE DECLARATIONS
  // All state lives HERE in page.js — not in child components.
  // Child components receive state via props.
  // ----------------------------------------------------------

  // LINE 7: users state — an ARRAY of user objects.
  //          Each user object looks like: { name: "Ali", age: 25 }
  //          users     → the current list (starts empty)
  //          setUsers  → function to update the list
  //          []        → initial value: empty array
  const [users, setUsers] = useState([]);

  // LINE 8: showUsers state — a BOOLEAN toggle.
  //          true  → user list is visible
  //          false → user list is hidden
  //          Starts as true so list shows by default.
  const [showUsers, setShowUsers] = useState(true);

  // ----------------------------------------------------------
  // EVENT HANDLERS
  // These functions are passed DOWN to child components as props.
  // ----------------------------------------------------------

  // LINE 9: handleAddUser is passed to UserForm as onAddUser.
  //          When UserForm calls onAddUser(newUser), this runs.
  //          Parameter: newUser = { name: "...", age: ... }
  const handleAddUser = (newUser) => {

    // LINE 10: setUsers with a function (prev => ...) is the
    //           SAFE way to update state based on previous state.
    //           prev = the current users array
    //           We spread [...prev] to copy it, then add newUser.
    //           React state must NEVER be mutated directly.
    setUsers((prev) => [...prev, newUser]);
  };

  // LINE 11: handleDeleteUser removes a user at a given index.
  //           index = position of the user to remove (0, 1, 2…)
  //           This is passed to each UserCard as onDelete.
  const handleDeleteUser = (index) => {

    // LINE 12: filter() creates a new array excluding the item
    //           at the given index.
    //           (_, i) → _ is the user object (unused), i is index
    //           Keep every user WHERE i !== index (skip the target).
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  // LINE 13: handleToggleUsers flips the showUsers boolean.
  //           true → false, false → true.
  //           Using previous value (prev) ensures accuracy.
  const handleToggleUsers = () => {
    setShowUsers((prev) => !prev);
  };

  // ----------------------------------------------------------
  // JSX RETURN — What gets rendered on screen
  // ----------------------------------------------------------

  // LINE 14: Return the complete page layout.
  return (

    // LINE 15: Root wrapper div — applies page background + font.
    <div className="page-wrapper">

      {/* LINE 16: Render the Header component.
                   Pass the title prop as a string.
                   Header displays this as its <h1> text.          */}
      <Header title="User Manager" />

      {/* LINE 17: Main content area — centered container.          */}
      <main className="main-content">

        {/* LINE 18: Render the UserForm component.
                     Pass handleAddUser as the onAddUser prop.
                     When the form's Add button is clicked,
                     it calls onAddUser() → runs handleAddUser()
                     here → updates users state.                    */}
        <UserForm onAddUser={handleAddUser} />

        {/* LINE 19: Controls bar — shows count + toggle button.   */}
        <div className="controls-bar">

          {/* LINE 20: Display how many users are in the list.
                        users.length gives the array's item count.  */}
          <div className="user-count">
            <span className="count-number">{users.length}</span>
            <span className="count-label">
              {users.length === 1 ? "User" : "Users"} Registered
            </span>
          </div>

          {/* LINE 21: Toggle button — calls handleToggleUsers().
                        The button text changes based on showUsers:
                        true  → "Hide Users"
                        false → "Show Users"                        */}
          <button
            className={`btn-toggle ${showUsers ? "btn-toggle-hide" : "btn-toggle-show"}`}
            onClick={handleToggleUsers}
          >
            {/* LINE 22: The eye icon changes with state            */}
            <span>{showUsers ? "👁" : "👁‍🗨"}</span>
            <span>{showUsers ? "Hide Users" : "Show Users"}</span>
          </button>

        </div>

        {/* LINE 23: CONDITIONAL RENDER of the user list.
                     showUsers && (...) means:
                     - If showUsers is TRUE  → render the div
                     - If showUsers is FALSE → render nothing     */}
        {showUsers && (

          // LINE 24: Outer container for the cards grid or empty state.
          <div>

            {/* LINE 25: IF users array is empty, show a placeholder.
                          users.length === 0 → true → show empty state */}
            {users.length === 0 ? (

              // LINE 26: Empty state UI — friendly message when no users.
              <div className="empty-state">
                <div className="empty-icon">👤</div>
                <p className="empty-title">No users yet</p>
                <p className="empty-sub">Add your first user using the form above</p>
              </div>

            ) : (

              // LINE 27: users array has items → render the card grid.
              <div className="cards-grid">

                {/* LINE 28: map() loops over the users array.
                              For each user at position index,
                              we return a UserCard component.

                              key={index} → React needs a unique key
                              for each list item to track updates.
                              (In production, use a unique ID instead
                              of index for better performance.)

                              name={user.name} → passes name prop
                              age={user.age}   → passes age prop

                              onDelete={() => handleDeleteUser(index)}
                              → Arrow function creates a closure that
                                "remembers" this specific index.
                                When UserCard calls onDelete(), it runs
                                handleDeleteUser(index) for THIS card. */}
                {users.map((user, index) => (
                  <UserCard
                    key={index}
                    name={user.name}
                    age={user.age}
                    onDelete={() => handleDeleteUser(index)}
                  />
                ))}

              </div>
            )}

          </div>
        )}

      </main>

      {/* LINE 29: Simple footer */}
      <footer className="app-footer">
        <p>User Card Manager — Built with Next.js + React</p>
      </footer>

    </div>
  );
}
// ============================================================
// SUMMARY:
//  - State:    users (array), showUsers (boolean) — BOTH here
//  - Handlers: handleAddUser, handleDeleteUser, handleToggleUsers
//  - Renders:  Header + UserForm + toggle button + UserCard list
//  - Props passed DOWN:
//      → Header:    title="User Manager"
//      → UserForm:  onAddUser={handleAddUser}
//      → UserCard:  name, age, onDelete (per card via map)
// ============================================================
