import React from "react"
import { x } from "@xstyled/styled-components"
import TmpCard from "../images/template.png"
import { Transition } from "react-transition-group"

const styles = {}

class Card extends React.Component {
  constructor(props) {
    super(props)

    // this.handeEvent = this.handleEvent.bind(this);
    this.fetchImg = this.fetchImg.bind(this)
    this.imgLoaded = this.imgLoaded.bind(this)

    if (typeof window !== `undefined`) {
      this.img = new window.Image()
    } else {
      this.img = { onload: null, src: null, width: 0, height: 0 }
    }
    this.img.onload = () => {
      this.imgLoaded()
    }
    this.name = props.propCardName
    this.position = props.propCardPosition
    this.objectURL = null

    this.imgUrl =
      "https://c1.scryfall.com/file/scryfall-cards/large/front/f/5/f56861a7-b664-468f-bad7-838c02530827.jpg?1541002783"
    this.state = {
      stateImg: this.props.propDisplayImg ? this.imgUrl : TmpCard,
      stateLoadedFromCache: false,
      stateSavedToCache: false,
      stateNotClickedYet: true
    }
  }

  componentDidMount() {
    if (this.props.propDisplayImg) this.fetchImg()
  }

  componentWillUnmount() {
    if (this.objectURL) URL.revokeObjectURL(this.objectURL)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.propDisplayImg !== this.props.propDisplayImg) {
      this.fetchImg()
    }
  }

  fetchImg() {
    this.props.propDatabase
      .then(db => {
        var tx = db.transaction("books", "readonly")
        var store = tx.objectStore("books")
        var res = store.get(this.name)
        return res
      })
      .then(json => {
        if (json) {
          this.objectURL = URL.createObjectURL(json.data)
          this.img.src = this.objectURL // will trigger imgLoaded()
          this.setState({ stateLoadedFromCache: true })
        } else {
          console.log(
            `https://api.scryfall.com/cards/named?exact=${encodeURI(
              this.name
            )}&format=image&version=normal`
          )
          fetch(
            `https://api.scryfall.com/cards/named?exact=${encodeURI(
              this.name
            )}&format=image&version=normal`
          )
            .then(response => response.blob())
            .then(blob => {
              //this.props.cbAddToDB(this.name, blob)
              this.props.propDatabase
                .then(db => {
                  const tx = db.transaction("books", "readwrite")
                  var store = tx.objectStore("books")
                  var item = {
                    id: this.name,
                    data: blob,
                    created: new Date().getTime()
                  }
                  store.add(item)
                  return tx.complete
                })
                .then(() => {
                  console.log("added item to the store os " + this.name)
                  this.setState({ stateSavedToCache: true })
                })
              this.objectURL = URL.createObjectURL(blob)
              this.img.src = this.objectURL // will trigger imgLoaded()
            })
          this.setState({ stateLoadedFromCache: false })
        }
      })
  }

  imgLoaded() {
    //localStorage.setItem(encodeURI(this.name), stateImg)
    var canvas = document.createElement("canvas")
    canvas.width = this.img.width
    canvas.height = this.img.height

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d")
    ctx.drawImage(this.img, 0, 0)
    var dataURL = canvas.toDataURL("image/jpeg")
    this.setState({ stateImg: dataURL })
  }

  render() {
    //const {classes} = this.props;
    //const {myState} = this.state;
    //const { propMounted, propDefaultCardName, propUserName } = this.props
    const classes = styles

    const duration = 500

    const defaultStyle = {
      transition: `all ${duration}ms ease-in`,
      opacity: 1.0,
      transform: "translate(0,0)"
    }

    const transitionStyles = {
      //entering: { opacity: 1.0, transform: "translate(0,0)" },
      entered: { opacity: 1.0, transform: "translate(0,0)" },
      exiting: { opacity: 0.0, transform: "translate(0,-100%)" }
      //exited: { opacity: 1.0, transform: "translate(0,-100%)" }
    }

    return (
      <x.div
        zIndex={this.position}
        gridColumn="1 / 1"
        gridRow="1 / 1"
        h={0.99}
        w={0.99}
        //borderWidth={5}
        //borderStyle="solid"
        //borderColor="red-400"
      >
        <Transition
          in={this.props.propDisplayImg && this.state.stateNotClickedYet}
          timeout={duration}
          onExited={() => this.props.cbOnCardClicked(this.position)}
        >
          {state => (
            <x.div
              h={1}
              w={1}
              //bg="red-300"
              //borderWidth={5}
              //borderStyle="solid"
              //borderColor="yellow-400"
              backgroundImage={`url("${this.state.stateImg}")`}
              //backgroundImage={`url("${TmpCard}")`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="contain"
              userSelect="none"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              //style={{ filter: `invert(${(this.position % 4) * 20}%)` }}
              onClick={() => {
                //this.props.cbOnCardClicked(this.position)
                this.setState({ stateNotClickedYet: false })
              }}
            >
              {this.props.propTopCard && this.state.stateLoadedFromCache
                ? "L "
                : ""}
              {this.props.propTopCard ? this.position : null}
              {this.props.propTopCard && this.state.stateSavedToCache
                ? " S"
                : ""}
            </x.div>
          )}
        </Transition>
      </x.div>
    )
  }
}

export default Card
