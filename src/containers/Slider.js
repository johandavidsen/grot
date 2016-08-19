import React from 'react';

import SliderComp from '../components/SliderComp'

/**
 *
 */
export default class Slider extends React.Component {

  /**
   *
   */
  constructor(props) {
    super(props)

    this.updatePosition = this.updatePosition.bind(this)
    this.sliderStyle = this.sliderStyle.bind(this)
    this.isOpaque = this.isOpaque.bind(this)
    this.setCurrentPosition = this.setCurrentPosition.bind(this)

    this.state = {
      images: [],
      currentPosition: 0
    }
  }


  /**
   * @method componentWillMount
   *
   */
  componentWillMount() {
    const images = (this.props.images || []).map((image, count) => {
        return image + `?rscver${count}`
      }
    )
    this.setState({images})
  }

  /**
   * @method setCurrentPosition
   *
   * This method takes a key and sets the currentPosition equal to that key.
   *
   * @param { int } key -
   *
   */
  setCurrentPosition( key ){
    this.updatePosition( key )
  }

  /**
   * @method updatePosition
   *
   * This method takes a position and set the state equal to that postion.
   *
   * @param { int } position -
   */
  updatePosition( position ) {
    this.setState({ currentPosition: position })
  }

  /**
   *
   */
  calculateShift( offset, amount ) {
    return offset * amount
  }

  /**
   * @method sliderStyle
   *
   * This method calculates the height of the image container and applies the result
   * to the transfrom.
   */
  sliderStyle(classname) {
    const items = document.getElementsByClassName(classname)

    if(items[0]){
      let itemHeight = items[0].offsetHeight
      let shift = this.calculateShift(itemHeight, this.state.currentPosition)

      let transform = `translate(0, -${shift}px)`
      return { transform }
    }
  }

  /**
   * @method isOpaque
   *
   * This method determines if the key is equal to the currentPosition.
   *
   * @param { int } key -
   */
  isOpaque( key ) {

    if( key == this.state.currentPosition ){
      return "slide-slider-item"
    }

    // one below currentPosition or one above
    if( (key - 1) == this.state.currentPosition || ( key + 1) == this.state.currentPosition ){
      return "slide-slider-item slide-slider-item_transparent"
    }
    return "slide-slider-item slide-slider-item_transparent"
  }

  /**
   *
   */
  render(){
    return (
      <SliderComp
        images={ this.state.images }
        sliderStyle={ this.sliderStyle }
        isOpaque={ this.isOpaque }
        setCurrentPosition={ this.setCurrentPosition }
        />
    )
  }
}
