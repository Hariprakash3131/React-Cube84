"use client";

import Link from "next/link";

export default function Home() {
  const users = ["John"];

  return (
    <div>
      {users.map((u, i) => (
        <div key={i}>
          <span>{u}</span>
          <Link href={`/products/${i}`}>View Profile</Link>
        </div>
      ))}
    </div>
  );
}
