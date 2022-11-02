import React from "react"
import { Who, WishType } from "../types/WishType"
import { Wish } from "./Wish"

type WishProps = {
  wishes: WishType[]
  filterParam: Who
  locationFilter?: string
}

const Wishes = ({ wishes, filterParam, locationFilter }: WishProps) => {
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
