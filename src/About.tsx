import './About.css'
import portrait from './assets/about/portrait.jpg'
import cppIcon from './assets/about/cpp.png';
import cIcon from './assets/about/c.png';
import gitIcon from './assets/about/git.png';
import pythonIcon from './assets/about/python.png';
import reactIcon from './assets/about/react.svg';
import tsIcon from './assets/about/TypeScript.avif';
import rustIcon from './assets/about/rust.png';

function About() {
  return (
    <>
      <h1>About</h1>
      <div className="about-container">
        <div className="about-left-container">
          <div className="portrait-container">
            <img src={portrait}/>
          </div>
          <div className="about-text">
            <p>
              I am a passionate Computer Engineering major at UC Santa
              Cruz. I am concentrating in Computer Network with a deep
              interest in creating memory-safe C and C++ code. I will be
              graduating in December 2025. 
            </p>
            <br/>
            <p>
              I have lots of experience in creating rigorous networking
              programs implementing protocols for HTTP, logging, and
              Proxy servers. Many of these protocols I have implemented
              with threads, teaching me about thread safety, memory
              management, large codebases, and program efficiency.
              Additionally, I have relevant experience in embedded
              systems, mechanical design, and hardware design. I learned
              these topics in CSE 100 (Logic Design) and ECE 118
              (Mechatronics).
            </p>
            <br/>
            <p>
              In my free time I enjoy learning about cybersecurity and Linux
              ricing. I use arch btw ;) I also dabble with baking and playing
              the guitar.
            </p>
            <br/>
          </div>
        </div>

        {/* Skill Wall */}
        <div className="about-right-container">
          <div className="skill-wall">
            <div className="skill-column">
              <div className="skill-item">
                <div className="skill-item-content">
                  <img src={cppIcon}/>
                  <div>
                    C++ 
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-item-content">
                  <img src={gitIcon}/>
                  <div>
                    Git 
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-column">
              <div className="skill-item">
                <div className="skill-item-content">
                  <img src={reactIcon}/>
                  <div>
                    React 
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-item-content">
                  <img src={rustIcon}/>
                  <div>
                    Rust 
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-item-content">
                  <img src={tsIcon}/>
                  <div>
                    TypeScript 
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-column">
              <div className="skill-item">
                <div className="skill-item-content">
                  <img src={cIcon}/>
                  <div>
                    C 
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-item-content">
                  <img src={pythonIcon}/>
                  <div>
                    Python 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
