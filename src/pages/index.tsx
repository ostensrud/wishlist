import React from "react"
import { Helmet } from "react-helmet"

import "../styles/styles.css"

import { Person } from "../components/Person"
import { Wish } from "../components/Wish"
import JSONData from "../resources/wishes.json"

const IndexPage = () => (
  <div>
    <Helmet>
      <title>Ønskeliste</title>
    </Helmet>
    <header>
      <h1>Ønskeliste</h1>
    </header>
    <main className="container">
      <div className="card">
        <Person name={"Alfred"} />
        {JSONData.filter(o => o.who === "a").map(o => (
          <Wish wish={o.wish} />
        ))}
      </div>
      <div className="card">
        <Person name={"Kjersti"} />
        {JSONData.filter(o => o.who === "k").map(o => (
          <Wish wish={o.wish} />
        ))}
      </div>
      <div className="card">
        <Person name={"Øivind"} />
        {JSONData.filter(o => o.who === "o").map(o => (
          <Wish wish={o.wish} />
        ))}
      </div>
    </main>
  </div>
)

export default IndexPage
