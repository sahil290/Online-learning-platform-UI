import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css/animate.min.css";
const TopSection = () => {
  return (
    <>
      <div id="top-wrapper">
        <div id="on1">
          <h1>
            up your <span>skills</span> to <span>advance</span> your <span>career</span> paths
          </h1>
          <p>
            Provides you with the latest online learning system material that help your knoweledge
            grow
          </p>
          <div id="m-btn">
            <button id="o-btn">get started</button>
            <button id="t-btn">get free trial</button>
          </div>
          <div id="ls-0">
            <span>
              <img src="../../media/PS.svg" alt="top main logo" />
              public speaking
            </span>
            <span>
              <img src="../../media/BS.svg" alt="top main logo" />
              career oriented
            </span>
            <span>
              <img src="../../media/idea.svg" alt="top main logo" />
              creative thinking
            </span>
          </div>
        </div>
        <div id="all-img">
          <img src="../../media/LI.svg" alt="top main logo" />
        </div>
        <img src="../../media/TT.svg" alt="top main logo" id="cc-1" />
        <img src="../../media/TT.svg" alt="top main logo" id="cc-2" />
        <div id="main-imo">
          <img src="../../media/YS.svg" alt="top main logo" />
        </div>
        <div id="hollow-span"></div>
        <div id="small-d1">
          <span id="tak-img">
            <img src="../../media/LC.svg" alt="top main logo" />
          </span>
          <div>
            <span id="k">2K+</span>
            <span id="nk">video courses</span>
          </div>
        </div>
        <div id="small-d2">
          <span id="takl-img">
            <img src="../../media/PC.svg" alt="top main logo" />
          </span>
          <div>
            <span id="k">5K+</span>
            <span id="nk">online courses</span>
          </div>
        </div>
        <div id="small-d3">
          <span id="tak-img">
            <img src="../../media/SA.svg" alt="top main logo" />
          </span>
          <div>
            <span id="nk">tutors</span>
            <span id="k">250+</span>
          </div>
        </div>
        <span id="holo1"></span>
        <span id="holo2"></span>
        <span id="holo3"></span>
        <span id="holo4"></span>
      </div>
    </>
  );
};

export default TopSection;
