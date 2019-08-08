import React from "react";
import Slider from "react-slick";
import imgOne from '../layout/img/clouds.jpg';

class ShowCase extends React.Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
          
            <div className='showCaseImg'>
                <img src={imgOne}></img>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
            <div>
            <h3>5</h3>
            </div>
            <div>
            <h3>6</h3>
            </div>
          
        
      </Slider>
    );
  }
}

export default ShowCase