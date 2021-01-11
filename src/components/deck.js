import React from "react"
import * as idb from "idb"
import { x } from "@xstyled/styled-components"
import MTGCard from "../components/card"

const styles = {}

const cardsIDs = [
  "Aetherize",
  "Ashiok's Erasure",
  "Bad River",
  "Baleful Strix",
  "Blessing of Leeches",
  "Brainstorm",
  "Brineborn Cutthroat",
  "Castle Locthwain",
  "Chemister's Insight",
  "Clearwater Pathway / Murkwater Pathway",
  "Counterspell",
  "Creeping Tar Pit",
  "Crystal Shard",
  "Cunning Nightbonder",
  "Darkslick Shores",
  "Darkwater Catacombs",
  "Draining Whelk",
  "Dream Eater",
  "Essence Scatter",
  "Evacuation",
  "Fabled Passage",
  "Fact or Fiction",
  "Force of Despair",
  "Frantic Search",
  "Glasspool Mimic / Glasspool Shore",
  "Go for the Throat",
  "Heartless Act",
  "Island",
  "Isochron Scepter",
  "Jwari Disruption / Jwari Ruins",
  "Languish",
  "Liliana's Standard Bearer",
  "Lochmere Serpent",
  "Malakir Rebirth / Malakir Mire",
  "Merfolk Trickster",
  "Midnight Clock",
  "Mission Briefing",
  "Mizzium Meddler",
  "Murderous Rider / Swift End",
  "Mystic Sanctuary",
  "Mystical Teachings",
  "Naiad of Hidden Coves",
  "Narset's Reversal",
  "Negate",
  "Nimble Obstructionist",
  "Notion Thief",
  "Nymris, Oona's Trickster",
  "Omen of the Dead",
  "Omen of the Sea",
  "Pearl Lake Ancient",
  "Pelakka Predation / Pelakka Caverns",
  "Phyrexian Reclamation",
  "Pongify",
  "Quickling",
  "Reality Shift",
  "Reliquary Tower",
  "Rewind",
  "Run Away Together",
  "Runechanter's Pike",
  "Sea Gate Restoration / Sea Gate, Reborn",
  "Silundi Vision / Silundi Isle",
  "Slitherwisp",
  "Soul Manipulation",
  "Spectral Sailor",
  "Spite / Malice",
  "Stitch Together",
  "Stunt Double",
  "Sublime Epiphany",
  "Sunken Hollow",
  "Sunken Ruins",
  "Swamp",
  "Tainted Isle",
  "Talrand, Sky Summoner",
  "Temple of Deceit",
  "The Magic Mirror",
  "Thought Vessel",
  "Thryx, the Sudden Storm",
  "Tyrant's Scorn",
  "Underground River",
  "Voidmage Husher",
  "Voracious Greatshark",
  "Watery Grave",
  "Wavebreak Hippocamp"
]

class Deck extends React.Component {
  constructor(props) {
    super(props)
    this.database = null
    // this.handeEvent = this.handleEvent.bind(this);
    this.state = {
      stateCardsIDs: cardsIDs,
      stateDatabaseOpened: false
    }
  }

  componentDidMount() {
    console.log("well mounted")

    if (!("indexedDB" in window)) {
      console.log("This browser doesn't support IndexedDB")
      return
    }

    this.database = idb.openDB("scryfallCache", 1, {
      upgrade(db, oldVersion, newVersion, transaction) {
        console.log("create Scryfall Cache DB")
        db.createObjectStore("books", { keyPath: "id" })
      },
      blocked() {
        // …
      },
      blocking() {
        // …
      },
      terminated() {
        // …
      }
    })

    // state when db is opened
    this.database.then(db => {
      this.setState({ stateDatabaseOpened: true })
    })
  }

  componentWillUnmount() {
    if (this.database) {
      this.database.close()
    }
  }

  render() {
    //const {classes} = this.props;
    //const {myState} = this.state;
    //const { propMounted, propDefaultCardName, propUserName } = this.props
    const classes = styles

    return (
      <x.div
        flexGrow={1}
        display="grid"
        gridTemplateRows={1}
        gridTemplateColumns={1}
        gridAutoFlow="column"
        alignItems="center"
        justifyItems="center"
        overflow="hidden"
        //borderWidth={8}
        //borderStyle="solid"
        //borderColor="red-600"
        bg="white-500"
        onClick={() => {
          let stateCardsIDs = this.state.stateCardsIDs
          stateCardsIDs.pop()
          this.setState({ stateCardsIDs })
          console.log(stateCardsIDs.length)
        }}
      >
        {this.state.stateDatabaseOpened &&
          this.state.stateCardsIDs.map((e, i) => {
            let isTopCard = i === this.state.stateCardsIDs.length - 1
            let isSecondTopCard = i === this.state.stateCardsIDs.length - 2
            if (i < this.state.stateCardsIDs.length - 2) return null
            return (
              <MTGCard
                key={i}
                propCardPosition={i}
                propDisplayImg={isTopCard || isSecondTopCard}
                propCardName={e}
                propTopCard={isTopCard}
                propDatabase={this.database}
              />
            )
          })}
      </x.div>
    )
  }
}

export default Deck
