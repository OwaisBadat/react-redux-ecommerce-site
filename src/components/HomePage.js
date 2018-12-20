import React from 'react'

import HomePageCSS from './HomePage.css'
import jQuery from 'jquery';
import ProductListing from '../features/product-listing'
import data from '../data/products.json'

export default function HomePage(props){

  jQuery(document).ready(function(){
    var $ = jQuery,
     $navButtons = $(".btn");

 slideFunctions();

 function slideFunctions(){
  var $slideShow      =  $(".slide-show"),
      $slideImg       =  $(".slide-img"),
      $slideItem      =  $(".slide-item"),
      $indicator      =  $("[rol='low-indicator']"),
      slideLoopCount  =  0,
      slideOffset     =  0;

    const SLIDE_TIME = 5000;

    initSlider();


 // functions
  function initSlider(){
   $navButtons.on('mouseover',blurSlider);
   $navButtons.on('mouseleave',quitSliderBlur);
   changeSlide();
  }

 function changeSlide(){
   setInterval(change,SLIDE_TIME);

   $indicator.eq(slideLoopCount).animate({width:"100%"},SLIDE_TIME);

      function change(){
        if(slideLoopCount < $slideImg.length - 1){
          slideLoopCount++;
          slideOffset -= 100;
          $slideShow.animate({left: slideOffset + "vw"},1000);
          $indicator.eq(slideLoopCount).animate({width:"100%"},SLIDE_TIME);
        }else{
          slideLoopCount = 0 ;
          slideOffset = 0;
          $slideShow.animate({left: slideOffset},1000);
          $indicator.animate({width:"1%"},200);
          $indicator.eq(slideLoopCount).animate({width:"100%"},SLIDE_TIME);
        }
      }
    }

    function blurSlider(){
     $slideShow.addClass("blur-slide");
    }

    function quitSliderBlur(){
     $slideShow.removeClass("blur-slide");
    }
  }
  //  end slidefunctions
});

  return (

        <div>
          <div>
            <article className="slide">
              <div className="slide-show">
                <div className="slide-item"> <img className="slide-img" src="http://www.kiwithebeauty.com/wp-content/uploads/2018/02/black-panther-funko-pop-collection-920x350.png"/>
                </div>
                <div className="slide-item"> <img className="slide-img" src="https://png2.kisspng.com/sh/4b2ccc7ff5b7737277c37dda3dd7abdc/L0KzQYm3VsIzN5NvkZH0aYP2gLBuTfZ2dpx0RdDvbD3kc8XwjB4ufJDARdhyZ4X1dcS0kCBweqV4Rd9ubXB1cbPwjPliNZVqgdH3LYPkfrXskwMuPZM3fKtuMkjnc4iBgcgvPWk7UKQEMkK0RYOCV8E3Omc5UaI8MT7zfri=/kisspng-funko-nfl-action-toy-figures-sports-memorabilia-deion-sanders-5b2d9e28dc78a8.5868292215297162649031.png" /></div>
                <div className="slide-item"> <img className="slide-img" src="https://i.ytimg.com/vi/PCPlT7otDMA/maxresdefault.jpg" /></div>
              </div>
              <div className="slide-text">
                <div className="half a-center">
                  <h2 className="alide-title">Show Yo Funk</h2>
                </div>
                <div className="half a-down"><a className="btn over-transparent" href="#BestSellers">Best Sellers</a></div>
                <ul className="slide-indicator">
                  <li className="indicator-item"><a rol="low-indicator" /></li>
                  <li className="indicator-item"><a rol="low-indicator" /></li>
                  <li className="indicator-item"><a rol="low-indicator" /></li>
                </ul>
              </div>
            </article>
          </div>
          <div id="BestSellers">
            <h1 className="bestTitle">Best Sellers</h1>
              <ProductListing products={data.products} />
          </div>
        </div>
      );
    }
