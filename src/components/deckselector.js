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
        minHeight={1}
        //justifyContent="center"
        alignContent="center"
        justifyItems="center"
      >
        <DeckBox
          propDeckName="Dimir Nymris"
          propColors="UB"
          cbOnDeckClicked={e => this.props.cbSetDeckList(e)}
        />
        <DeckBox propDeckName="Queen Marchesa" propColors="UBR" />
        <DeckBox propColors="GR" />

        <DeckBox />
        <DeckBox />
        <DeckBox />

        <DeckBox />
        <DeckBox />
        <DeckBox />
      </x.div>
    )
  }
}

export default DeckSelector
