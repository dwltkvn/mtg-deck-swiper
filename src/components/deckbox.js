import React from "react"
import { x } from "@xstyled/styled-components"
import * as idb from "idb"

const styles = {}

class DeckBox extends React.Component {
  constructor(props) {
    super(props)
    // this.handeEvent = this.handleEvent.bind(this);
    this.clearDeckListCache = this.clearDeckListCache.bind(this)

    this.state = {}
  }

  componentDidMount() {}

  componentWillUnmount() {}

  clearDeckListCache() {
    console.log("clear cache")
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
    this.database
      .then(db => {
        const tx = db.transaction("books", "readwrite")
        var store = tx.objectStore("books")

        this.props.propDeckList.forEach(e => store.delete(e))
        //store.delete("Baleful Strix")
        //store.delete("Counterspell")
        return tx.complete
      })
      .then(() => {
        console.log("removed item to the store os ")
      })
  }
  render() {
    //const {classes} = this.props;
    //const {myState} = this.state;
    //const { propMounted, propDefaultCardName, propUserName } = this.props
    let borderColor = ""
    if (this.props.propColors) {
      if (this.props.propColors.includes("W")) borderColor += "amber-100 "
      if (this.props.propColors.includes("U")) borderColor += "blue-500 "
      if (this.props.propColors.includes("B")) borderColor += "gray-900 "
      if (this.props.propColors.includes("R")) borderColor += "red-600 "
      if (this.props.propColors.includes("G")) borderColor += "green-600 "
    }
    const classes = styles
    const elemSize = 16
    return (
      <x.div
        border={6}
        borderColor={borderColor}
        //size={elemSize}
        //maxWidth={32}
        //minWidth={16}
        //h={16}

        w={1}
        h={32}
        //pt="75%"
        //style={{ paddingTop: "100%" }}
        textAlign="center"
        //p={1}
        textOverflow="ellipsis"
        overflow="hidden"
        borderRadius="md"
        display="flex"
        flexDirection="column"
      >
        <x.div
          flexGrow={1}
          onClick={() => {
            if (this.props.cbOnDeckClicked)
              this.props.cbOnDeckClicked(
                //cardsIDs[this.props.propTempID].join("\n")
                this.props.propDeckList
              )
          }}
        >
          {this.props.propDeckName}
        </x.div>
        <x.div display="flex" p={1}>
          <x.div flexGrow={1} />
          <x.button
            p={1}
            border={1}
            borderColor="gray-900"
            borderRadius="sm"
            bg="gray-600-a50"
            textOverflow="ellipsis"
            onClick={() => {
              this.clearDeckListCache()
              this.props.cbRemoveDeckBox(this.props.propDeckID)
            }}
          >
            Remove
          </x.button>
        </x.div>
      </x.div>
    )
  }
}

export default DeckBox
