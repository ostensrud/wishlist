import React from "react"

type WishTypes = {
  wish: {
    what: string
    link?: string
    description?: string
  }
}
const Wish = ({ wish }: WishTypes) => (
  <div>
    <span>{wish.what}</span>
    {wish.link && <a href={wish.link}>Klikk her!</a>}
    {wish.description && <span>{wish.description}</span>}
  </div>
)

export { Wish }
