import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DeckEditor from "../components/decklist"
import MTGDeck from "../components/deck"
import DeckSelector from "../components/deckselector"

const styles = {}

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    // this.handeEvent = this.handleEvent.bind(this);
    this.setDeckList = this.setDeckList.bind(this)
    this.addDeckList = this.addDeckList.bind(this)

    this.state = {
      stateStep: 0,
      stateDeckList: "",
      stateAllDecks: []
    }
  }

  componentDidMount() {
    if (localStorage.getItem("allDecks") !== null) {
      const stateAllDecks = JSON.parse(localStorage.getItem("allDecks"))
      this.setState({ stateAllDecks })
    }
  }

  componentWillUnmount() {}

  addDeckList(deckList) {
    console.log(deckList)
    let stateAllDecks = this.state.stateAllDecks
    stateAllDecks.push(deckList)
    console.log(stateAllDecks)
    this.setState({ stateAllDecks }, () => {
      localStorage.setItem("allDecks", JSON.stringify(stateAllDecks))
      this.setState({ stateStep: 0 })
    })
  }

  setDeckList(deckList) {
    console.log(deckList)
    this.setState({ stateDeckList: deckList }, () =>
      this.setState({ stateStep: 2 })
    )
  }

  render() {
    //const {classes} = this.props;
    //const {myState} = this.state;
    //const { propMounted, propDefaultCardName, propUserName } = this.props
    const classes = styles

    return (
      <Layout>
        <SEO title="Home" />
        {this.state.stateStep === 0 && (
          <DeckSelector
            propAllDecks={this.state.stateAllDecks}
            cbGoToDeckEditor={() => this.setState({ stateStep: 1 })}
            cbSetDeckList={e => {
              this.setDeckList(e)
            }}
          />
        )}
        {this.state.stateStep === 1 && (
          <DeckEditor
            cbAddDeckList={e => {
              this.addDeckList(e)
            }}
          />
        )}
        {this.state.stateStep === 2 && (
          <MTGDeck propDeckList={this.state.stateDeckList} />
        )}
      </Layout>
    )
  }
}

export default IndexPage
