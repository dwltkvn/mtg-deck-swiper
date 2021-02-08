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

    return (
      <x.div
        display="grid"
        gridTemplateColumns={3}
        gap={4}
        p={2}
        //minHeight={1}
        //justifyContent="center"
        alignContent="center"
        justifyItems="center"
      >
        <x.div onClick={() => this.props.cbGoToDeckEditor()}>+</x.div>
        {Object.keys(this.props.propAllDecks).map((deckKey, i) => {
          return (
            <DeckBox
              key={i}
              propDeckName={deckKey}
              propColors={this.props.propAllDecks[deckKey].deckcolor}
              propDeckList={this.props.propAllDecks[deckKey].decklist}
              propDeckID={deckKey}
              cbOnDeckClicked={e => this.props.cbSetDeckList(e)}
              cbRemoveDeckBox={e => this.props.cbRemoveDeckList(e)}
            />
          )
        })}
      </x.div>
    )
  }
}

export default DeckSelector
