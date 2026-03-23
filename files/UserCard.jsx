// ============================================================
// src/components/UserCard.jsx
// ============================================================

// LINE 1: Client component directive — needed for onClick
//          event handling inside this component.
"use client";

// LINE 2: Import React so JSX works.
import React from "react";

// LINE 3: Define UserCard component.
//          It receives THREE props from page.js:
//          ┌─────────────────────────────────────────────┐
//          │  name     → the user's name (string)        │
//          │  age      → the user's age  (number)        │
//          │  onDelete → function to remove this user    │
//          └─────────────────────────────────────────────┘
//          This component does NOT have its own state.
//          It only displays data and fires events upward.
export default function UserCard({ name, age, onDelete }) {

  // LINE 4: Helper — generate initials from the name.
  //          "John Doe" → "JD"
  //          "Alice"    → "A"
  //          We split by space, take first char of each word,
  //          join them, and uppercase the result.
  const initials = name
    .split(" ")                        // ["John", "Doe"]
    .map((word) => word[0])            // ["J", "D"]
    .join("")                          // "JD"
    .toUpperCase()                     // "JD" (already upper)
    .slice(0, 2);                      // max 2 characters

  // LINE 5: Helper — pick a background color for the avatar
  //          based on the first letter of the name.
  //          This gives each card a unique feel.
  const avatarColors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4",
    "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F",
    "#BB8FCE", "#F1948A",
  ];
  // Convert first char to a number (charCode) and use modulo
  // to pick one of the 10 colors consistently for that name.
  const colorIndex = name.charCodeAt(0) % avatarColors.length;
  const avatarColor = avatarColors[colorIndex];

  // LINE 6: Return the JSX card layout.
  return (

    // LINE 7: The outer card container div.
    //          className="user-card" applies card styles.
    <div className="user-card">

      {/* LINE 8: Top section of the card with avatar circle */}
      <div className="card-top">

        {/* LINE 9: Avatar circle — shows initials with
                    a dynamic background color set inline.
                    style={{ background: avatarColor }} applies
                    JS-computed color directly as CSS.              */}
        <div
          className="card-avatar"
          style={{ background: avatarColor }}
        >
          {initials}
        </div>

        {/* LINE 10: Name text — large, prominent display.
                     {name} injects the name prop value.            */}
        <h2 className="card-name">{name}</h2>

      </div>

      {/* LINE 11: Info section — shows age with label */}
      <div className="card-info">

        {/* LINE 12: Age row with label and value */}
        <div className="card-info-row">
          <span className="card-info-label">AGE</span>
          <span className="card-info-value">{age} yrs</span>
        </div>

        {/* LINE 13: A decorative divider line */}
        <div className="card-divider"></div>

        {/* LINE 14: Member status row */}
        <div className="card-info-row">
          <span className="card-info-label">STATUS</span>
          <span className="card-status-badge">Active</span>
        </div>

      </div>

      {/* LINE 15: Delete button at the bottom of the card.
                   onClick fires onDelete prop — which is the
                   function defined in page.js that removes
                   this specific user from the users array.
                   We pass NO arguments because onDelete already
                   knows which user to remove (via closure/index
                   set up in page.js's map call).                  */}
      <button className="btn-delete" onClick={onDelete}>
        <span>✕</span>
        <span>Remove</span>
      </button>

    </div>
  );
}
// ============================================================
// SUMMARY:
//  - Accepts:  name (string), age (number), onDelete (function)
//  - Renders:  Styled card with avatar, name, age, delete btn
//  - State:    NONE — pure display + event forwarding
//  - onClick:  Calls onDelete() which lives in page.js
// ============================================================
