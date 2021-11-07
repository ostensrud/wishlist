import React from "react"

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="card">
    <div className="content">{children}</div>
  </div>
)

export { Card }
