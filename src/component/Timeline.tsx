import timelineData from "../data/timelineData";
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"


export const Timeline = () => {

  const handleBackward = () => {
    console.log("clicked")
  }

  return (
    <div>
      
        <BsFillSkipBackwardFill
          className="back-arrow"
          onClick={handleBackward}
        />
    
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineData
          .sort((a, b) => {
            const dateA = a.date_added;
            const dateB = b.date_added;
            if (dateA < dateB) return 1;
            else if (dateA > dateB) return -1;
            return 0;
          })
          .map((timeline) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                key={timeline.id}
                contentArrowStyle={{
                  borderRight: "15px solid  rgb(0, 0, 0)"
                   , alignContent: 'center'
                }}
                dateClassName="date"
                iconStyle={{ background: "rgb(179, 147, 208)", color: "#fff"}}
                icon={<BiCurrentLocation /> }
              >
                <h4>{timeline.date_added}</h4>
                <h2 className="vertical-timeline-element-title">
                  Location: {timeline.current_location}
                </h2>
                <p className="vertical-timeline-element-subtitle">
                  Distance Left : {timeline.rem_distance} km
                </p>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </div>
  );
}

