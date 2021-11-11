import React from "react"

import "../styles/buttons.css"

type KnappTypes = {
  name: string
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  isSelected: boolean
}

const Knapp = ({ name, text, onClick, isSelected }: KnappTypes) => {
  console.log(isSelected + " " + name)
  const classNames = `button ${isSelected ? "selected" : ""}`
  return (
    <button
      name={name}
      onClick={!isSelected ? onClick : () => {}}
      className={classNames}
    >
      {text}
    </button>
  )
}

export { Knapp }
