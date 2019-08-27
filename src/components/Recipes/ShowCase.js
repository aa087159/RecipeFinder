import React from "react";


const ShowCase = () => {
 
  return(
    
          <div className="slider">
              <input type="radio" name="slider" title="slide1" defaultChecked className="slider__nav"focused={'true'}/>
              <input type="radio" name="slider" title="slide2" defaultChecked className="slider__nav"/>
              <input type="radio" name="slider" title="slide3" defaultChecked className="slider__nav"/>
              <input type="radio" name="slider" title="slide4" defaultChecked className="slider__nav" />
              <div className="slider__inner">
                <div className="slider__contents">
                  <div className="overlay"></div>
                  <img src="https://source.unsplash.com/random/1601x600" alt="" className="slider__image"/>
                  <h2 className="slider__caption">Food</h2>
                  <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div className="slider__contents">
                  <img src="https://source.unsplash.com/random/1602x600" alt="" className="slider__image"/>
                  <h2 className="slider__caption">Recipes</h2>
                  <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div className="slider__contents">
                  <img src="https://source.unsplash.com/random/1603x600" alt="" className="slider__image"/>
                  <h2 className="slider__caption">Nutrition</h2>
                  <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div className="slider__contents">
                  <img src="https://source.unsplash.com/random/1604x600" alt="" className="slider__image"/>
                  <h2 className="slider__caption">Articles</h2>
                  <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
              </div>
          </div>
        )
}

export default ShowCase


