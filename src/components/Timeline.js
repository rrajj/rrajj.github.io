
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdOutlineWork } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { SiAwslambda } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
// import head from "../headstarter.png";
// import { type } from '@testing-library/user-event/dist/type';

import { pantry_github, winner, ai_customer } from './redirects';

const Timeline = () => {
    return (
      <VerticalTimeline layout='2-columns' lineColor='black'>

          {/* headstarter fellowship */}
          <VerticalTimelineElement position='left' 
            className="vertical-timeline-element--education"
            date="November 2024 - Present"
            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
            icon={<MdOutlineWork />}
            iconOnClick={ai_customer}
            style={{cursor: 'pointer'}}
          >
            <h3 className="vertical-timeline-element-title">WorldLink US (Client: CITI Corp)</h3>
            <h4 className="vertical-timeline-element-subtitle">Data Scientist/Software Developer</h4>
          </VerticalTimelineElement>

          {/*  */}
          <VerticalTimelineElement position='right' 
            className="vertical-timeline-element--education"
            date="July 2024"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
            icon={ <TbBrandNextjs color='white'/> } 
            iconOnClick={ai_customer}
            style={{cursor: 'pointer'}}
          >
            <h3 className="vertical-timeline-element-title">AI Chatbot</h3>
            <h4 className="vertical-timeline-element-subtitle">A <code>NextJS</code> chatbot, using <code>OpenAI</code> and implemented RAG using <code>Langchain</code>. Deployed on <code>AWS EC2</code>, and also integrated <code>AWSBedrock API</code></h4>
          </VerticalTimelineElement>
          {/* Pantry Tracker */}
          <VerticalTimelineElement position='left' 
            className="vertical-timeline-element--education"
            date="July 2024"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
            icon={ <TbBrandNextjs color='white'/> } 
            iconOnClick={pantry_github}
            style={{cursor: 'pointer'}}>
            <h3 className="vertical-timeline-element-title">Pantry Tracker</h3>
            <h4 className="vertical-timeline-element-subtitle">A <code>NextJS</code> app to track pantry items, using <code>Firebase</code> for storage, and <code>MatetialUI</code> for different frontend components.</h4>
          </VerticalTimelineElement>

          {/* debate bot */}
          <VerticalTimelineElement position='right' 
            className="vertical-timeline-element--education"
            date="June 2024"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
            icon={<FcOk color='black' />} 
            iconOnClick={winner}
            style={{cursor: 'pointer'}}>
            <h3 className="vertical-timeline-element-title">Hackathon Winner</h3>
            <h4 className="vertical-timeline-element-subtitle">Team WON <a href="https://code-the-vote.devpost.com/">Code the Vote</a> Hackathon.</h4>
          </VerticalTimelineElement>

          {/* AWS Pipeline */}
          <VerticalTimelineElement position='left' 
            className="vertical-timeline-element--education"
            date="May 2024"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
            icon={<SiAwslambda color='white'/>}>
            <h3 className="vertical-timeline-element-title">AWS Pipeline</h3>
            <h4 className="vertical-timeline-element-subtitle">A pipeline using <code>aws-cdk</code> and <code>lambda</code> functions.</h4>
          </VerticalTimelineElement>

          {/* gra */}
          <VerticalTimelineElement position='right'
            className="vertical-timeline-element--education"
            date="2023 - 2024"
            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
            icon={<MdOutlineWork />}>
            <h3 className="vertical-timeline-element-title">AT&T Center for Virtualization (SMU)</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer (Graduate Research Assistant)</h4>
          </VerticalTimelineElement>

          {/* masters */}
          <VerticalTimelineElement position='left'
            className="vertical-timeline-element--education"
            date="2022 - 2024"
            iconStyle={{ background: 'rgb(192,192,192)', color: '#fff' }}
            icon={<IoSchoolSharp />}>
            <h3 className="vertical-timeline-element-title">Southern Methodist University</h3>
            <h4 className="vertical-timeline-element-subtitle">M.S Computer Science</h4>
          </VerticalTimelineElement>

          {/* work */}
          <VerticalTimelineElement position='right'
            className="vertical-timeline-element--education"
            date="2019 - 2022"
            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
            icon={<MdOutlineWork />}>
            <h3 className="vertical-timeline-element-title">Boltzmann Labs</h3>
            <h4 className="vertical-timeline-element-subtitle">AI Engineer</h4>  
          </VerticalTimelineElement>

          {/* bachelors */}
          <VerticalTimelineElement position='left'
            className="vertical-timeline-element--education"
            date="2015 - 2019"
            iconStyle={{ background: 'rgb(192,192,192)', color: '#fff' }}
            icon={<IoSchoolSharp />}>
            <h3 className="vertical-timeline-element-title">Chandigarh University</h3>
            <h4 className="vertical-timeline-element-subtitle">B.E. Computer Science & Engineering</h4>
            
          </VerticalTimelineElement>
    {/* <VerticalTimelineElement position='right'
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={<logo />}
    /> */}
  </VerticalTimeline>
    );
};



export default Timeline;