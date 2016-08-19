import React from 'react';

import '../stylesheets/components/_slider.scss'

/**
 * @class Slider
 *
 * This class has been modified base on the code found at:
 *
 * https://github.com/azimgd/react-image-slider
 *
 *
 */
export default class SliderComp extends React.Component {

  /**
   *
   */
  render() {
    const { images, sliderStyle, isOpaque, setCurrentPosition } = this.props
    const sliderStyl = sliderStyle('slide-slider-item')


    return (
      <div className="slide-container" >
        <div className="slide-slider" style={ sliderStyl } >
          {
            images.map((item, key) => {

                const itemClass = isOpaque(key)

                return <div key={key} className={ itemClass } >
                  <img src={item} onClick={ () => { setCurrentPosition(key) } } className="slide-slider-item-img" />
                </div>
              }
            )
          }
        </div>
      </div>
    );
  }
}
