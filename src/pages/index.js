import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DeckList from "../components/decklist"
import MTGDeck from "../components/deck"

const styles = {}

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    // this.handeEvent = this.handleEvent.bind(this);
    this.setDeckList = this.setDeckList.bind(this)
    this.state = {
      stateStep: 0,
      stateDeckList: ""
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  setDeckList(deckList) {
    this.setState({ stateDeckList: deckList, stateStep: 1 })
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
          <DeckList
            cbSetDeckList={e => {
              this.setDeckList(e)
            }}
          />
        )}
        {this.state.stateStep === 1 && (
          <MTGDeck propDeckList={this.state.stateDeckList} />
        )}
      </Layout>
    )
  }
}

export default IndexPage
