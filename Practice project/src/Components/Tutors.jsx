import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";

const Tutors = () => {
  return (
    <>
      <div id="t-wrapper">
        <h6>Tutors</h6>
        <p id="ist-p">meet the heroes</p>
        <span id="t-in">
          On Ed-Circle, instructors from all over the world instruct millions of students. We
          <br />
          offer the knowledge and abilities.
        </span>

        <div id="t-main-wrapper">
          <AnimationOnScroll
            animateIn="animate__fadeInLeftBig"
            duration={1}
            delay={1}
            animateOnce={true}
          >
            <div id="t-card">
              <span id="t-image">
                <img
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/y2gizrtnfymkuecqdp8t"
                  alt="tutor image"
                />
              </span>
              <p id="t-name">Thomas webb</p>
              <p id="t-des">Application Support Analyst Lead</p>
              <p id="t-desg">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
              <span id="t-social">
                <img src="../../media/TW.svg" alt="Twitter icon" />
                <img src="../../media/LK.svg" alt="Twitter icon" />
              </span>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInLeftBig"
            duration={1}
            delay={1}
            animateOnce={true}
          >
            <div id="t-card">
              <span id="t-image">
                <img
                  src="https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/daniel-lian-b106217a.jpeg"
                  alt="tutor image"
                />
              </span>
              <p id="t-name">Courtney Henry</p>
              <p id="t-des">Director, Undergraduate Analytics and Planning</p>
              <p id="t-desg">Lead engineering teams at Figma, Pitch, and Protocol Labs.</p>
              <span id="t-social">
                <img src="../../media/TW.svg" alt="Twitter icon" />
                <img src="../../media/LK.svg" alt="Twitter icon" />
              </span>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRightBig"
            duration={1}
            delay={1}
            animateOnce={true}
          >
            <div id="t-card">
              <span id="t-image">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="tutor image"
                />
              </span>
              <p id="t-name">Albert Flores</p>
              <p id="t-des">Career Educator</p>
              <p id="t-desg">Former PM for Linear, Lambda School, and On Deck.</p>
              <span id="t-social">
                <img src="../../media/TW.svg" alt="Twitter icon" />
                <img src="../../media/LK.svg" alt="Twitter icon" />
              </span>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRightBig"
            duration={1}
            delay={1}
            animateOnce={true}
          >
            <div id="t-card">
              <span id="t-image">
                <img
                  src="https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg"
                  alt="tutor image"
                />
              </span>
              <p id="t-name">Marvin McKinney</p>
              <p id="t-des">Co-op & Internships Program & Operations Manager</p>
              <p id="t-desg">Former frontend dev for Linear, Coinbase, and Postscript.</p>
              <span id="t-social">
                <img src="../../media/TW.svg" alt="Twitter icon" />
                <img src="../../media/LK.svg" alt="Twitter icon" />
              </span>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </>
  );
};

export default Tutors;
