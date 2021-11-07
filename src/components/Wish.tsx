import React from "react"

type WishTypes = {
  wish: {
    what: string
    link?: string
    description?: string
  }
}
const Wish = ({ wish }: WishTypes) => (
  <div className="wish">
    <div className="item">{wish.what}</div>
    <div className="description">{wish.description || " "}</div>
    <div className="link">
      {wish.link && (
        <a href={wish.link} target="_blank">
          Klikk her!
        </a>
      )}
    </div>
  </div>
)

export { Wish }
