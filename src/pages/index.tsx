import React from "react"
import { Helmet } from "react-helmet"

import "../styles/styles.css"

import { Person } from "../components/Person"
import { Wish } from "../components/Wish"
import JSONData from "../resources/wishes.json"
import { Wishes } from "../components/Wishes"
import { Card } from "../components/Card"

const IndexPage = () => (
  <div>
    <Helmet>
      <title>Ønskeliste</title>
    </Helmet>
    <header>
      <h1>Ønskeliste</h1>
    </header>
    <main className="container">
      <Card>
        <Person name={"Alfred"} />
        <Wishes wishes={JSONData} filterParam="a" />
      </Card>
      <Card>
        <Person name={"Kjersti"} />
        <Wishes wishes={JSONData} filterParam="k" />
      </Card>
      <Card>
        <Person name={"Øivind"} />
        <Wishes wishes={JSONData} filterParam="o" />
      </Card>
    </main>
  </div>
)

export default IndexPage
