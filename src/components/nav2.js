import React from 'react'

import { NavLink } from 'react-router-dom'
import jQuery from 'jquery';

import Nav2CSS from './nav2.css'

export default function Nav2(props){

  jQuery(document).ready(function(){
    var $ = jQuery,
     $navButtons = $(".btn");

     $("#toggle").click(function(event) {
  event.preventDefault();
  if ($(this).hasClass("isDown")) {
    $(".navbar-fixed-top").animate({ "margin-top": "-62px" }, "fast");
    $("#content").animate({ "margin-top": "5px" }, "fast");
    $(this).removeClass("isDown");
  } else {
    $(".navbar-fixed-top").animate({ "margin-top": "0px" }, "fast");
    $("#content").animate({ "margin-top": "80px" }, "fast");
    $(this).addClass("isDown");
  }
  return false;
  });
  });


  return (

        <div className="navbar navbar-fixed-top">
          <nav className="navbar-inner header">
            <div className="container">
              <div className="brand">
                IN THE CLOUDS <i className="fa fa-cloud" style={{textShadow: '1px 1px white, -1px -1px #666'}} />
              </div>
              <ul className="nav pull-right">
                <li>
                  <a className="nav-link">
                    TUTORIALS
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    MODELS
                  </a>
                </li>
                <li>
                  <a className="nav-link">
                    PLACES
                  </a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle nav-link" data-toggle="dropdown">
                    DROP
                  </a><ul className="dropdown-menu text-center"><a className="dropdown-toggle nav-link" data-toggle="dropdown">
                    </a><li><a className="dropdown-toggle nav-link" data-toggle="dropdown">
                      </a><a>
                        Example 1
                      </a>
                    </li>
                    <li>
                      <a>
                        Example 2
                      </a>
                    </li>
                    <li>
                      <a>
                        Example 3
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="triangle-down center">
                <p>
                  <i className="fa fa-chevron-down fa-2x isDown" id="toggle" />
                </p>
              </div>
            </div>
          </nav>
        </div>
      );
}
