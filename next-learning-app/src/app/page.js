"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const users = ["John"];
 

  return (
    <div>
      {users.map((u, i) => (
        <span key={i}>{u}</span>
      ))}
      <Link href={`/products/${id}`}>View Profile</Link>
    </div>
  );
}