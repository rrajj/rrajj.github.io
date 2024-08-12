import React from 'react';
import './App.css';
import Timeline from './components/Timeline';
import Typewriter from 'typewriter-effect';
import customwrapper from './type.css';
import GetSkills from './components/TechSkills'; 
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
import file from './Resume.pdf'

function App() {
  return (
    <div className="App" >
      <div className="social-icons">
        <a href={file} id='resume' target="_blank" rel="noopener noreferrer">
          <AiFillFilePdf style={{ marginLeft: '0px', fontSize: '80px' }} />
          <span class="hover-text">Resume</span>
        </a>
        <a href="https://www.linkedin.com/in/raj-rishav" rel="noopener noreferrer">
          <FaLinkedin style={{ marginLeft: '0px', fontSize: '80px' }}/>
          <span class="hover-text">LinkedIn</span>
        </a>
        <a href="https://github.com/rrajj" id='git' rel="noopener noreferrer">
          <FaGithub style={{ marginLeft: '0px', fontSize: '80px' }} />
          <span class="hover-text">Github</span>
        </a>
      </div>
      <header className="App-header">
      <GetSkills />
      <div className='type'>
            <Typewriter
              options={{
                  strings: ['Hello!', 'This is Rishav Raj.'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'customwrapper',
                }}
            />
      </div>
      </header>
      <main>
        <Timeline />
      </main>
      <footer>
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;