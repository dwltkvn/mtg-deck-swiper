import React from "react"
import { x } from "@xstyled/styled-components"

const styles = {}

const cardsIDs = [
  [
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
  ],
  [
    "Agent of Treachery",
    "Arcane Signet",
    "Arguel's Blood Fast / Temple of Aclazotz",
    "Attrition",
    "Black Market",
    "Blackcleave Cliffs",
    "Blade of the Bloodchief",
    "Bloodflow Connoisseur",
    "Bloodtracker",
    "Butcher of Malakir",
    "Canyon Slough",
    "Captivating Crew",
    "Carrion Feeder",
    "Command Tower",
    "Conquering Manticore",
    "Counterspell",
    "Crosis's Catacombs",
    "Crumbling Necropolis",
    "Dark Privilege",
    "Darkslick Shores",
    "Darkwater Catacombs",
    "Dimir Signet",
    "Disciple of Griselbrand",
    "Dragon Blood",
    "Dragonskull Summit",
    "Evolving Wilds",
    "Fabled Passage",
    "Falkenrath Aristocrat",
    "Feast on the Fallen",
    "Flayer of the Hatebound",
    "Foreboding Ruins",
    "Forge of Heroes",
    "Gilded Lotus",
    "Gonti, Lord of Luxury",
    "Grave Betrayal",
    "Gray Merchant of Asphodel",
    "Grim Haruspex",
    "Grixis Panorama",
    "Guildmages' Forum",
    "Harness by Force",
    "Harvester of Souls",
    "Herald of Secret Streams",
    "Hostage Taker",
    "Island",
    "Izzet Guildgate",
    "Last One Standing",
    "Luxury Suite",
    "Marchesa, the Black Rose",
    "Mark of Mutiny",
    "Mass Mutiny",
    "Mob Rule",
    "Molten Primordial",
    "Mountain",
    "Negate",
    "Opal Palace",
    "Phyrexian Altar",
    "Plaguecrafter",
    "Press into Service",
    "Priest of Forgotten Gods",
    "Profaner of the Dead",
    "Puppeteer Clique",
    "Rakdos Signet",
    "Reins of Power",
    "River Kelpie",
    "Rocky Tar Pit",
    "Shadowblood Ridge",
    "Silumgar's Command",
    "Skullclamp",
    "Slave of Bolas",
    "Sol Ring",
    "Sower of Temptation",
    "Stalking Vengeance",
    "Sunken Hollow",
    "Swamp",
    "Talisman of Dominance",
    "Talisman of Indulgence",
    "Terramorphic Expanse",
    "Undermine",
    "Underworld Connections",
    "Unspeakable Symbol",
    "Vampiric Rites",
    "Vampiric Tutor",
    "Victimize",
    "Warped Landscape",
    "Warstorm Surge",
    "Watery Grave",
    "Word of Seizing",
    "Wurmcoil Engine",
    "Zealous Conscripts"
  ],
  [
    "Ambition's Cost",
    "Ash Barrens",
    "Barren Moor",
    "Black Market",
    "Black Sun's Zenith",
    "Blackblade Reforged",
    "Blade of the Bloodchief",
    "Bloodcrazed Paladin",
    "Bolas's Citadel",
    "Bontu's Monument",
    "Bubbling Muck",
    "Cabal Coffers",
    "Cabal Stronghold",
    "Carrier Thrall",
    "Clackbridge Troll",
    "Dark Prophecy",
    "Deadly Rollick",
    "Decree of Pain",
    "Dusk Legion Zealot",
    "Endrek Sahr, Master Breeder",
    "Erebos, Bleak-Hearted",
    "Erratic Portal",
    "Expedition Map",
    "Exsanguinate",
    "Forced March",
    "Genesis Chamber",
    "Grave Betrayal",
    "Hagra Mauling / Hagra Broodpit",
    "Harvester of Souls",
    "Jet Medallion",
    "Kaya's Ghostform",
    "Koskun Falls",
    "Lazotep Reaver",
    "Leaden Myr",
    "Malakir Cullblade",
    "Malakir Rebirth / Malakir Mire",
    "Massacre Girl",
    "Mutilate",
    "Myriad Landscape",
    "Orzhov Enforcer",
    "Oubliette",
    "Pestilence",
    "Phyrexian Arena",
    "Phyrexian Reclamation",
    "Pitiless Plunderer",
    "Polluted Mire",
    "Ravenous Chupacabra",
    "Reassembling Skeleton",
    "Revel in Riches",
    "Safe Haven",
    "Sanctum of Eternity",
    "Sangromancer",
    "Scavenger Drake",
    "Sengir Autocrat",
    "Shade's Form",
    "Silent Arbiter",
    "Skullclamp",
    "Snuff Out",
    "Sol Ring",
    "Solemn Simulacrum",
    "Spoils of Blood",
    "Spreading Plague",
    "Swamp",
    "Swarm of Bloodflies",
    "Swiftfoot Boots",
    "Syphon Mind",
    "Thespian's Stage",
    "Thopter Assembly",
    "Thrashing Wumpus",
    "Thrilling Encore",
    "Torment of Hailfire",
    "Vampiric Tutor",
    "Voyager Staff",
    "Wayfarer's Bauble",
    "Weaponcraft Enthusiast",
    "Yahenni's Expertise"
  ],
  [
    "Ainok Survivalist",
    "Aphetto Runecaster",
    "Arcane Signet",
    "Asceticism",
    "Ash Barrens",
    "Bane of the Living",
    "Beast Whisperer",
    "Biomass Mutation",
    "Bojuka Bog",
    "Brine Elemental",
    "Cascading Cataracts",
    "Chromeshell Crab",
    "Command Tower",
    "Cultivate",
    "Cunning Evasion",
    "Darkslick Shores",
    "Darkwater Catacombs",
    "Deathmist Raptor",
    "Den Protector",
    "Dream Chisel",
    "Dulcet Sirens",
    "Evolving Wilds",
    "Exotic Orchard",
    "Fabled Passage",
    "Farseek",
    "Forest",
    "Ghastly Conscription",
    "Gift of Doom",
    "Grim Haruspex",
    "Guardian Project",
    "Hooded Hydra",
    "Icefeather Aven",
    "Island",
    "Ixidor, Reality Sculptor",
    "Ixidron",
    "Kadena, Slinking Sorcerer",
    "Kadena's Silencer",
    "Kheru Spellsnatcher",
    "Kodama's Reach",
    "Leadership Vacuum",
    "Llanowar Wastes",
    "Misty Rainforest",
    "Mystic Forge",
    "Nantuko Vigilante",
    "Obscuring Aether",
    "Opulent Palace",
    "Overgrown Tomb",
    "Primordial Mist",
    "Putrefy",
    "Reality Shift",
    "Reliquary Tower",
    "Sagu Mauler",
    "Sakura-Tribe Elder",
    "Salt Road Ambushers",
    "Scroll of Fate",
    "Secret Plans",
    "Seedborn Muse",
    "Silent Specter",
    "Silumgar Assassin",
    "Skinthinner",
    "Sol Ring",
    "Stratus Dancer",
    "Strionic Resonator",
    "Sunken Hollow",
    "Swamp",
    "Temple of Mystery",
    "Tempt with Discovery",
    "Temur Sabertooth",
    "Temur War Shaman",
    "Terramorphic Expanse",
    "Thelonite Hermit",
    "Thieving Amalgam",
    "Thousand Winds",
    "Trail of Mystery",
    "Urban Evolution",
    "Vesuvan Shapeshifter",
    "Vivien, Champion of the Wilds",
    "Voidmage Apprentice",
    "Wash Out",
    "Watery Grave",
    "Weaver of Lies",
    "Whisperwood Elemental",
    "Wilderness Reclamation",
    "Willbender",
    "Words of Wind",
    "Yavimaya Coast",
    "Zoetic Cavern"
  ],
  [
    "Abbot of Keral Keep",
    "Adeliz, the Cinder Wind",
    "Aetherize",
    "Aetherspouts",
    "Anticipate",
    "Aria of Flame",
    "Ash Barrens",
    "Azorius Guildgate",
    "Azorius Signet",
    "Backdraft Hellkite",
    "Battlefield Forge",
    "Bloodwater Entity",
    "Boros Guildgate",
    "Boros Locket",
    "Brainstorm",
    "Burning Prophet",
    "Command Tower",
    "Commander's Sphere",
    "Counterflux",
    "Curious Homunculus / Voracious Reader",
    "Divine Reckoning",
    "Doublecast",
    "Dragon-Style Twins",
    "Drawn from Dreams",
    "Electrostatic Field",
    "Elsha of the Infinite",
    "Exotic Orchard",
    "Expansion / Explosion",
    "Fabled Passage",
    "Fact or Fiction",
    "Firebrand Archer",
    "Firemind's Research",
    "Flood of Tears",
    "Generous Gift",
    "Ghostly Prison",
    "Goblin Electromancer",
    "Goblinslide",
    "Guttersnipe",
    "Heroic Reinforcements",
    "Highland Lake",
    "Invert / Invent",
    "Island",
    "Izzet Guildgate",
    "Izzet Signet",
    "Jace's Sanctum",
    "Kykar, Wind's Fury",
    "Mass Diminish",
    "Mission Briefing",
    "Mistfire Adept",
    "Mizzium Tank",
    "Mountain",
    "Murmuring Mystic",
    "Mystic Monastery",
    "Mystic Retrieval",
    "Narset's Reversal",
    "Niblis of Frost",
    "Ojutai Exemplars",
    "Plains",
    "Port Town",
    "Prairie Stream",
    "Precognition Field",
    "Primal Amulet / Primal Wellspring",
    "Prismatic Strands",
    "Radiate",
    "Ral, Storm Conduit",
    "Riddleform",
    "Rise from the Tides",
    "Sacred Foundry",
    "Saheeli, Sublime Artificer",
    "Seachrome Coast",
    "Shu Yun, the Silent Tempest",
    "Skywise Teachings",
    "Stone Quarry",
    "Stormchaser Mage",
    "Swiftwater Cliffs",
    "Talisman of Conviction",
    "Talrand, Sky Summoner",
    "The Mirari Conjecture",
    "Thermo-Alchemist",
    "Time Wipe",
    "Tranquil Cove",
    "Wee Dragonauts",
    "Wind-Scarred Crag",
    "Young Pyromancer"
  ]
]

class DeckBox extends React.Component {
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
    let borderColor = ""
    if (this.props.propColors) {
      if (this.props.propColors.includes("W")) borderColor += "amber-100 "
      if (this.props.propColors.includes("U")) borderColor += "blue-500 "
      if (this.props.propColors.includes("B")) borderColor += "gray-900 "
      if (this.props.propColors.includes("R")) borderColor += "red-600 "
      if (this.props.propColors.includes("G")) borderColor += "green-600 "
    }
    const classes = styles
    const elemSize = 16
    return (
      <x.div
        border={6}
        borderColor={borderColor}
        //size={elemSize}
        //maxWidth={32}
        //minWidth={16}
        //h={16}

        w={1}
        h={32}
        //pt="75%"
        //style={{ paddingTop: "100%" }}
        textAlign="center"
        //p={1}
        textOverflow="ellipsis"
        overflow="hidden"
        borderRadius="md"
        display="flex"
        flexDirection="column"
        onClick={() => {
          if (this.props.cbOnDeckClicked)
            this.props.cbOnDeckClicked(
              //cardsIDs[this.props.propTempID].join("\n")
              this.props.propDeckList
            )
        }}
      >
        <x.div flexGrow={1}>{this.props.propDeckName}</x.div>
        <x.div display="flex" p={1}>
          <x.button
            p={1}
            border={1}
            borderColor="gray-900"
            borderRadius="sm"
            bg="gray-600-a75"
            w={1 / 2}
            textOverflow="ellipsis"
          >
            Remove
          </x.button>
          <x.button
            p={1}
            border={1}
            borderColor="gray-900"
            borderRadius="sm"
            bg="gray-600-a25"
            w={1 / 2}
            textOverflow="ellipsis"
          >
            Clear
          </x.button>
        </x.div>
      </x.div>
    )
  }
}

export default DeckBox
