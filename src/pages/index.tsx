import React, { useState } from "react"

import "../styles/styles.css"

import { Card } from "../components/Card"
import { Knapp } from "../components/Knapp"
import { Person } from "../components/Person"
import { Wishes } from "../components/Wishes"
import { Who } from "../types/WishType"
import { getYear } from "date-fns"
import { wishlist } from "../resources/wishes"

const Head = () => <title>Ønskeliste</title>

const IndexPage = () => {
  const [location, setLocation] = useState<string | undefined>()
  const aar = getYear(new Date())
  const thisYearsWishes = wishlist[aar]
  return (
    <div>
      <Head />
      <header>
        <h1>Ønskeliste</h1>
      </header>
      <main className="container">
        {/* <Card>
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
        </Card> */}
        <Card>
          <Person name={"Alfred"} />
          <Wishes
            wishes={thisYearsWishes}
            filterParam={Who.a}
            locationFilter={location}
          />
        </Card>
        <Card>
          <Person name={"Kjersti"} />
          <Wishes
            wishes={thisYearsWishes}
            filterParam={Who.k}
            locationFilter={location}
          />
        </Card>
        <Card>
          <Person name={"Øivind"} />
          <Wishes
            wishes={thisYearsWishes}
            filterParam={Who.o}
            locationFilter={location}
          />
        </Card>
        <Card>
          <Person name={"Felles"} />
          <Wishes
            wishes={thisYearsWishes}
            filterParam={Who.f}
            locationFilter={location}
          />
        </Card>
      </main>
    </div>
  )
}

export default IndexPage
