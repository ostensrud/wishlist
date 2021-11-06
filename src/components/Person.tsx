import React from "react"

type PersonTypes = {
  name: string
}

const Person = ({ name }: PersonTypes) => (
  <div>
    <h2>{name}</h2>
  </div>
)

export { Person }
