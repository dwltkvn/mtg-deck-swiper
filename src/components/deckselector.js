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
          propTempID={0}
          cbOnDeckClicked={e => this.props.cbSetDeckList(e)}
        />
        <DeckBox
          propDeckName="Queen Marchesa"
          propColors="UBR"
          propTempID={1}
          cbOnDeckClicked={e => this.props.cbSetDeckList(e)}
        />
        <DeckBox
          propDeckName="Massacre Girl"
          propColors="B"
          propTempID={2}
          cbOnDeckClicked={e => this.props.cbSetDeckList(e)}
        />

        <DeckBox
          propDeckName="Sultai Kadena"
          propColors="UBG"
          propTempID={3}
          cbOnDeckClicked={e => this.props.cbSetDeckList(e)}
        />
        <DeckBox
          propDeckName="Jeskai Elsha"
          propColors="WUR"
          propTempID={4}
          cbOnDeckClicked={e => this.props.cbSetDeckList(e)}
        />
      </x.div>
    )
  }
}

export default DeckSelector
