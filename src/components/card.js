import React from "react"
import { x } from "@xstyled/styled-components"
import TmpCard from "../images/template.png"

const styles = {}

class Card extends React.Component {
  constructor(props) {
    super(props)

    // this.handeEvent = this.handleEvent.bind(this);
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

    this.imgUrl =
      "https://c1.scryfall.com/file/scryfall-cards/large/front/f/5/f56861a7-b664-468f-bad7-838c02530827.jpg?1541002783"
    this.state = {
      stateImg: this.props.propDisplayImg ? this.imgUrl : TmpCard,
      stateLoadedFromCache: false
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.propDisplayImg !== this.props.propDisplayImg) {
      console.log(`Display Img ${this.position}`)

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
          var objectURL = URL.createObjectURL(blob)
          this.img.src = objectURL // will trigger imgLoaded()
        })
    }
  }

  imgLoaded() {
    console.log("img loaded2")
    console.log(this.img.height)
    console.log(this.img.width)
    console.log(this.img)

    //localStorage.setItem(encodeURI(this.name), stateImg)
    var canvas = document.createElement("canvas")
    canvas.width = this.img.width
    canvas.height = this.img.height

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d")
    ctx.drawImage(this.img, 0, 0)

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/jpeg")
    //console.log(dataURL)
    //localStorage.setItem(encodeURI(this.name), dataURL)
    this.setState({ stateImg: dataURL })
  }

  render() {
    //const {classes} = this.props;
    //const {myState} = this.state;
    //const { propMounted, propDefaultCardName, propUserName } = this.props
    const classes = styles

    return (
      <x.div
        zIndex={this.position}
        gridColumn="1 / 1"
        gridRow="1 / 1"
        h={0.99}
        w={0.99}
        //bg="rose-300"
        //borderWidth={5}
        //borderStyle="solid"
        //borderColor="yellow-400"
        backgroundImage={`url("${this.state.stateImg}")`}
        //backgroundImage={`url("${TmpCard}")`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="contain"
        //style={{ filter: `invert(${(this.position % 4) * 20}%)` }}
      >
        {this.props.propTopCard ? this.position : null}
      </x.div>
    )
  }
}

export default Card
