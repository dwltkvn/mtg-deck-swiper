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
        backgroundImage={`url("${TmpCard}")`}
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
