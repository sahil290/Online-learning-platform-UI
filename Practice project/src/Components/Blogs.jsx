import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";

const Blogs = () => {
  return (
    <>
      <div id="blogs-wrapper">
        <h6>Our recent blogs</h6>
        <div id="b-main">
          <AnimationOnScroll
            animateIn="animate__fadeInLeftBig"
            duration={1}
            delay={1}
            animateOnce={true}
          >
            <div id="b-ist">
              <div id="i6">
                <span id="b-img">
                  <img
                    src="https://www.corporatemeetingpartner.com/uploads/7/4/4/3/74438425/istock-504987926_2_orig.jpg"
                    alt="corpoate meeting"
                  />
                </span>
                <div id="i7">
                  <span id="b-date">November 16, 2022</span>
                  <span id="b-heading">Three Pillars of User Delight</span>
                  <span id="b-es">
                    Delight can be experienced viscerally, behaviourally, and reflectively. A great
                    design is ...
                  </span>
                  <div id="b-tags">
                    <span id="tag-one">Research</span>
                    <span id="tag-two">UI/UX</span>
                  </div>
                </div>
              </div>
              <div id="i6">
                <span id="b-img">
                  <img
                    src="https://www.corporatemeetingpartner.com/uploads/7/4/4/3/74438425/istock-504987926_2_orig.jpg"
                    alt="corpoate meeting"
                  />
                </span>
                <div id="i7">
                  <span id="b-date">November 16, 2022</span>
                  <span id="b-heading">Three Pillars of User Delight</span>
                  <span id="b-es">
                    Delight can be experienced viscerally, behaviourally, and reflectively. A great
                    design is ...
                  </span>
                  <div id="b-tags">
                    <span id="tag-one">Research</span>
                    <span id="tag-tw">UI Design</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRightBig"
            duration={1}
            delay={1}
            animateOnce={true}
          >
            <div id="b-snd">
              <span id="b-img">
                <img
                  src="https://www.corporatemeetingpartner.com/uploads/7/4/4/3/74438425/istock-504987926_2_orig.jpg"
                  alt="corpoate meeting"
                />
              </span>
              <div id="i9">
                <span id="b-date">November 16, 2022</span>
                <span id="b-heading">Three Pillars of User Delight</span>
                <span id="b-es">
                  Delight can be experienced viscerally, behaviourally, and reflectively. A great
                  design is ...
                </span>
                <div id="b-tags">
                  <span id="tag-one">Research</span>
                  <span id="tag-two">UI/UX</span>
                  <span id="tag-twp">Programming</span>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </>
  );
};

export default Blogs;
