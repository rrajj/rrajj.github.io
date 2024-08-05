import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const TimelineElement = ({ data }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={data.date}
      iconStyle={{ background: data.iconBackground, color: '#fff' }}
      icon={data.icon}
    >
      <h3 className="vertical-timeline-element-title">{data.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
      <p>{data.description}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;