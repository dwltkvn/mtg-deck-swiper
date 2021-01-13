import React from "react"
import { x } from "@xstyled/styled-components"

const cardsIDs = [
  "Aetherize",
  "Ashiok's Erasure",
  "Bad River",
  "Baleful Strix",
  "Blessing of Leeches",
  "Brainstorm",
  "Brineborn Cutthroat",
  "Castle Locthwain",
  "Chemister's Insight",
  "Clearwater Pathway / Murkwater Pathway",
  "Counterspell",
  "Creeping Tar Pit",
  "Crystal Shard",
  "Cunning Nightbonder",
  "Darkslick Shores",
  "Darkwater Catacombs",
  "Draining Whelk",
  "Dream Eater",
  "Essence Scatter",
  "Evacuation",
  "Fabled Passage",
  "Fact or Fiction",
  "Force of Despair",
  "Frantic Search",
  "Glasspool Mimic / Glasspool Shore",
  "Go for the Throat",
  "Heartless Act",
  "Island",
  "Isochron Scepter",
  "Jwari Disruption / Jwari Ruins",
  "Languish",
  "Liliana's Standard Bearer",
  "Lochmere Serpent",
  "Malakir Rebirth / Malakir Mire",
  "Merfolk Trickster",
  "Midnight Clock",
  "Mission Briefing",
  "Mizzium Meddler",
  "Murderous Rider / Swift End",
  "Mystic Sanctuary",
  "Mystical Teachings",
  "Naiad of Hidden Coves",
  "Narset's Reversal",
  "Negate",
  "Nimble Obstructionist",
  "Notion Thief",
  "Nymris, Oona's Trickster",
  "Omen of the Dead",
  "Omen of the Sea",
  "Pearl Lake Ancient",
  "Pelakka Predation / Pelakka Caverns",
  "Phyrexian Reclamation",
  "Pongify",
  "Quickling",
  "Reality Shift",
  "Reliquary Tower",
  "Rewind",
  "Run Away Together",
  "Runechanter's Pike",
  "Sea Gate Restoration / Sea Gate, Reborn",
  "Silundi Vision / Silundi Isle",
  "Slitherwisp",
  "Soul Manipulation",
  "Spectral Sailor",
  "Spite / Malice",
  "Stitch Together",
  "Stunt Double",
  "Sublime Epiphany",
  "Sunken Hollow",
  "Sunken Ruins",
  "Swamp",
  "Tainted Isle",
  "Talrand, Sky Summoner",
  "Temple of Deceit",
  "The Magic Mirror",
  "Thought Vessel",
  "Thryx, the Sudden Storm",
  "Tyrant's Scorn",
  "Underground River",
  "Voidmage Husher",
  "Voracious Greatshark",
  "Watery Grave",
  "Wavebreak Hippocamp"
]

const styles = {}

class DeckList extends React.Component {
  constructor(props) {
    super(props)
    // this.handeEvent = this.handleEvent.bind(this);
    this.onDeckListChange = this.onDeckListChange.bind(this)
    this.state = {
      stateDeckList: cardsIDs.join("\n")
    }
    this.deckList = cardsIDs.join("\n")
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onDeckListChange(event) {
    this.deckList = event.target.value
    this.deckList = this.deckList.replaceAll("1 ", "")
  }

  render() {
    //const {classes} = this.props;
    //const {myState} = this.state;
    //const { propMounted, propDefaultCardName, propUserName } = this.props
    const classes = styles

    return (
      <x.div h={1} display="flex" flexDirection="column">
        <x.div h={1} p={8}>
          <x.textarea
            value={this.state.stateDeckList}
            //style={{ height: "100%", width: "100%", resize: "none" }}
            h={1}
            w={1}
            border={2}
            borderColor="black-600"
            borderRadius="md"
            resize="none"
            onChange={this.onDeckListChange}
          ></x.textarea>
        </x.div>
        <x.div p={8} display="flex" justifyContent="space-around">
          <x.button
            p={2}
            bg="gray-600"
            hoverBg="gray-700"
            color="white"
            borderRadius="md"
            w={1 / 4}
            onClick={() => this.props.cbSetDeckList(this.deckList)}
          >
            OK
          </x.button>
          <x.button
            p={2}
            bg="gray-600"
            hoverBg="gray-700"
            color="white"
            borderRadius="md"
            w={1 / 4}
            onClick={() => this.setState({ stateDeckList: "" })}
          >
            Clear
          </x.button>
          <x.button
            p={2}
            bg="gray-600"
            hoverBg="gray-700"
            color="white"
            borderRadius="md"
            w={1 / 4}
          >
            Delete Cache
          </x.button>
        </x.div>
      </x.div>
    )
  }
}

export default DeckList
