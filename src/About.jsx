import React, { useEffect } from 'react'
import ReactGA from "react-ga4";

const About = () => {
    useEffect(() => {
        ReactGA.initialize("G-M1B3F0L153");
    
        ReactGA.send({
          hitType: "pageview",
          page: window.location.pathname + window.location.search,
          title: 'About.jsx',
        });
      }
      , []);

  return (
    <div>About</div>
  )
}

export default About