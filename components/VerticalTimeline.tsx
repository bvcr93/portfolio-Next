import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { useContext } from "react";

export default function VerticalTimelineComp() {
  const theme = "bg-black text-white";
  return (
    <div className={`w-full `}>
      <VerticalTimeline>
        <div className="mt-20">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2022"
            iconStyle={{ background: "rgb(23, 147, 182)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Technician for auxiliary power supplies and high voltage elements
              in electrical substations
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rijeka, Croatia
            </h4>
          </VerticalTimelineElement>
        </div>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          icon={<FaSchool />}
          iconStyle={{ background: "rgb(95, 91, 219)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            ITAcademy Frontend Developer Bootcamp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Online Bootcamp
          </h4>
          <p>Javascript, React, Typescript</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          icon={<FaSchool />}
          iconStyle={{ background: "rgb(91, 219, 153)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
