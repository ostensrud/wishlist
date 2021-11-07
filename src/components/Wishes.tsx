import React from "react"
import { Wish } from "./Wish"

type WishType = {
  who: string
  wish: {
    what: string
    description?: string
    link?: string
  }
}

type WishesTypes = {
  wishes: WishType[]
  filterParam: string
}

const Wishes = ({ wishes, filterParam }: WishesTypes) => {
  const wi = wishes
    .filter(wish => wish.who === filterParam)
    .map(wish => <Wish wish={wish.wish} />)

  return <>{wi}</>
}

export { Wishes }
