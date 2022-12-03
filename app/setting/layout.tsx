import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>khusus layout setting</h2>
      {children}
    </div>
  );
}
