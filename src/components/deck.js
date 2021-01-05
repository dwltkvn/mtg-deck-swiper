import React from "react"
import { x } from "@xstyled/styled-components"
import MTGCard from "../components/card"

const styles = {}

const cardsIDs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

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
        //onClick={() => cardsIDs.pop()}
      >
        <MTGCard propCardPosition={10} />
        <MTGCard propCardPosition={10} />
      </x.div>
    )
  }
}

export default Card
