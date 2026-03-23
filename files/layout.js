// ============================================================
// src/app/layout.js  —  ROOT LAYOUT (wraps every page)
// ============================================================

// LINE 1: Import our global CSS file.
//          This is the only place you import globals.css.
//          All styles defined there apply app-wide.
import "./globals.css";

// LINE 2: metadata is a Next.js export that sets the
//          browser tab title and meta description for SEO.
export const metadata = {
  title: "User Card Manager",
  description: "A Next.js app to add, view, and delete users",
};

// LINE 3: RootLayout is required by Next.js App Router.
//          It wraps every page with <html> and <body> tags.
//          {children} = the page content (our page.js output).
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
// ============================================================
// SUMMARY:
//  - Imports globals.css (styles available everywhere)
//  - Sets HTML metadata (tab title etc.)
//  - Wraps all pages in <html><body>...</body></html>
// ============================================================
