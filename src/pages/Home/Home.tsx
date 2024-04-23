import React from "react";
import Overview from "../../components/Overview/Overview";
import SectionContent1 from "../../components/SectionContent1/SectionContent1";
import SectionContent2 from "../../components/SectionContent2/SectionContent2";
import SectionContent3 from "../../components/SectionContent3/SectionContent3";
import SectionContent4 from "../../components/SectionContent4/SectionContent4";
import SectionContent5 from "../../components/SectionContent5/SectionContent5";
import SectionContent6 from "../../components/SectionContent6/SectionContent6";
import SectionContent7 from "../../components/SectionContent7/SectionContent7";
import ApplyNow from "../../components/ApplyNow/ApplyNow";

const HomePage = () => {
  return (
    <>
      <Overview />

      <SectionContent1 />
      <SectionContent2 />
      <SectionContent3 />
      <SectionContent4 />
      <SectionContent5 />
      <SectionContent6 />
      <SectionContent7 />
      <ApplyNow />
    </>
  );
};

export default HomePage;
