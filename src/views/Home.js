import React from 'react';
import TitlewithCountdown from '../components/sections/TitlewithCountdown';
import Sponsor from '../components/sections/Sponsor';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import ImportantDate from '../components/sections/ImportantDate';
import DraftCommittee from '../components/sections/DraftCommitte';
import Social from '../components/sections/Social';
import Cta from '../components/sections/Cta';
import {TwitterTimelineEmbed} from "react-twitter-embed";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TitlewithCountdown imageFill className="illustration-section-01" />
        <FeaturesSplit invertMobile imageFill className="illustration-section-03" />
        <ImportantDate  topDivider className="gradient-section" />
        <DraftCommittee invertMobile imageFill className="illustration-section-03" />
        {/* <Sponsor topDivider bottomDivider />
         <Social topDivider bottomDivider /> */}
      </React.Fragment>
    );
  }
}

export default Home;
