// ============================================================
// src/components/Header.jsx
// ============================================================

// LINE 1: "use client" tells Next.js this component runs in
//          the browser (client side), not on the server.
//          Required whenever we use React features like props
//          with event handlers, hooks, etc.
"use client";

// LINE 2: We import React so JSX (<div>, <h1>, etc.) works.
//          In newer Next.js you can skip this, but it's good
//          practice to keep it for clarity.
import React from "react";

// LINE 3: We define our Header component as a function.
//          It receives ONE prop called "title" — the text
//          shown inside the header bar.
//          Props are passed from the parent (page.js) like:
//          <Header title="User Manager" />
export default function Header({ title }) {

  // LINE 4: We return JSX — the HTML-like structure React
  //          will render on screen.
  return (

    // LINE 5: Outer <header> tag — semantic HTML for the
    //          top bar of the page. The className applies
    //          our CSS styles defined in globals.css.
    <header className="app-header">

      {/* LINE 6: The logo/icon area — a decorative circle
                  with initials "UM" (User Manager).        */}
      <div className="header-logo">
        <span>UM</span>
      </div>

      {/* LINE 7: The <h1> tag displays the title text.
                  {title} injects the prop value here.
                  If parent passes title="User Manager",
                  this renders: <h1>User Manager</h1>       */}
      <h1 className="header-title">{title}</h1>

      {/* LINE 8: A small decorative badge on the right side */}
      <div className="header-badge">
        <span>v1.0</span>
      </div>

    </header>
  );
}
// ============================================================
// SUMMARY:
//  - Accepts:  title (string prop from page.js)
//  - Renders:  A styled top bar with logo, title, badge
//  - State:    NONE — this is a pure "display" component
// ============================================================
