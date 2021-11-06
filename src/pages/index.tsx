import React from "react"

import { Person } from "../components/Person"
import { Wish } from "../components/Wish"
import JSONData from "../resources/wishes.json"

const IndexPage = () => (
  <div>
    <h1>Ønskeliste</h1>
    <div>
      <Person name={"Alfred"} />
      {JSONData.filter(o => o.who === "a").map(o => (
        <Wish wish={o.wish} />
      ))}
    </div>
    <div>
      <Person name={"Kjersti"} />
      {JSONData.filter(o => o.who === "k").map(o => (
        <Wish wish={o.wish} />
      ))}
    </div>
    <div>
      <Person name={"Øivind"} />
      {JSONData.filter(o => o.who === "o").map(o => (
        <Wish wish={o.wish} />
      ))}
    </div>
  </div>
)

export default IndexPage
