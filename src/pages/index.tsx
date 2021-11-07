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
        <div className="content">
          <Person name={"Alfred"} />
          {JSONData.filter(o => o.who === "a").map(o => (
            <Wish wish={o.wish} />
          ))}
        </div>
      </div>
      <div className="card">
        <div className="content">
          <Person name={"Kjersti"} />
          {JSONData.filter(o => o.who === "k").map(o => (
            <Wish wish={o.wish} />
          ))}
        </div>
      </div>
      <div className="card">
        <div className="content">
          <Person name={"Øivind"} />
          {JSONData.filter(o => o.who === "o").map(o => (
            <Wish wish={o.wish} />
          ))}
        </div>
      </div>
    </main>
  </div>
)

export default IndexPage
