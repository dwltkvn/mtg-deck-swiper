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
    this.addtoScryFallCache = this.addtoScryFallCache.bind(this)
    this.getFromScryFallCache = this.getFromScryFallCache.bind(this)
    this.state = {
      stateCardsIDs: cardsIDs
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
  }

  componentWillUnmount() {}

  getFromScryFallCache(uid) {
    console.log("get from scry fall cache " + uid + "///")
    //return false

    this.database.then(db => {
      var tx = db.transaction("books", "readonly")
      var store = tx.objectStore("books")
      var res = store.get(uid)
      console.log(res)
      return new Promise(res)
    })
    /*.then(res => {
        console.log("get scryfall:" + res)
        //var imgURL = URL.createObjectURL(res)
        //console.log(imgURL)
        console.log(res.id)

        return res
      })*/
  }

  addtoScryFallCache(uid, blob) {
    this.database
      .then(db => {
        const tx = db.transaction("books", "readwrite")
        var store = tx.objectStore("books")
        var item = {
          id: uid,
          data: blob,
          created: new Date().getTime()
        }
        store.add(item)
        return tx.complete
      })
      .then(() => console.log("added item to the store os!"))
    /*
dbPromise
      .then(function (db) {
        var tx = db.transaction("books", "readwrite")
        var store = tx.objectStore("books")
        var item = {
          id: 7,
          name: "sandwich",
          price: 4.99,
          description: "A very tasty sandwich",
          created: new Date().getTime()
        }
        store.add(item)
        return tx.complete
      })
      .then(function () {
        console.log("added item to the store os!")
      })
    */
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
              cbAddToDB={this.addtoScryFallCache}
              cbGetFromDB={this.getFromScryFallCache}
              propDatabase={this.database}
            />
          )
        })}
      </x.div>
    )
  }
}

export default Deck
