import React from "react"
import { Icon } from "./Icons"

type WishTypes = {
  wish: {
    what: string
    link?: string
    description?: string
  }
}

const What = ({ wish }: WishTypes) => {
  if (!wish.link) {
    return <>{wish.what}</>
  }
  return (
    <>
      <a href={wish.link} target="_blank">
        {wish.what}
        <Icon iconName="open_in_new" />
      </a>
    </>
  )
}

const Wish = ({ wish }: WishTypes) => (
  <div className="wish">
    <div className="item">
      <What wish={wish} />
    </div>
    <div className="description">{wish.description || " "}</div>
  </div>
)

export { Wish }
