import React from "react"
import { Wish } from "./Wish"

type WishType = {
  who: string
  wish: {
    what: string
    description?: string
    link?: string
    showTo?: string
  }
}

type WishesTypes = {
  wishes: WishType[]
  filterParam: string
  locationFilter?: string
}

const Wishes = ({ wishes, filterParam, locationFilter }: WishesTypes) => {
  const wishesNoLocation = wishes
    .filter(wish => wish.who === filterParam)
    .filter(wish => !wish.wish.showTo)
    .map(wish => <Wish key={wish.wish.what} wish={wish.wish} />)
  const wi = wishes
    .filter(wish => wish.who === filterParam)
    .filter(wish => locationFilter && wish.wish.showTo === locationFilter)
    .map(wish => <Wish key={wish.wish.what} wish={wish.wish} />)

  return (
    <>
      {wishesNoLocation}
      {wi}
    </>
  )
}

export { Wishes }
