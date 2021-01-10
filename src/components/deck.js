import React from "react"
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
    // this.handeEvent = this.handleEvent.bind(this);
    this.state = {
      stateCardsIDs: cardsIDs
    }
  }

  componentDidMount() {
    console.log("well mounted")
    let db
    if (!("indexedDB" in window)) {
      console.log("This browser doesn't support IndexedDB")
    }

    var idb = window.indexedDB
    var dbPromise = idb.open("test-db2", 9)

    dbPromise.onupgradeneeded = function (event) {
      console.log("onupgradeneeded")
      let upgradedb = dbPromise.result
      //event.target.result.createObjectStore("elephants")
      upgradedb.createObjectStore("books", { keyPath: "id" })
      //db.createObjectStore("elephants")
    }

    dbPromise.onsuccess = function () {
      console.log("onsuccess")
      db = dbPromise.result

      let transaction = db.transaction("books", "readwrite") // (1)

      // get an object store to operate on it
      let booksOS = transaction.objectStore("books") // (2)

      let book = {
        id: "jss",
        price: 10,
        created: new Date()
      }

      let request = booksOS.add(book) // (3)

      request.onsuccess = function () {
        // (4)
        console.log("Book added to the store", request.result)
      }

      request.onerror = function () {
        console.log("Error", request.error)
      }
      //db.createObjectStore("elephants")
      //
      //var transaction = db.transaction(["elephants"], IDBTransaction.READ_WRITE)
    }
  }

  componentWillUnmount() {}

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
        bg="blue-gray-500"
        onClick={() => {
          let stateCardsIDs = this.state.stateCardsIDs
          stateCardsIDs.pop()
          this.setState({ stateCardsIDs })
          console.log(stateCardsIDs.length)
        }}
      >
        {this.state.stateCardsIDs.map((e, i) => {
          let isTopCard = i === this.state.stateCardsIDs.length - 1
          let isSecondTopCard = i === this.state.stateCardsIDs.length - 2
          return (
            <MTGCard
              key={i}
              propCardPosition={i}
              propDisplayImg={isTopCard || isSecondTopCard}
              propCardName={e}
              propTopCard={isTopCard}
            />
          )
        })}
      </x.div>
    )
  }
}

export default Deck
