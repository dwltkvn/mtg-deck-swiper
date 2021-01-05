import React from "react"
import { x } from "@xstyled/styled-components"
import TmpCard from "../images/template.png"

const styles = {}

class Card extends React.Component {
  constructor(props) {
    super(props)
    // this.handeEvent = this.handleEvent.bind(this);
    this.name = props.propCardName
    this.position = props.propCardPosition
    this.imgUrl =
      "https://c1.scryfall.com/file/scryfall-cards/large/front/f/5/f56861a7-b664-468f-bad7-838c02530827.jpg?1541002783"
    this.state = { stateImg: this.props.propDisplayImg ? this.imgUrl : TmpCard }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.propDisplayImg !== this.props.propDisplayImg) {
      console.log(`Display Img ${this.position}`)
      this.setState({ stateImg: this.imgUrl })
    }
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
        style={{ filter: `invert(${(this.position % 4) * 20}%)` }}
      >
        {this.position}
      </x.div>
    )
  }
}

export default Card
