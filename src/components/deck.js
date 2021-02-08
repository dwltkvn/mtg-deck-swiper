import React from "react"
import * as idb from "idb"
import { x } from "@xstyled/styled-components"
import MTGCard from "../components/card"

const styles = {}

class Deck extends React.Component {
  constructor(props) {
    super(props)
    this.database = null
    // this.handeEvent = this.handleEvent.bind(this);
    this.removeCard = this.removeCard.bind(this)
    this.state = {
      stateCardsIDs: this.props.propDeckList,
      stateDatabaseOpened: false
    }
  }

  componentDidMount() {
    console.log("well mounted")

    this.setState({
      stateCardsIDs: this.shuffle(this.props.propDeckList)
    })
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

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  removeCard(i) {
    let stateCardsIDs = this.state.stateCardsIDs
    stateCardsIDs.pop()
    this.setState({ stateCardsIDs })
    //console.log(stateCardsIDs.length)
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
        //bg="blue-500"
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
                cbOnCardClicked={i => this.removeCard(i)}
              />
            )
          })}
      </x.div>
    )
  }
}

export default Deck
