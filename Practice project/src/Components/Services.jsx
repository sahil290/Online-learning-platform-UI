import React from "react";

const Services = () => {
  return (
    <>
      <div id="ser-main">
        <h2 id="our">our services</h2>
        <span id="d-t">Fostering a playful & engaging learning environment</span>
        <div id="serv-content">
          <div id="active-card">
            <div id="ts">
              <span id="tsi-1">
                <img src="../../media/UE.svg" alt="Web developemnt icon" />
              </span>
              <span id="tst">user experience</span>
            </div>
            <div id="ts-2">Lessons on design that cover the most recent developments.</div>
            <div id="ts-3">
              learn more
              <img src="../../media/A2.svg" alt="Web developemnt icon" />
            </div>
          </div>
          <div id="card">
            <div id="ts">
              <span id="tsi-1">
                <img src="../../media/WD.svg" alt="Web developement icon" />
              </span>
              <span id="tst">web developement</span>
            </div>
            <div id="ts-2">
              Classes in development that cover the most recent advancements in web.
            </div>
            <div id="ts-3">
              learn more
              <img src="../../media/A1.svg" alt="Web developement icon" />
            </div>
          </div>
          <div id="card">
            <div id="ts">
              <span id="tsi-1" className="tsi-2">
                <img src="../../media/MK.svg" alt="Web developement icon" />
              </span>
              <span id="tst">marketing</span>
            </div>
            <div id="ts-2">Marketing courses that cover the most recent marketing trends</div>
            <div id="ts-3">
              learn more
              <img src="../../media/A1.svg" alt="Web developement icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
