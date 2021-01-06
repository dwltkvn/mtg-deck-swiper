import React from "react"
import { x } from "@xstyled/styled-components"
import MTGCard from "../components/card"

const styles = {}

const cardsIDs = [
  "Meren of Clan Nel Toth",
  "Ventifact Bottle",
  "Blood Vassal",
  "Conqueror's Galleon",
  "Heart Warden",
  "Spawning Pool",
  "Dust Bowl",
  "Twilight Mire",
  "The Great Henge",
  "Songs of the Damned",
  "Zof Consumption",
  "Desert of the Indomitable",
  "Eldrazi Temple",
  "Sapseep Forest",
  "Untaidake, the Cloud Keeper",
  "Urza's Factory",
  "Reliquary Tower",
  "Evolving Wilds",
  "Mystifying Maze"
]

class Card extends React.Component {
  constructor(props) {
    super(props)
    // this.handeEvent = this.handleEvent.bind(this);
    this.state = { stateCardsIDs: cardsIDs }
  }

  componentDidMount() {}

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
        borderWidth={8}
        borderStyle="solid"
        borderColor="red-600"
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

export default Card
