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
  const classNames = `button__front ${
    isSelected ? "button__front--selected" : ""
  }`
  return (
    <button
      name={name}
      onClick={!isSelected ? onClick : () => {}}
      className={"button__back"}
    >
      <span className={classNames}>
        <span className="buttontext">{text}</span>
      </span>
    </button>
  )
}

export { Knapp }
