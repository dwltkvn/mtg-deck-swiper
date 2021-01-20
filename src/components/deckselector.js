import React from "react"
import { x } from "@xstyled/styled-components"
import DeckBox from "./deckbox"
const styles = {}

class DeckSelector extends React.Component {
  constructor(props) {
    super(props)
    // this.handeEvent = this.handleEvent.bind(this);

    this.state = {}
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    //const {classes} = this.props;
    //const {myState} = this.state;
    //const { propMounted, propDefaultCardName, propUserName } = this.props
    const classes = styles
    const elemSize = 16
    console.log(this.props.propAllDecks.size)
    return (
      <x.div
        display="grid"
        gridTemplateColumns={3}
        gap={4}
        minHeight={1}
        //justifyContent="center"
        alignContent="center"
        justifyItems="center"
      >
        <x.div onClick={() => this.props.cbGoToDeckEditor()}>+</x.div>
        {this.props.propAllDecks?.map((deck, i) => (
          <DeckBox
            key={i}
            propDeckName="Deck"
            propColors="UB"
            propDeckList={deck}
            propTempID={0}
            cbOnDeckClicked={e => this.props.cbSetDeckList(e)}
          />
        ))}
      </x.div>
    )
  }
}

export default DeckSelector
