import React, { useState } from "react"
import { Helmet } from "react-helmet"

import "../styles/styles.css"

import { Person } from "../components/Person"
import JSONData from "../resources/wishes.json"
import { Wishes } from "../components/Wishes"
import { Card } from "../components/Card"
import { Knapp } from "../components/Knapp"

const IndexPage = () => {
  const [location, setLocation] = useState<string | undefined>()
  console.log(location)
  return (
    <div>
      <Helmet>
        <title>Ønskeliste</title>
      </Helmet>
      <header>
        <h1>Ønskeliste</h1>
      </header>
      <main className="container">
        <Card>
          <h2>Hvor eru bor hen a?</h2>
          <h3>Eyh la meg ta det med til ah, ta-ta deg med til</h3>
          <div className="button-row">
            <Knapp
              onClick={() => setLocation("skien")}
              name="skien"
              text="Skien"
              isSelected={location === "skien"}
            />
            <Knapp
              onClick={() => setLocation("aarnes")}
              name="aarnes"
              text="Årnes"
              isSelected={location === "aarnes"}
            />
          </div>
        </Card>
        <Card>
          <Person name={"Alfred"} />
          <Wishes wishes={JSONData} filterParam="a" locationFilter={location} />
        </Card>
        <Card>
          <Person name={"Kjersti"} />
          <Wishes wishes={JSONData} filterParam="k" locationFilter={location} />
        </Card>
        <Card>
          <Person name={"Øivind"} />
          <Wishes wishes={JSONData} filterParam="o" locationFilter={location} />
        </Card>
        <Card>
          <Person name={"Felles"} />
          <Wishes wishes={JSONData} filterParam="f" locationFilter={location} />
        </Card>
      </main>
    </div>
  )
}

export default IndexPage
