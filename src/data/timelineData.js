// src/data/timelineData.js

import React from 'react';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const timelineData = [
  {
    date: "2022 - Present",
    icon: <FaBriefcase />,
    title: "Senior Developer",
    subtitle: "Tech Corp, San Francisco, CA",
    description: "Leading development teams in creating innovative web applications using cutting-edge technologies.",
    iconBackground: "#3e497a"
  },
  {
    date: "2019 - 2022",
    icon: <FaBriefcase />,
    title: "Web Developer",
    subtitle: "StartUp Inc., New York, NY",
    description: "Developed and maintained various client websites and internal tools using React and Node.js.",
    iconBackground: "#e9d35b"
  },
  {
    date: "2018",
    icon: <FaGraduationCap />,
    title: "Bachelor's Degree in Computer Science",
    subtitle: "University of Technology",
    description: "Graduated with honors. Specialized in web technologies and software engineering.",
    iconBackground: "#87bbfe"
  },
  {
    date: "2017",
    icon: <FaAward />,
    title: "Web Development Certification",
    subtitle: "Online Course",
    description: "Completed an intensive online course covering full-stack web development.",
    iconBackground: "#f9c74f"
  },
  {
    date: "2016",
    icon: <FaBriefcase />,
    title: "Junior Developer Intern",
    subtitle: "Local Web Solutions, Austin, TX",
    description: "Assisted in the development of websites for local businesses, gaining hands-on experience with HTML, CSS, and JavaScript.",
    iconBackground: "#fc8181"
  }
];

export default timelineData;