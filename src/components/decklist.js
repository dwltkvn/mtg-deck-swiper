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
    this.state = {}
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    //const {classes} = this.props;
    //const {myState} = this.state;
    //const { propMounted, propDefaultCardName, propUserName } = this.props
    const classes = styles

    return (
      <x.div h={1} display="flex" flexDirection="column">
        <x.div h={1} p={8}>
          <textarea
            defaultValue={cardsIDs.join("\n")}
            style={{ height: "100%", width: "100%" }}
            h={1}
          ></textarea>
        </x.div>
        <x.div p={8} display="flex" justifyContent="space-around">
          <button onClick={() => this.props.cbSetDeckList(cardsIDs.join("\n"))}>
            OK
          </button>
          <button>Clear</button>
          <button>Delete Cache</button>
        </x.div>
      </x.div>
    )
  }
}

export default DeckList
